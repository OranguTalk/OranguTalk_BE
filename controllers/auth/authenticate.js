module.exports = (req, res) => {
    // Successful authentication, redirect home.
    res.status(200).json({
        "id": req.user.id,
        "username": req.user.username,
        "profile": req.user.photos[0].value
    });
}