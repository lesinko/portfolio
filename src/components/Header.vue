<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-dark-200 dark:border-dark-700">
    <nav class="container-custom px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#about" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
          <a href="#skills" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a>
          <a href="#experience" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Experience</a>
          <a href="#contact" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden p-2 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
          >
            <span v-if="!mobileMenuOpen" class="text-sm">☰</span>
            <span v-else class="text-sm">✕</span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-dark-200 dark:border-dark-700">
        <div class="flex flex-col space-y-4">
          <a href="#about" @click="closeMobileMenu" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
          <a href="#skills" @click="closeMobileMenu" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a>
          <a href="#experience" @click="closeMobileMenu" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Experience</a>
          <a href="#projects" @click="closeMobileMenu" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
          <a href="#contact" @click="closeMobileMenu" class="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue'
// Icons will be replaced with simple SVG or text

export default {
  name: 'Header',
  components: {},
  setup() {
    const isDark = ref(false)
    const mobileMenuOpen = ref(false)

    const toggleDarkMode = () => {
      isDark.value = !isDark.value
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    onMounted(() => {
      // Check for saved theme preference or default to light mode
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
      }
    })

    return {
      isDark,
      mobileMenuOpen,
      toggleDarkMode,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script> 