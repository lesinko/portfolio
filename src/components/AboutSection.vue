<template>
  <section id="about" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-xl md:text-3xl font-bold mb-4">
          About <span class="gradient-text">Me</span>
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          Experienced Cloud and DevOps Engineer with over four years of hands-on experience designing, automating, and operating scalable, secure, and highly available cloud infrastructure. I bridge the gap between development and operations through automated CI/CD pipelines, cloud infrastructure, and containerized deployments. Strong focus on reliability, performance, and security, with a track record of streamlining delivery processes and enabling teams to ship resilient software faster.
        </p>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" ref="statsContainer">
        <div class="card text-center">
          <div class="text-2xl font-bold gradient-text">{{ animatedYears }}+</div>
          <div class="text-sm text-dark-600 dark:text-dark-400">Years Experience</div>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold gradient-text">{{ animatedTech }}+</div>
          <div class="text-sm text-dark-600 dark:text-dark-400">Technologies</div>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold gradient-text">{{ animatedApps }}+</div>
          <div class="text-sm text-dark-600 dark:text-dark-400">Apps Deployed</div>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold gradient-text">{{ animatedUptime }}%</div>
          <div class="text-sm text-dark-600 dark:text-dark-400">Uptime SLA</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  components: {},
  data() {
    return {
      animatedYears: 0,
      animatedTech: 0,
      animatedApps: 0,
      animatedUptime: 0,
      hasAnimated: false,
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true
            this.animateValue('animatedYears', 4, 1500)
            this.animateValue('animatedTech', 12, 1500)
            this.animateValue('animatedApps', 150, 2000)
            this.animateValue('animatedUptime', 99, 2000)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(this.$refs.statsContainer)
  },
  methods: {
    animateValue(property, target, duration) {
      const start = 0
      const startTime = performance.now()

      const step = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        this[property] = Math.floor(eased * (target - start) + start)

        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          this[property] = target
        }
      }

      requestAnimationFrame(step)
    },
  },
}
</script> 