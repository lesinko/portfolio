<template>
  <section id="experience" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-xl md:text-3xl font-bold mb-4">
          Work <span class="gradient-text">Experience</span>
        </h2>
      </div>

      <div class="max-w-3xl mx-auto space-y-6">
        <div
          v-for="experience in experiences"
          :key="experience.id"
          class="card relative overflow-hidden transition-all duration-300 hover:shadow-xl"
          :class="experience.current ? 'border-l-4 border-l-primary-600' : 'border-l-4 border-l-dark-300 dark:border-l-dark-600'"
        >
          <!-- Current Badge -->
          <div v-if="experience.current" class="absolute top-4 right-4">
            <span class="inline-flex items-center space-x-1 text-xs font-semibold bg-primary-600 text-white px-3 py-1 rounded-full">
              <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              <span>Current</span>
            </span>
          </div>

          <!-- Header -->
          <div class="mb-3">
            <h3 class="text-lg font-semibold text-dark-900 dark:text-white">{{ experience.title }}</h3>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              <span class="text-primary-600 font-medium text-sm">{{ experience.company }}</span>
              <span class="text-dark-400 text-xs">•</span>
              <span class="text-sm text-dark-500 dark:text-dark-400">{{ experience.location }}</span>
              <span class="text-dark-400 text-xs">•</span>
              <span class="text-sm text-dark-500 dark:text-dark-400">{{ experience.duration }}</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-sm text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
            {{ experience.description }}
          </p>

          <!-- Key Achievements (show first 3, expandable) -->
          <div class="space-y-2 mb-4">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400">Key Achievements</h4>
            <ul class="space-y-1.5">
              <li
                v-for="(achievement, i) in visibleAchievements(experience)"
                :key="i"
                class="flex items-start space-x-2"
              >
                <span class="text-primary-600 mt-0.5 flex-shrink-0">▸</span>
                <span class="text-sm text-dark-600 dark:text-dark-400">{{ achievement }}</span>
              </li>
            </ul>
            <button
              v-if="experience.achievements.length > 3"
              @click="toggleExpand(experience.id)"
              class="text-xs text-primary-600 hover:text-primary-700 font-medium mt-1 transition-colors"
            >
              {{ expanded.includes(experience.id) ? '← Show less' : `+${experience.achievements.length - 3} more` }}
            </button>
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-dark-200 dark:border-dark-700">
            <span
              v-for="tech in experience.technologies"
              :key="tech"
              class="text-xs bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-0.5 rounded-full"
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
  name: 'ExperienceSection',
  components: {},
  data() {
    return {
      expanded: [],
      experiences: [
        {
          id: 1,
          current: true,
          title: 'Senior DevOps Engineer',
          company: 'Nathan & Nathan',
          location: 'Dubai,UAE',
          duration: '2024 — Present',
          description: 'Oversee the design of scalable, secure architectures by implementing DevOps best practices across different environments.',
          achievements: [
            'Build and manage automated CI/CD with Bitbucket Pipelines, reducing deployment time across different environments',
            'Migrated over 150+ applications from Docker Swarm to AWS ECS managed cluster with zero downtime',
            'Automated routine DevOps tasks (e.g., AWS provisioning, database access, repository access) using Python and Terraform',
            'Implemented centralized monitoring and logging stack using Prometheus, Node Exporter, Loki, Promtail, and Grafana',
            'Developed MongoDB backup, monitoring, and auto-scaling strategies for high availability and performance',
            'Integrated SonarQube, Trivy, and Gitleaks into CI/CD to enforce code quality and detect vulnerabilities early',
          ],
          technologies: ['AWS', 'ECS', 'Terraform', 'Bitbucket Pipelines', 'Docker', 'Prometheus', 'Grafana', 'Python', 'Bash', 'MongoDB', 'Nginx']
        },
        {
          id: 2,
          current: false,
          title: 'DevOps Engineer',
          company: 'Xetova LTD.',
          location: 'Nairobi,Kenya',
          duration: '2022 — 2023',
          description: 'Collaborated closely with development teams to enforce operational best practices and deliver optimized, quality code.',
          achievements: [
            'Dockerized PHP and React applications and deployed them to AWS EC2, improving consistency and deployment efficiency',
            'Provisioned and managed AWS infrastructure using CloudFormation, accelerating environment setup and increasing reliability',
            'Managed client domain configurations through Cloudflare, ensuring accurate DNS setup and reducing domain-related issues',
            'Implemented AWS CloudWatch for cloud resource monitoring, leading to cost savings through proactive optimization',
            'Contributed to infrastructure-as-code practices to streamline repeatable deployments and reduce human error'
          ],
          technologies: ['Docker', 'Cloudflare', 'React', 'Prometheus', 'Grafana', 'AWS', 'Bash', 'PHP', 'Wazuh', 'Apache']
        },
        {
          id: 3,
          current: false,
          title: 'Cloud Engineer',
          company: 'Azubi Africa Bootcamp',
          location: 'Remote',
          duration: 'Jan 2022 — Jul 2022',
          description: 'Completed an intensive cloud engineering apprenticeship focused on designing secure, scalable AWS architectures with hands-on experience in core AWS services, automation, and cloud security best practices.',
          achievements: [
            'Designed and optimized AWS VPC architectures with subnets, route tables, NACLs, and gateways to ensure secure, efficient networking',
            'Deployed EC2 and RDS instances across multiple Availability Zones for high availability and fault tolerance',
            'Configured scalable traffic management using Load Balancers, CloudFront, and Route 53 to improve performance and reliability',
            'Strengthened AWS security posture with IAM policies, security groups, and encryption strategies for data protection',
            'Applied cost optimization techniques including auto-scaling, spot instances, and S3 lifecycle rules to manage resources efficiently'
          ],
          technologies: ['Linux', 'Git', 'Python', 'VPC', 'S3', 'RDS', 'Nginx', 'CloudFormation', 'Load Balancer', 'IAM']
        }
      ]
    }
  },
  methods: {
    toggleExpand(id) {
      if (this.expanded.includes(id)) {
        this.expanded = this.expanded.filter(e => e !== id)
      } else {
        this.expanded.push(id)
      }
    },
    visibleAchievements(experience) {
      if (this.expanded.includes(experience.id)) {
        return experience.achievements
      }
      return experience.achievements.slice(0, 3)
    }
  }
}
</script> 