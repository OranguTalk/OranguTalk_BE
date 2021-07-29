const { User, Chat, RandomChat } = require('../../models');

module.exports = async (req, res) => {
  const randomData = [
    {
        message: "니가 몰 알아"
    },
    {
      message: "난 알아"
    },
    {
      message: "뭘 봐"
    },
    {
      message: "우끼끼 우끼끼"
    }
];
  for (var index in randomData) {
    await RandomChat.create({
        message: randomData[index].message
    })
  }

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

  
      //   // 테스트 유저 생성 코드
      //   // --------------------------------------------------------------------
      //   const testUser = [
      //     {
      //         user_id: "12345678",
      //         username: "홍길동",
      //         profileImage: "https://avatars.githubusercontent.com/u/60251579?v=4"
      //     },
      //     {
      //         user_id: "12345745",
      //         username: "전우치",
      //         profileImage: "https://avatars.githubusercontent.com/u/64319351?v=4"
      //     },
      //     {
      //         user_id: "32432123",
      //         username: "고릴라",
      //         profileImage: "https://avatars.githubusercontent.com/u/48648026?v=4"
      //     }
      // ];
      // for (var index in testUser) {
      //     await User.create({
      //         user_id: testUser[index].user_id,
      //         user_name:testUser[index].username,
      //         profileImage: testUser[index].profileImage
      //     })
      // }
      // --------------------------------------------------------------------
      
  res.send(req.user);
}