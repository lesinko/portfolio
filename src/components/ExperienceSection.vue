<template>
  <section id="experience" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Work <span class="gradient-text">Experience</span>
        </h2>

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
          title: 'DevOps Engineer',
          company: 'Nathan and Nathan',
          duration: '2024 - Present',
          description: ' I oversee the design of scalable, secure architectures by implementing DevOps best practices across different environments.',
          achievements: [
            'Build and manage automated CI/CD with Bitbucket Pipelines, reducing deployment time across different environments',
            'Migrated over 150+ applications from docker swarm to AWS ECS managed cluster with zero downtime',
            'Automated routine DevOps tasks (e.g., AWS provisioning, database access, repository acess) using Python and Terraform',
            'Implemented centralized monitoring and logging stack using Prometheus, Node Exporter, Loki, Promtail, and Grafana',
            'Developed MongoDB backup, monitoring, and auto-scaling strategies for high availability and performance',
            'Integrated SonarQube, Trivy, and Gitleaks into CI/CD to enforce code quality and detect vulnerabilities early',
          ],
          technologies: ['AWS', 'ECS', 'Terraform', 'Bitbucket Pipelines', 'Docker', 'Prometheus', 'Grafana', 'Python', 'Bash', 'MongoDB', 'Nginx']
        },
        {
          id: 2,
          title: 'DevOps Engineer',
          company: 'Xetova LTD.',
          duration: '2022 - 2023',
          description: 'Collaborated closely with development teams to enforce operational best practices and optimized quality code.',
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
          title: 'Cloud Engineer',
          company: 'Azubi Africa Bootcamp',
          duration: '2022 - 2022',
          description: 'Completed an intensive cloud engineering apprenticeship focused on designing secure, scalable AWS architectures. Gained hands-on experience with core AWS services, automation, and cloud security best practices while delivering production-ready infrastructure solutions..',
          achievements: [
            'Designed and optimized AWS VPC architectures with subnets, route tables, NACLs, and gateways to ensure secure, efficient networking',
            'Deployed EC2 and RDS instances across multiple Availability Zones for high availability and fault tolerance',
            'Configured scalable traffic management using Load Balancers, CloudFront, and Route 53 to improve performance and reliability',
            'Strengthened AWS security posture with IAM policies, security groups, and encryption strategies for data protection',
            'Applied cost optimization techniques including auto-scaling, spot instances, and S3 lifecycle rules to manage resources efficiently'
          ],
          technologies: ['Linux', 'Git', 'Python', 'VPC', 'S3', 'RDS', 'Nginx', 'CloudFormation', 'Load Balancer', 'IAM']
        }
      ],
      certifications: [
        {
          name: 'AWS Certified Solutions Architect',
          issuer: 'Amazon Web Services',
          date: '2022'
        },
        {
          name: 'AWS Certified Cloud Practicioner',
          issuer: 'Amazon Web Services',
          date: '2022'
        }
      ]
    }
  }
}
</script> 