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
            <li v-for="skill in $data['Cloud PlatformsSkills']" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Containerization & Orchestration -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            Containerization & Orchestration
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in $data['Containerization & OrchestrationSkills']" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- CI/CD & Automation -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            CI/CD & Automation
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in $data['CI-CDSkills']" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Infrastructure as Code -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            Infrastructure as Code
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in IaCSkills" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Monitoring & Observability -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            Monitoring & Observability
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in $data['Monitoring & ObservabilitySkills']" :key="skill" class="text-gray-300 text-sm leading-tight">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Automation & Scripting -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary-400 border-b border-primary-500/30 pb-1">
            Automation & Scripting
          </h3>
          <ul class="space-y-0.5">
            <li v-for="skill in $data['Automation & ScriptingSkills']" :key="skill" class="text-gray-300 text-sm leading-tight">
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
      'Cloud PlatformsSkills': ['AWS', 'GCP'],
      'Containerization & OrchestrationSkills': ['Docker', 'Kubernetes', 'ECS', 'Docker Compose'],
      'CI-CDSkills': ['Jenkins', 'GitHub Actions', 'Bitbucket Pipeline', 'Jenkins', 'Codepipeline'],
      IaCSkills: ['Terraform', 'CloudFormation', 'Ansible'],
      'Monitoring & ObservabilitySkills': ['Prometheus', 'Grafana', 'Node Exporter', 'Loki', 'Promtail', 'Blackbox Exporter', 'CloudWatch'],
      'Automation & ScriptingSkills': ['Python', 'Bash', 'YAML'],
    }
  }
}
</script> 