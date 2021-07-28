const { Room, Chat, User } = require("../../models");

module.exports = async (req, res) => {
    try {
        const room_id = req.query["room_id"];
        const roomInfo = await Room.findOne({ where: { id: room_id }});
        const chatList = await Chat.findAll({ where: { room_id: room_id }, order: [['createdAt', 'ASC']]});
        const chatInfo = []
        
        for (const c of chatList) {
            const userInfo = await User.findOne({ where: {user_id: c.dataValues['user_id'] }});
            chatInfo.push(await {chatInfo: c.dataValues, userInfo: userInfo.dataValues});
        }
        res.status(200).json({roomInfo, chatInfo});

    } catch(err) {
        console.log(
            "-------------------------------Error occurred in chatList-------------------------------- \n",
            err,
            "-------------------------------Error occurred in chatList-------------------------------- \n"
            );
            res.status(500).send();
    }
}