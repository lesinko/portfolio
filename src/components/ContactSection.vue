<template>
  <section id="contact" class="section-padding">
    <div class="container-custom">

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p class="text-dark-600 dark:text-dark-400 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you need help with 
              infrastructure automation, CI/CD pipelines, or cloud migration, I'd love to hear from you.
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                <span class="text-primary-600">📧</span>
              </div>
              <div>
                <h4 class="font-medium">Email</h4>
                <a href="mailto:lesinko2@gmail.com" class="text-primary-600 hover:text-primary-700 transition-colors">
                  lesinko2@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                <span class="text-primary-600">📞</span>
              </div>
              <div>
                <h4 class="font-medium">Phone</h4>
                <a href="tel:+254719476569" class="text-primary-600 hover:text-primary-700 transition-colors">
                  +254719476569
                </a>
              </div>
            </div>

          </div>

          <!-- Social Links -->
          <div>
            <h4 class="font-medium mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a href="https://github.com/lesinko" target="_blank" rel="noopener noreferrer" class="p-3 bg-dark-100 dark:bg-dark-800 rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors">
                <span class="text-sm">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/titus-lesinko" target="_blank" rel="noopener noreferrer" class="p-3 bg-dark-100 dark:bg-dark-800 rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors">
                <span class="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
// Icons will be replaced with simple SVG or text

export default {
  name: 'ContactSection',
  components: {},
  setup() {
    const isSubmitting = ref(false)
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const submitForm = async () => {
      isSubmitting.value = true
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      
      isSubmitting.value = false
      
      // Show success message (you can implement a toast notification here)
      alert('Thank you for your message! I\'ll get back to you soon.')
    }

    return {
      form,
      isSubmitting,
      submitForm
    }
  }
}
</script> 