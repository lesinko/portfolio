<template>
  <section id="projects" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-xl md:text-3xl font-bold mb-4">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          Real-world infrastructure and automation solutions I've designed and delivered.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="card group hover:shadow-xl hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          <!-- Project Icon -->
          <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">{{ project.icon }}</span>
          </div>

          <!-- Title & Description -->
          <h3 class="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-sm text-dark-600 dark:text-dark-400 mb-4 flex-grow">
            {{ project.description }}
          </p>

          <!-- Key Highlights -->
          <ul class="space-y-1.5 mb-4">
            <li v-for="highlight in project.highlights" :key="highlight" class="flex items-start space-x-2">
              <div class="w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <span class="text-xs text-dark-600 dark:text-dark-400">{{ highlight }}</span>
            </li>
          </ul>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          icon: '🚀',
          title: 'Docker Swarm to ECS Migration',
          description:
            'Migrated 150+ containerized applications from Docker Swarm to AWS ECS managed cluster with zero downtime.',
          highlights: [
            'Zero-downtime migration strategy',
            'Automated task definitions with Terraform',
            'Custom health checks & rollback logic',
          ],
          techStack: ['AWS ECS', 'Terraform', 'Docker', 'Bitbucket Pipelines', 'Python'],
        },
        {
          id: 2,
          icon: '📊',
          title: 'Centralized Monitoring Stack',
          description:
            'Designed and deployed a full observability platform with metrics, logs, and alerting across all environments.',
          highlights: [
            'Prometheus + Grafana dashboards',
            'Log aggregation with Loki & Promtail',
            'Blackbox Exporter for uptime monitoring',
          ],
          techStack: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Node Exporter', 'Docker'],
        },
        {
          id: 3,
          icon: '⚙️',
          title: 'CI/CD Pipeline Automation',
          description:
            'Built end-to-end CI/CD pipelines with integrated security scanning, code quality checks, and multi-environment deployments.',
          highlights: [
            'Gitleaks & Semgrep security scanning',
            'Trivy container vulnerability detection',
            'Multi-stage deployments (dev/staging/prod)',
          ],
          techStack: ['Bitbucket Pipelines', 'Jenkins', 'Gitleaks', 'Semgrep', 'Trivy', 'Docker'],

        },
        {
          id: 4,
          icon: '🏗️',
          title: 'Infrastructure as Code Platform',
          description:
            'Automated AWS infrastructure provisioning using Terraform modules for repeatable, version-controlled deployments.',
          highlights: [
            'Reusable Terraform modules',
            'State management with S3 backend',
            'Automated provisioning with Python scripts',
          ],
          techStack: ['Terraform', 'AWS', 'Python', 'CloudFormation', 'Bash'],
        },
        {
          id: 5,
          icon: '🛡️',
          title: 'AWS VPC Architecture Design',
          description:
            'Designed secure, multi-AZ VPC architectures with proper network segmentation, NACLs, and security groups.',
          highlights: [
            'Multi-AZ high availability setup',
            'Public/private subnet isolation',
            'IAM & encryption security hardening',
          ],
          techStack: ['AWS VPC', 'CloudFormation', 'Route 53', 'CloudFront', 'IAM'],
        },
        {
          id: 6,
          icon: '🗄️',
          title: 'MongoDB HA & Backup System',
          description:
            'Developed backup strategies, monitoring, and auto-scaling for MongoDB to ensure high availability and performance.',
          highlights: [
            'Automated backup & restore scripts',
            'Performance monitoring dashboards',
            'Auto-scaling based on metrics',
          ],
          techStack: ['MongoDB', 'Bash', 'Python', 'Prometheus', 'Grafana'],
        },
      ],
    }
  },
}
</script>
