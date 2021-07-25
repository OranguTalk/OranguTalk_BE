 const { Char, Room, User } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = io => {
    io.on("connection", socket => {
        socket.on("roomCreate", async (accessToken, roomName, participant) => {
            try {
                const authData = jwt.verify(accessToken, process.env.ACCESS_SECRET);
                const newRoom = await Room.create({
                    room_name: roomName,
                    profileImage: authData.profileImage,
                    user_id: authData.user_id
                })
                // Room 모델에 방 정보 저장
                socket.join(`room${newRoom.id}`);
                socket.to(`room${newRoom.id}`).emit("채팅이 시작되었습니다.", newRoom.id);
            } catch (err) {
                console.log("--------------------------Error occurred in socket-roomCreate.js--------------------------");
            }
        });
        socket.on("joinRoom", socket => {

        });
        socket.on("leaveRoom", socket => {

        });
        socket.on("sendMessage", socket => {

        });
        socket.on("disconnect", socket => {

        })
    })
}