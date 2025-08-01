import React, { useState, useEffect } from 'react'
// Icons will be replaced with emojis

const ProjectDemo = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [metrics, setMetrics] = useState({
    deployments: 0,
    uptime: 99.9,
    responseTime: 150,
    errors: 0
  })

  const steps = [
    {
      title: 'Infrastructure Provisioning',
      description: 'Terraform creating AWS resources',
      icon: '☁️',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: 'Container Deployment',
      description: 'Docker containers being deployed',
      icon: '📦',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Jenkins executing build pipeline',
      icon: '🌿',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      title: 'Monitoring Setup',
      description: 'Prometheus collecting metrics',
      icon: '📊',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    },
    {
      title: 'Code Deployment',
      description: 'Application code being deployed',
      icon: '💻',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/20'
    },
    {
      title: 'Health Check',
      description: 'Verifying application health',
      icon: '🛡️',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    }
  ]

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
        setMetrics(prev => ({
          deployments: prev.deployments + 1,
          uptime: Math.max(99.5, prev.uptime - Math.random() * 0.1),
          responseTime: Math.max(50, prev.responseTime - Math.random() * 10),
          errors: prev.errors + Math.floor(Math.random() * 2)
        }))
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [isRunning, steps.length])

  const resetDemo = () => {
    setIsRunning(false)
    setCurrentStep(0)
    setMetrics({
      deployments: 0,
      uptime: 99.9,
      responseTime: 150,
      errors: 0
    })
  }

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Live DevOps Pipeline Demo</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Watch a real-time simulation of a complete DevOps deployment pipeline
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isRunning ? '⏸️' : '▶️'}
          {isRunning ? 'Pause' : 'Start'} Pipeline
        </button>
        <button
          onClick={resetDemo}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          🔄
          Reset
        </button>
      </div>

      {/* Pipeline Steps */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {steps.map((step, index) => {
          const isActive = index === currentStep && isRunning
          const isCompleted = index < currentStep || (!isRunning && index === 0)
          
          return (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                isActive 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : isCompleted 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${step.bgColor}`}>
                  <span className={`text-2xl ${step.color}`}>{step.icon}</span>
                </div>
                <h4 className="font-medium text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{step.description}</p>
                {isActive && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-2 animate-pulse" />
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Metrics Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
          className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              📈
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Deployments</p>
              <p className="text-xl font-bold">{metrics.deployments}</p>
            </div>
          </div>
        </div>

        <div 
          className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              📊
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Uptime</p>
              <p className="text-xl font-bold">{metrics.uptime.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div 
          className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
              ⚡
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Response Time</p>
              <p className="text-xl font-bold">{Math.round(metrics.responseTime)}ms</p>
            </div>
          </div>
        </div>

        <div 
          className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              🛡️
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Errors</p>
              <p className="text-xl font-bold">{metrics.errors}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status Message */}
      {isRunning && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-center text-blue-800 dark:text-blue-200">
            <strong>Pipeline Status:</strong> {steps[currentStep]?.title} - {steps[currentStep]?.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default ProjectDemo 