const { User } = require("../../models");

module.exports = async (req, res) => {
    try {
        const allUser = await User.findAll();
        res.status(200).json({"allUserInfo": allUser});
    } catch (err) {
        console.log(
            "-------------------------------Error occurred in getAllUsersInfo-------------------------------- \n",
            err,
            "-------------------------------Error occurred in getAllUsersInfo-------------------------------- \n"
            );
            res.status(500).send();
    }
}