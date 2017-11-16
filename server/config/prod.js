module.exports = {
  mongoConfig: {
    url: 'mongodb://localhost/blog-production',
    opts: {
      user: '',
      pass: ''
    }
  },
  app: {
    port: 3000
  },
  'jwt': {
    'cert': 'blog-product'
  }
}
