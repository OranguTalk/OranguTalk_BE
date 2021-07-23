const { User } = require('../../models');

module.exports = async (req, res) => {
    const user_id = req.user.id;
    const user_name = req.user.username;
    const profileImage = req.user.photos[0].value;

    try {
        const state = await User.findOne({
            where: {
                user_id: user_id
            }
        });
        res.cookie("userid", user_id);
        res.cookie("username", user_name);
        res.cookie("profile", profileImage);

        if (!state) {
            await User.create({
                user_id: user_id,
                user_name: user_name,
                profileImage: profileImage
            });
            // 프론트 요청에 따라 true/false, redirect 수정 가능
            res.redirect('http://localhost:3000/guide');
        } else {
            res.redirect('http://localhost:3000');
        }
        
    } catch (err) {
        console.log(
        "-------------------------------Error occurred in auth-------------------------------- \n",
        err,
        "-------------------------------Error occurred in auth-------------------------------- \n"
        );
        res.status(500).send();
    }
}