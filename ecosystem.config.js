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
      user: 'wolfdu', // 登录远程服务器用户名
      host: '47.96.160.254', // 服务器ip
      ref: 'blog-server/master', // 远端名称/分支或主干
      repo: 'git@github.com:wolfdu/blog-server.git', // 仓库地址
      path: '/home/wolfdu/project/blog-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
      'env': {
        'NODE_ENV': 'production'
      }
    }
  }
}
