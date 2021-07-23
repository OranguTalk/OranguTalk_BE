module.exports = (req, res) => {
    res.cookie("userid", req.user.id);
    res.cookie("username", req.user.username);
    res.cookie("profile", req.user.photos[0].value);
    res.redirect('http://localhost:3000');

}