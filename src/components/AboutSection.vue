<template>
  <section id="about" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-xl md:text-3xl font-bold mb-4">
          About <span class="gradient-text">Me</span>
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          Experienced Cloud and DevOps Engineer with over 5 years of experience specializing on automation, scalability, and system reliability. I bridge development and operations by building secure CI/CD pipelines, managing cloud infrastructure, and streamlining deployments to deliver faster, more resilient software.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6">
        
          <!-- Key Points -->
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold">What I Do</h3>
            <div class="grid gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-primary-600">✓</span>
                </div>
                <div>
                  <h4 class="font-medium">Infrastructure as Code</h4>
                  <p class="text-sm text-dark-600 dark:text-dark-400">Design and implement infrastructure using Terraform</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-primary-600">✓</span>
                </div>
                <div>
                  <h4 class="font-medium">CI/CD Pipeline Development</h4>
                  <p class="text-sm text-dark-600 dark:text-dark-400">Build and manage robust deployment pipelines using Jenkin,Bitbucket Pipelines and GitHub Actions</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-primary-600">✓</span>
                </div>
                <div>
                  <h4 class="font-medium">Container Orchestration</h4>
                  <p class="text-sm text-dark-600 dark:text-dark-400">Manage containerized applications with AWS ECS, K8S and Docker</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-primary-600">✓</span>
                </div>
                <div>
                  <h4 class="font-medium">Monitoring & Observability</h4>
                  <p class="text-sm text-dark-600 dark:text-dark-400">Implement monitoring solutions with Prometheus, Grafana, Loki and Promtail</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual/Stats -->
        <div class="space-y-8">

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4">
            <div class="card text-center">
              <div class="text-2xl font-bold gradient-text">5+</div>
              <div class="text-sm text-dark-600 dark:text-dark-400">Years Experience</div>
            </div>
            <div class="card text-center">
              <div class="text-2xl font-bold gradient-text">15+</div>
              <div class="text-sm text-dark-600 dark:text-dark-400">Technologies</div>
            </div>
            <div class="card text-center">
              <div class="text-2xl font-bold gradient-text">24/7</div>
              <div class="text-sm text-dark-600 dark:text-dark-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Icons will be replaced with simple SVG or text

export default {
  name: 'AboutSection',
  components: {}
}
</script> 