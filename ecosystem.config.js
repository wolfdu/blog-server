module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'blogServer',
      script: './server/index.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'wolfdu',
      host: '47.96.160.254',
      ref: 'origin/master',
      repo: 'git@github.com:wolfdu/blog-server.git',
      path: '/home/wolfdu/project/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
