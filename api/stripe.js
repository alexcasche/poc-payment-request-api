export default (req, res) => {
  if (req.method === 'GET') {
    res.send({ test: 'test' })
  }
}