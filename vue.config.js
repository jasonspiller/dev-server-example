module.expports = {
  devServer: {
    before(app) {
      app.get ('/api', (req, res) => {
        res.json({message: 'hello'});
      })
    }
  }
}