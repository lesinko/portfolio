<template>
  <section id="skills" class="section-padding bg-dark-50 dark:bg-dark-800/50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Technical <span class="gradient-text">Skills</span>
        </h2>
      </div>

      <div class="grid gap-8">
        <!-- Cloud Platforms -->
        <div class="card">
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <span class="mr-3 text-primary-600">☁️</span>
            Cloud Platforms
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in cloudSkills" :key="skill.name" class="flex items-center space-x-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600 transition-colors">
              <span class="text-primary-600">{{ skill.icon }}</span>
              <span class="font-medium text-sm">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Container & Orchestration -->
        <div class="card">
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <span class="mr-3 text-primary-600">📦</span>
            Container & Orchestration
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in containerSkills" :key="skill.name" class="flex items-center space-x-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600 transition-colors">
              <span class="text-primary-600">{{ skill.icon }}</span>
              <span class="font-medium text-sm">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- CI/CD & Automation -->
        <div class="card">
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <span class="mr-3 text-primary-600">🌿</span>
            CI/CD & Automation
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in cicdSkills" :key="skill.name" class="flex items-center space-x-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600 transition-colors">
              <span class="text-primary-600">{{ skill.icon }}</span>
              <span class="font-medium text-sm">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Infrastructure as Code -->
        <div class="card">
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <span class="mr-3 text-primary-600">💻</span>
            Infrastructure as Code
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in iacSkills" :key="skill.name" class="flex items-center space-x-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600 transition-colors">
              <span class="text-primary-600">{{ skill.icon }}</span>
              <span class="font-medium text-sm">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Monitoring & Observability -->
        <div class="card">
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <span class="mr-3 text-primary-600">📊</span>
            Monitoring & Observability
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in monitoringSkills" :key="skill.name" class="flex items-center space-x-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600 transition-colors">
              <span class="text-primary-600">{{ skill.icon }}</span>
              <span class="font-medium text-sm">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Programming & Scripting -->
        <div class="card">
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <span class="mr-3 text-primary-600">🖥️</span>
            Programming & Scripting
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in programmingSkills" :key="skill.name" class="flex items-center space-x-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-700 hover:bg-dark-100 dark:hover:bg-dark-600 transition-colors">
              <span class="text-primary-600">{{ skill.icon }}</span>
              <span class="font-medium text-sm">{{ skill.name }}</span>
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
  name: 'SkillsSection',
  components: {},
  data() {
    return {
      cloudSkills: [
        { name: 'AWS', icon: '☁️' },
        { name: 'GCP', icon: '☁️' },
      ],
      containerSkills: [
        { name: 'Docker', icon: '📦' },
        { name: 'Kubernetes', icon: '📦' },
        { name: 'ECS', icon: '📦' },
        { name: 'Docker Compose', icon: '📦' }
      ],
      cicdSkills: [
        { name: 'Jenkins', icon: '🌿' },
        { name: 'GitHub Actions', icon: '🌿' },
        { name: 'Bitbucket Pipeline', icon: '🌿' }
      ],
      iacSkills: [
        { name: 'Terraform', icon: '💻' },
        { name: 'CloudFormation', icon: '💻' },
        { name: 'Ansible', icon: '💻' },
      ],
      monitoringSkills: [
        { name: 'Prometheus', icon: '📊' },
        { name: 'Grafana', icon: '📊' },
        { name: 'Node Exporter', icon: '📊' },
        { name: 'Loki', icon: '📊' },
        { name: 'Promtail', icon: '📊' },
        { name: 'Blackbox Exporter', icon: '📊' }

      ],
      programmingSkills: [
        { name: 'Python', icon: '🖥️' },
        { name: 'Bash', icon: '🖥️' },
        { name: 'YAML', icon: '🖥️' }
      ],
    }
  }
}
</script> 