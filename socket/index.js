const { Chat, Room, User, Participant, RandomChat, Sequelize } = require("../models");
const jwt = require("jsonwebtoken");
require('date-utils');

module.exports = io => {
    io.on("connection", socket => {
        socket.on("roomCreate", async (params) => {
            try {
                const accessToken = params["accessToken"];
                const roomName = params["roomname"];
                const participant = params["participant"];
                const authData = jwt.verify(accessToken, process.env.ACCESS_SECRET);
                const userData = await User.findOne({where: {user_id: authData.user_id}});
                console.log(participant);

                const newRoom = await Room.create({
                    room_name: roomName,
                    profileImage: userData.profileImage,
                    user_id: authData.user_id,
                    participant: participant.length
                });
                participant.forEach( async (user) => {
                    await Participant.create({
                        user_id: user,
                        room_id: newRoom.id
                    });
                })
                // Room 모델에 방 정보 저장
                socket.join(`room${newRoom.id}`);
            } catch (err) {
                console.log("--------------------------Error occurred in socket-roomCreate.js--------------------------");
                console.log(err);
            }
        });

        socket.on("leaveRoom", async (params) => {
            try {
                const accessToken = params["accessToken"];
                const authData = jwt.verify(accessToken, process.env.ACCESS_SECRET);
                const roomId = params["room_id"];

                await Participant.destroy({where: {room_id: roomId, user_id: authData.user_id}})
                await Room.update({participant: Sequelize.literal('participant - 1')}, {where: {id: roomId, user_id: authData.user_id}});
                socket.leave(`room${roomId}`)
            } catch (err) {
                console.log("--------------------------Error occurred in socket-leaveRoom.js--------------------------");
                console.log(err);
            }
        });

        socket.on("sendMessage", async (params) => {
            try {
                const accessToken = params["accessToken"];
                const roomId = params["room_id"];
                const msg = params["message"];
                console.log(msg);
                const authData = jwt.verify(accessToken, process.env.ACCESS_SECRET);
                const userData = await User.findOne({where: {user_id: authData.user_id}});
                const data = { userData: userData, message: msg };
                const newDate = new Date();
                const time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');

                await Chat.create({
                    message: msg,
                    send_time: time,
                    room_id: roomId,
                    user_id: authData.user_id
                });

                socket.to(`room${roomId}`).emit('sendMessage', data);
            } catch (err) {
                console.log("--------------------------Error occurred in socket-sendMessage.js--------------------------\n");
                console.log(err);
            }
        });

        socket.on("orang", async (params) => {
            try {
                const roomId = params["room_id"];
                const rand = Math.random() * 100;

                const msg = await RandomChat.findOne({where: {id: rand}});
                socket.to(`room${roomId}`).emit('orang', msg);
            } catch (err) {
                console.log("--------------------------Error occurred in socket-orang.js--------------------------\n");
                console.log(err);
            }
        })
    })
}