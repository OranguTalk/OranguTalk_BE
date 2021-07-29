const { User, Room, Participant } = require("../../models");

module.exports = async (req, res) => {
    const participant = await Participant.findAll({
        where: {
            user_id: req.authData.dataValues['user_id']
        }
    });
    const data = [];
    var avatars = [];
    for (const p of participant) {
        avatars = []
        const roomInfo = await Room.findOne({where: {id: p.dataValues['room_id']}});
        const user_info = await Participant.findAll({where: {room_id: p.dataValues['room_id']}});
        for (const user_id of user_info) {
            const avatar = await User.findOne({where: {user_id: user_id.dataValues['user_id']}});
            avatars.push(avatar.dataValues['profileImage']);
        }
        roomInfo.dataValues.avatars = avatars;
        data.push(await roomInfo.dataValues);
    }
    res.status(200).json({data});
}