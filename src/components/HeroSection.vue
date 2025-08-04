<template>
  <section class="section-padding pt-32 pb-20">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-2xl md:text-4xl font-bold leading-tight">
              Hi, I'm <span class="gradient-text">Titus Lesinko</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-dark-600 dark:text-dark-400 font-medium">
              DevOps Engineer
            </h2>
          </div>

        </div>

        <!-- Visual Element -->
        <div class="relative">
          <div class="relative z-10">
            <!-- Animated Code Block -->
            <div class="card max-w-md mx-auto">
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="space-y-2 font-mono text-sm">
                <div class="text-dark-600 dark:text-dark-400">
                  <span class="text-purple-600">const</span> <span class="text-blue-600">devopsEngineer</span> = {
                </div>
                <div class="ml-4 text-dark-600 dark:text-dark-400">
                  <span class="text-green-600">name</span>: <span class="text-orange-600">'Titus Lesinko'</span>,
                </div>
                <div class="ml-4 text-dark-600 dark:text-dark-400">
                  <span class="text-green-600">role</span>: <span class="text-orange-600">'DevOps Engineer'</span>,
                </div>
                <div class="ml-4 text-dark-600 dark:text-dark-400">
                  <span class="text-green-600">experience</span>: <span class="text-blue-600">3</span>,
                </div>
                <div class="ml-4 text-dark-600 dark:text-dark-400">
                  <span class="text-green-600">skills</span>: [<span class="text-orange-600">'AWS'</span>, <span class="text-orange-600">'Kubernetes'</span>, <span class="text-orange-600">'Docker'</span>]
                </div>
                <div class="text-dark-600 dark:text-dark-400">};</div>
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute top-10 -right-10 w-20 h-20 bg-primary-100 dark:bg-primary-900/20 rounded-full animate-bounce-slow"></div>
          <div class="absolute -bottom-10 -left-10 w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full animate-bounce-slow" style="animation-delay: 1s;"></div>
          <div class="absolute top-1/2 -right-5 w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full animate-bounce-slow" style="animation-delay: 2s;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Icons will be replaced with simple SVG or text

export default {
  name: 'HeroSection',
  components: {}
}
</script> 