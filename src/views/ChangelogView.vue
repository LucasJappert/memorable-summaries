<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import changelogContent from '../../changelog.md?raw'
import { usePageMeta } from '../composables/usePageMeta'
import { APP_VERSION } from '../version'
import { formatYYYYMMDDToLongEsAR } from '../utils/format-date'
import {
  CHANGELOG_CATEGORY_CONFIG,
  formatChangelogBold,
  parseChangelog,
  type ChangelogCategory,
} from '../utils/parse-changelog'
import { SITE_NAME } from '../utils/seo'

const versions = parseChangelog(changelogContent)
const visibleVersions = versions.slice(0, 5)
const hiddenCount = Math.max(0, versions.length - visibleVersions.length)

function categoryTone(category: ChangelogCategory): string {
  return CHANGELOG_CATEGORY_CONFIG[category].tone
}

usePageMeta(
  computed(() => ({
    title: `Changelog — ${SITE_NAME}`,
    description: 'Historial de cambios de Memorable Summaries.',
    canonicalPath: 'changelog',
  })),
)
</script>

<template>
  <div class="changelog-page">
    <main class="changelog">
      <header class="changelog__hero">
        <RouterLink to="/" class="changelog__back">← Biblioteca</RouterLink>
        <div class="changelog__hero-row">
          <h1 class="changelog__title">Changelog</h1>
          <span class="changelog__version-chip">v{{ APP_VERSION }}</span>
        </div>
      </header>

      <article
        v-for="(item, index) in visibleVersions"
        :key="item.version"
        class="changelog__version"
      >
        <div class="changelog__version-head">
          <h2 class="changelog__version-number">v{{ item.version }}</h2>
          <span v-if="index === 0" class="changelog__latest">Última</span>
          <time
            v-if="item.date !== 'Unknown'"
            class="changelog__date"
            :datetime="item.date"
          >
            {{ formatYYYYMMDDToLongEsAR(item.date) }}
          </time>
        </div>

        <template v-if="item.hasCategories">
          <section
            v-for="catGroup in item.categories"
            :key="catGroup.category"
            class="changelog__category"
          >
            <span
              class="changelog__category-chip"
              :class="`changelog__category-chip--${categoryTone(catGroup.category)}`"
            >
              {{ catGroup.label }}
            </span>

            <ul class="changelog__changes">
              <li
                v-for="(change, changeIndex) in catGroup.changes"
                :key="changeIndex"
                class="changelog__change"
              >
                <p class="changelog__change-title" v-html="formatChangelogBold(change.title)" />

                <p
                  v-if="change.description.trim()"
                  class="changelog__change-desc"
                  v-html="formatChangelogBold(change.description.trim())"
                />

                <ul v-if="change.subItems.length" class="changelog__subitems">
                  <li
                    v-for="(subItem, subIndex) in change.subItems"
                    :key="subIndex"
                    class="changelog__subitem"
                  >
                    <span v-html="formatChangelogBold(subItem)" />
                    <ul
                      v-if="change.nestedSubItems[subIndex]?.length"
                      class="changelog__nested"
                    >
                      <li
                        v-for="(nestedItem, nestedIndex) in change.nestedSubItems[subIndex]"
                        :key="nestedIndex"
                        v-html="formatChangelogBold(nestedItem)"
                      />
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </template>

        <p v-else class="changelog__empty">Sin cambios documentados.</p>

        <hr v-if="index < visibleVersions.length - 1" class="changelog__divider" />
      </article>

      <p v-if="hiddenCount > 0" class="changelog__more">
        Y {{ hiddenCount }} versiones anteriores…
      </p>
    </main>
  </div>
</template>

<style src="./ChangelogView.css"></style>
