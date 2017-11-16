module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'blog-server',
      script: './server/index.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'wolfdu', // 远程服务器登录名
      host: '47.96.160.254', // 远程服务器ip
      ref: 'origin/master', // github分支名
      repo: 'git@github.com:wolfdu/blog-server.git', // github仓库ssh
      path: '/home/wolfdu/project/server', // 服务器有写入权限的部署目录
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
