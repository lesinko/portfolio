<template>
  <section id="skills" class="section-padding bg-dark-50 dark:bg-dark-800/50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-xl md:text-3xl font-bold mb-4">
          Technical <span class="gradient-text">Skills</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Cloud Platforms -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary-500">
            Cloud Platforms
          </h3>
          <ul class="space-y-2">
            <li v-for="skill in cloudSkills" :key="skill" class="text-gray-300">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Container & Orchestration -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary-500">
            Container & Orchestration
          </h3>
          <ul class="space-y-2">
            <li v-for="skill in containerSkills" :key="skill" class="text-gray-300">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- CI/CD & Automation -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary-500">
            CI/CD & Automation
          </h3>
          <ul class="space-y-2">
            <li v-for="skill in cicdSkills" :key="skill" class="text-gray-300">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Infrastructure as Code -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary-500">
            Infrastructure as Code
          </h3>
          <ul class="space-y-2">
            <li v-for="skill in iacSkills" :key="skill" class="text-gray-300">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Monitoring & Observability -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary-500">
            Monitoring & Observability
          </h3>
          <ul class="space-y-2">
            <li v-for="skill in monitoringSkills" :key="skill" class="text-gray-300">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Programming & Scripting -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary-500">
            Programming & Scripting
          </h3>
          <ul class="space-y-2">
            <li v-for="skill in programmingSkills" :key="skill" class="text-gray-300">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  components: {},
  data() {
    return {
      cloudSkills: ['AWS', 'GCP'],
      containerSkills: ['Docker', 'Kubernetes', 'ECS', 'Docker Compose'],
      cicdSkills: ['Jenkins', 'GitHub Actions', 'Bitbucket Pipeline'],
      iacSkills: ['Terraform', 'CloudFormation', 'Ansible'],
      monitoringSkills: ['Prometheus', 'Grafana', 'Node Exporter', 'Loki', 'Promtail', 'Blackbox Exporter'],
      programmingSkills: ['Python', 'Bash', 'YAML'],
    }
  }
}
</script> 