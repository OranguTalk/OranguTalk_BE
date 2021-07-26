const { Room, Participant } = require("../../models");

module.exports = async (req, res) => {
    const participant = await Participant.findAll({
        where: {
            user_id: req.authData.dataValues['user_id']
        }
    });
    data = [];
    for (const p of participant) {
        const roomInfo = await Room.findOne({where: {id: p.dataValues['room_id']}});
        data.push(await roomInfo.dataValues);
    }
    res.status(200).json({data});
}