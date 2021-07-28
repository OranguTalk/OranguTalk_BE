const { User } = require('../../models');
const { Chat } = require('../../models');

module.exports = async (req, res) => {

  
        // 테스트 유저 생성 코드
        // --------------------------------------------------------------------
        const testUser = [
          {
              user_id: "12345678",
              username: "홍길동",
              profileImage: "https://avatars.githubusercontent.com/u/60251579?v=4"
          },
          {
              user_id: "12345745",
              username: "전우치",
              profileImage: "https://avatars.githubusercontent.com/u/64319351?v=4"
          },
          {
              user_id: "32432123",
              username: "고릴라",
              profileImage: "https://avatars.githubusercontent.com/u/48648026?v=4"
          }
      ];
      for (var index in testUser) {
          await User.create({
              user_id: testUser[index].user_id,
              user_name:testUser[index].username,
              profileImage: testUser[index].profileImage
          })
      }
      // --------------------------------------------------------------------
      
  res.send(req.user);
}