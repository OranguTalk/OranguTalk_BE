const { Chat } = require('../../models');

module.exports = async (req, res) => {
  const chatSample = [
    {
        message: "안녕 오랑이",
        room_id: 7,
        user_id: 12345678
    },
    {
      message: "가나다라마바사",
      room_id: 7,
      user_id: 32432123
    },
    {
      message: "node.js",
      room_id: 7,
      user_id: 12345678
    },
    {
      message: "오랑우톡",
      room_id: 7,
      user_id: 32432123
    }
];
  for (var index in chatSample) {
    await Chat.create({
        message: chatSample[index].message,
        room_id:chatSample[index].room_id,
        user_id: chatSample[index].user_id
    })
  }
  res.send(req.user);
}