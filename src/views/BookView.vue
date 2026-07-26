<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, watch, watchEffect } from "vue";
import { getBookBySlug } from "../books/catalog";
import ReadingProgress from "../components/ReadingProgress.vue";
import HeroSection from "../components/HeroSection.vue";
import BookSection from "../components/BookSection.vue";
import ConceptGrid from "../components/ConceptGrid.vue";
import Timeline from "../components/Timeline.vue";
import FiguresGrid from "../components/FiguresGrid.vue";
import CollapsibleBookSection from "../components/CollapsibleBookSection.vue";
import ClosingSection from "../components/ClosingSection.vue";
import BookNavDrawer from "../components/BookNavDrawer.vue";
import { useActiveSection } from "../composables/useActiveSection";
import { useMediaQuery } from "../composables/useMediaQuery";
import { usePageMeta } from "../composables/usePageMeta";
import { useReadingPosition } from "../composables/useReadingPosition";
import { registerBookBottomBar, unregisterBookBottomBar } from "../composables/useAppBottomBar";
import ReadCelebration from "../components/ReadCelebration.vue";
import { absoluteUrl, bookOgImageUrl } from "../config/site";
import { bookCanonicalPath, formatBookDescription, formatBookDisplayTitle, formatBookPageTitle } from "../utils/seo";
import ReadCompletionPanel from "../components/ReadCompletionPanel.vue";

const SPECIAL_TOC_IDS = new Set(["cierre", "conceptos", "cronologia", "figuras"]);

const props = defineProps<{ slug: string }>();

const book = computed(() => getBookBySlug(props.slug));
const isMobile = useMediaQuery("(max-width: 1023px)");

usePageMeta(
    computed(() => {
        const current = book.value;
        if (!current) return null;

        const description = formatBookDescription(current.meta);
        const displayTitle = formatBookDisplayTitle(current.meta);

        return {
            title: formatBookPageTitle(current.meta),
            description,
            canonicalPath: bookCanonicalPath(current.slug),
            ogType: "article" as const,
            ogImage: bookOgImageUrl(current.slug),
            jsonLd: {
                "@context": "https://schema.org",
                "@type": "Book",
                name: displayTitle,
                author: {
                    "@type": "Person",
                    name: current.meta.author,
                },
                description,
                image: bookOgImageUrl(current.slug),
                url: absoluteUrl(bookCanonicalPath(current.slug)),
            },
        };
    }),
);
const menuOpen = ref(false);

const chapterToc = computed(() => {
    if (!book.value) return [];
    return book.value.toc.filter((item) => !SPECIAL_TOC_IDS.has(item.id));
});

const navToc = computed(() => {
    if (!book.value) return [];
    return [
        { id: "cierre", num: "★", label: book.value.closing.title },
        ...chapterToc.value,
        { id: "conceptos", num: "✦", label: "Conceptos clave" },
        { id: "cronologia", num: "◈", label: "Cronología" },
        { id: "figuras", num: "✦", label: "Figuras clave" },
    ];
});

const readingSectionIds = computed(() => {
    if (!book.value) return [];
    return ["cierre", ...chapterToc.value.map((item) => item.id), "conceptos", "cronologia", "figuras"];
});

const sectionLabels = computed(() => {
    if (!book.value) return {};
    return {
        cierre: book.value.closing.title,
        ...Object.fromEntries(chapterToc.value.map((item) => [item.id, item.label])),
        conceptos: "Conceptos clave",
        cronologia: "Cronología",
        figuras: "Figuras clave",
    };
});

const sectionIds = computed(() => navToc.value.map((item) => item.id));
const { activeId } = useActiveSection(sectionIds);

const bookSlug = computed(() => props.slug);

const { isMarkedRead, bookJustCompleted, toggleMarkedRead } = useReadingPosition(bookSlug, readingSectionIds, sectionLabels);

const showReadCelebration = ref(false);
const showCompletionPanel = ref(false);

watch(bookJustCompleted, (completed) => {
    if (!completed) return;
    showReadCelebration.value = false;
    void nextTick(() => {
        showReadCelebration.value = true;
    });
});

function onReadCelebrationFinished() {
    showReadCelebration.value = false;
    showCompletionPanel.value = true;
}

function onCompletionPanelDismiss() {
    showCompletionPanel.value = false;
    bookJustCompleted.value = false;
}

watch(menuOpen, (open) => {
    document.body.style.overflow = open ? "hidden" : "";
});

onUnmounted(() => {
    document.body.style.overflow = "";
});

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}

function closeMenu() {
    menuOpen.value = false;
}

function scrollToCover() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

watchEffect((onCleanup) => {
    const b = book.value;
    if (!b) return;
    registerBookBottomBar({
        menuOpen: menuOpen.value,
        slug: b.slug,
        title: b.meta.title,
        author: b.meta.author,
        handlers: {
            scrollToTop: scrollToCover,
            toggleMenu,
        },
    });
    onCleanup(() => unregisterBookBottomBar());
});
</script>

<template>
    <div v-if="book" class="book-page">
        <ReadingProgress v-if="!isMobile" />

        <HeroSection
            :meta="book.meta"
            :slug="book.slug"
            :done="isMarkedRead"
            @toggle-read="toggleMarkedRead"
        />

        <ReadCelebration :active="showReadCelebration" @finished="onReadCelebrationFinished" />

        <ReadCompletionPanel :slug="book.slug" :active="showCompletionPanel" @dismiss="onCompletionPanelDismiss" />

        <div class="page-layout">
            <main id="contenido" class="page-layout__main">
                <div class="container book-content">
                    <ClosingSection :closing="book.closing" />

                    <BookSection v-for="section in book.sections" :key="section.id" :section="section" />

                    <div class="divider" />

                    <CollapsibleBookSection id="conceptos" icon="✦" title="Conceptos clave" :hint="`${book.keyConcepts.length} conceptos`">
                        <ConceptGrid :items="book.keyConcepts" />
                    </CollapsibleBookSection>

                    <CollapsibleBookSection id="cronologia" icon="◈" title="Cronología" :hint="`${book.chronology.length} hitos`">
                        <Timeline :items="book.chronology" />
                    </CollapsibleBookSection>

                    <CollapsibleBookSection id="figuras" icon="✦" title="Figuras clave" :hint="`${book.figures.length} figuras`">
                        <FiguresGrid :items="book.figures" />
                    </CollapsibleBookSection>
                </div>

                <footer class="footer">
                    <p>{{ book.footer.line1 }}</p>
                    <p class="footer-meta">
                        <em>{{ book.footer.line2 }}</em>
                    </p>
                </footer>
            </main>
        </div>

        <BookNavDrawer :open="menuOpen" :toc="navToc" :active-id="activeId" @close="closeMenu" />
    </div>
</template>

<style src="./BookView.css"></style>

<style scoped>
.footer-meta {
    margin-top: 0.3rem;
    opacity: 0.5;
}
</style>
