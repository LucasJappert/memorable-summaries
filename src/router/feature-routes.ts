import type { RouteRecordRaw } from 'vue-router'
import ChangelogView from '../views/ChangelogView.vue'
import ConceptIndexView from '../views/ConceptIndexView.vue'
import FlashcardSession from '../views/FlashcardSession.vue'
import PhaseRecapView from '../views/PhaseRecapView.vue'
import QuickReviewView from '../views/QuickReviewView.vue'
import TensionsView from '../views/TensionsView.vue'

/** Rutas de features — cada fase agrega las suyas aquí. */
export const featureRoutes: RouteRecordRaw[] = [
  {
    path: '/repaso/:slug',
    name: 'quick-review',
    component: QuickReviewView,
    props: true,
  },
  {
    path: '/tarjetas/:slug?',
    name: 'flashcards',
    component: FlashcardSession,
    props: true,
  },
  {
    path: '/fase/:num',
    name: 'phase-recap',
    component: PhaseRecapView,
    props: true,
  },
  {
    path: '/conceptos',
    name: 'concepts',
    component: ConceptIndexView,
  },
  {
    path: '/tensiones',
    name: 'tensions',
    component: TensionsView,
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: ChangelogView,
  },
]
