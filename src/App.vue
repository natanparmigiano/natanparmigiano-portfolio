<script setup>
import { navSections } from './data/portfolio.js'
import { useLanguage } from './composables/useLanguage'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SummarySection from './components/SummarySection.vue'
import AboutPortfolioSection from './components/AboutPortfolioSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProjectTimeline from './components/ProjectTimeline.vue'

const { language, content, setLanguage } = useLanguage()
</script>

<template>
  <div class="min-h-screen overflow-hidden">
    <div class="fixed inset-0 -z-10 bg-[var(--bg)]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--accent-soft),transparent_34%),radial-gradient(circle_at_80%_10%,var(--glow),transparent_28%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
    </div>

    <AppHeader
      :meta="content.meta"
      :nav="content.nav"
      :labels="content.labels"
      :language="language"
      :sections="navSections"
      @language-change="setLanguage"
    />

    <main class="mx-auto max-w-5xl px-5 pb-16 sm:px-6">
      <HeroSection :meta="content.meta" :hero="content.hero" :labels="content.labels" />

      <SummarySection :about-me="content.aboutMe" />
      <AboutPortfolioSection :about-portfolio="content.aboutPortfolio" />
      <ProjectsSection
        :projects="content.projects"
        :labels="content.labels"
        :disclosure-levels="content.aboutPortfolio.disclosureLevels"
      />
    </main>

    <ProjectTimeline
      :projects="content.projects.items"
      :labels="content.labels"
    />

    <footer class="border-t border-[var(--border-subtle)] bg-[var(--bg)]/75 py-6 text-center text-xs text-[var(--text-subtle)] backdrop-blur">
      {{ content.meta.name }} · {{ new Date().getFullYear() }}
    </footer>
  </div>
</template>
