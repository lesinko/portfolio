<template>
  <section id="skills" class="py-12 bg-dark-50 dark:bg-dark-800/50">
    <div class="container-custom">
      <div class="text-center mb-8">
        <h2 class="text-xl md:text-3xl font-bold mb-2">
          Technical <span class="gradient-text">Skills</span>
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <!-- Cloud Platforms -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            Cloud Platforms
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in cloudSkills" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Container & Orchestration -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            Containers
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in containerSkills" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- CI/CD & Automation -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            CI/CD
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in cicdSkills" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Infrastructure as Code -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            IaC
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in iacSkills" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Monitoring & Observability -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            Monitoring
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in monitoringSkills" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Programming & Scripting -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            Scripting
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in programmingSkills" :key="skill" class="text-gray-300 text-sm leading-tight">
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
      cicdSkills: ['Jenkins', 'GitHub Actions', 'Bitbucket Pipeline', 'Jenkins', 'Codepipeline'],
      iacSkills: ['Terraform', 'CloudFormation', 'Ansible'],
      monitoringSkills: ['Prometheus', 'Grafana', 'Node Exporter', 'Loki', 'Promtail', 'Blackbox Exporter', 'CloudWatch'],
      programmingSkills: ['Python', 'Bash', 'YAML'],
    }
  }
}
</script> 