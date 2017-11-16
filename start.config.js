module.exports = {
  apps: [{
    name: 'blog-server',
    script: './server/index.js',
    watch: true,
    env: {
      'NODE_ENV': 'production'
    }
  }]
}
