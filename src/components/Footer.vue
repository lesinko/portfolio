<template>
  <footer class="bg-dark-900 dark:bg-black text-white py-4">
    <div class="container-custom">

      <!-- Bottom Bar -->
      <div class="w-full">
        <div class="w-full flex flex-col md:flex-row justify-between items-center">
          <p class="w-full text-dark-400 text-center text-sm">
            © {{ currentYear }} Titus Lesinko. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
// Icons will be replaced with simple SVG or text

export default {
  name: 'Footer',
  components: {},
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear
    }
  }
}
</script> 