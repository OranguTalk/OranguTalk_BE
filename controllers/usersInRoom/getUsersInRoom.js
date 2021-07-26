const { User, Participant } = require("../../models");

module.exports = async (req, res) => {
    try {
        const users = await Participant.findAll({
            where: {
                room_id: req.query['room_id']
            }
        });
        const userList = [];
        for (const user of users) {
            const userInfo = await User.findOne({where: {user_id: user.dataValues['user_id']}});
            userList.push(userInfo);
        }
        res.status(200).json(userList);
    } catch (err) {
        console.log(
            "-------------------------------Error occurred in getUsersInRoom-------------------------------- \n",
            err,
            "-------------------------------Error occurred in getUsersInRoom-------------------------------- \n"
            );
            res.status(500).send();
    }
}