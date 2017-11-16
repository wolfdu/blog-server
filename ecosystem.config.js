module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'blogServer',
      script: './server'
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
      path: '/home/wolfdu/project/blog-serve',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
