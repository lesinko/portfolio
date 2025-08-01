<template>
  <section id="experience" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Work <span class="gradient-text">Experience</span>
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          My professional journey in DevOps engineering, showcasing key achievements and contributions.
        </p>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-dark-200 dark:bg-dark-700"></div>

        <!-- Experience Items -->
        <div class="space-y-12">
          <div v-for="(experience, index) in experiences" :key="experience.id" class="relative">
            <!-- Timeline Dot -->
            <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900"></div>

            <!-- Content -->
            <div class="ml-12 md:ml-0 md:w-1/2" :class="index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'">
              <div class="card">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-semibold">{{ experience.title }}</h3>
                    <p class="text-primary-600 font-medium">{{ experience.company }}</p>
                  </div>
                  <span class="text-sm text-dark-600 dark:text-dark-400 bg-dark-100 dark:bg-dark-700 px-3 py-1 rounded-full">
                    {{ experience.duration }}
                  </span>
                </div>

                <p class="text-dark-600 dark:text-dark-400 mb-4">{{ experience.description }}</p>

                <!-- Key Achievements -->
                <div class="space-y-2">
                  <h4 class="font-medium text-dark-900 dark:text-white">Key Achievements:</h4>
                  <ul class="space-y-2">
                    <li v-for="achievement in experience.achievements" :key="achievement" class="flex items-start space-x-2">
                      <div class="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span class="text-sm text-dark-600 dark:text-dark-400">{{ achievement }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Technologies Used -->
                <div class="mt-4">
                  <h4 class="font-medium text-dark-900 dark:text-white mb-2">Technologies:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in experience.technologies" :key="tech" class="text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mt-20">
        <h3 class="text-2xl font-semibold text-center mb-8">Certifications</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="cert in certifications" :key="cert.name" class="card text-center">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-primary-600 text-2xl">🏆</span>
            </div>
            <h4 class="font-semibold mb-2">{{ cert.name }}</h4>
            <p class="text-sm text-dark-600 dark:text-dark-400 mb-2">{{ cert.issuer }}</p>
            <p class="text-xs text-dark-500 dark:text-dark-500">{{ cert.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Icons will be replaced with simple SVG or text

export default {
  name: 'ExperienceSection',
  components: {},
  data() {
    return {
      experiences: [
        {
          id: 1,
          title: 'Senior DevOps Engineer',
          company: 'TechCorp Solutions',
          duration: '2023 - Present',
          description: 'Leading infrastructure automation initiatives and cloud migration projects for enterprise clients. Responsible for designing scalable architectures and implementing best practices.',
          achievements: [
            'Reduced deployment time by 70% through implementation of automated CI/CD pipelines',
            'Migrated 50+ applications to Kubernetes with zero downtime',
            'Implemented infrastructure as code using Terraform, reducing manual configuration by 90%',
            'Led a team of 5 engineers in cloud migration projects',
            'Achieved 99.9% uptime for critical production systems'
          ],
          technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Prometheus', 'Grafana', 'Python', 'Bash']
        },
        {
          id: 2,
          title: 'DevOps Engineer',
          company: 'CloudScale Inc.',
          duration: '2021 - 2023',
          description: 'Implemented and maintained CI/CD pipelines, managed containerized applications, and ensured high availability of production systems.',
          achievements: [
            'Built and maintained 20+ microservices using Docker and Kubernetes',
            'Automated infrastructure provisioning using Terraform and Ansible',
            'Implemented monitoring and alerting with Prometheus and Grafana',
            'Reduced infrastructure costs by 40% through optimization',
            'Created disaster recovery procedures and backup strategies'
          ],
          technologies: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'Prometheus', 'Grafana', 'AWS', 'Bash']
        },
        {
          id: 3,
          title: 'System Administrator',
          company: 'DataFlow Systems',
          duration: '2020 - 2021',
          description: 'Managed server infrastructure, performed system maintenance, and implemented basic automation scripts.',
          achievements: [
            'Managed 100+ Linux servers across multiple data centers',
            'Implemented automated backup and monitoring solutions',
            'Reduced manual tasks by 60% through scripting',
            'Improved system security through regular updates and patches',
            'Created documentation for system procedures and configurations'
          ],
          technologies: ['Linux', 'Bash', 'Python', 'Nagios', 'Ansible', 'MySQL', 'Nginx', 'Apache']
        }
      ],
      certifications: [
        {
          name: 'AWS Certified Solutions Architect',
          issuer: 'Amazon Web Services',
          date: '2023'
        },
        {
          name: 'Certified Kubernetes Administrator',
          issuer: 'Cloud Native Computing Foundation',
          date: '2022'
        },
        {
          name: 'Terraform Associate',
          issuer: 'HashiCorp',
          date: '2022'
        }
      ]
    }
  }
}
</script> 