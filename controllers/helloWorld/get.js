const { User, Chat, RandomChat } = require("../../models");

module.exports = async (req, res) => {
  // 오랑이 대답 Dabase 자동 생성 코드
  const randomData = [
    "니가 몰 알아",
    "난 알아요",
    "아뇨, 오랑인데요",
    "애플보단 갤럭시",
    "대한민국 만세",
    "동문서답을 좋아해요",
    "개발이 제일 쉬웠어요",
    "과연 그럴까요",
    "킹받네",
    "따뜻한 아메리카노 한 잔",
    "틀니딱딱",
    "우끼끼 우끼끼",
    "띠용스탁",
    "순천향대학교 멋사 9기 화이팅",
    "백엔드 만만세",
    "대만민국 만세",
    "할 수 있다!",
    "뭐라누",
    "QR 체크인 한 번 해주세요~",
    "화장실은 문 밖에 있어요",
    "정수기는 카운터 왼쪽으로 가면 있어요",
    "와이파이 비밀번호는 몰라",
    "내리실 문은 없습니다.",
    "시리야, 오랑이 불러줘",
    "하이 빅스비",
    "시원한 아메리카노 한 잔",
    "4번은 개인주의야",
    "의식의 흐름대로",
    "판교로 가자",
    "네이버 입사",
    "오랑이",
  ];
  for (var msg of randomData) {
    await RandomChat.create({
      message: msg,
    });
  }

  // 채팅 샘플 데이터 생성 코드
  // const chatSample = [
  //   {
  //     message: "안녕 오랑이",
  //     room_id: 7,
  //     user_id: 12345678,
  //   },
  //   {
  //     message: "가나다라마바사",
  //     room_id: 7,
  //     user_id: 32432123,
  //   },
  //   {
  //     message: "node.js",
  //     room_id: 7,
  //     user_id: 12345678,
  //   },
  //   {
  //     message: "오랑우톡",
  //     room_id: 7,
  //     user_id: 32432123,
  //   },
  // ];
  // for (var index in chatSample) {
  //   await Chat.create({
  //     message: chatSample[index].message,
  //     room_id: chatSample[index].room_id,
  //     user_id: chatSample[index].user_id,
  //   });
  // }

  // 테스트 유저 생성 코드
  // --------------------------------------------------------------------
  // const testUser = [
  //   {
  //     user_id: "12345678",
  //     username: "홍길동",
  //     profileImage: "https://avatars.githubusercontent.com/u/60251579?v=4",
  //   },
  //   {
  //     user_id: "12345745",
  //     username: "전우치",
  //     profileImage: "https://avatars.githubusercontent.com/u/64319351?v=4",
  //   },
  //   {
  //     user_id: "32432123",
  //     username: "고릴라",
  //     profileImage: "https://avatars.githubusercontent.com/u/48648026?v=4",
  //   },
  // ];
  // for (var index in testUser) {
  //   await User.create({
  //     user_id: testUser[index].user_id,
  //     user_name: testUser[index].username,
  //     profileImage: testUser[index].profileImage,
  //   });
  // }
  // --------------------------------------------------------------------

  res.send(req.user);
};
