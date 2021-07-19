module.exports = (req, res) => {
  console.log(req.user);
  res.send(req.user);
}