const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next, authorization) => {
    const bearer = authorization.split(" ");

    if (bearer[0] === "Bearer") {
        try {
            const authData = jwt.verify(bearer[1], process.env.ACCESS_SECRET);
            const uid = authData.user_id;

            if (authData.user_id === undefined) {
                return res.status(401).send();
            }
            const userInfo = await User.findOne({
                where: {
                    "user_id": uid,
                },
            });

            if (userInfo) {
                req.authData = userInfo;
                next();
            } else if (!userInfo) {
                return res.status(401).json({ message: "잘못된 접근" });
            }
        } catch (err) {
            switch (err.message) {
                case "jwt must be provided":
                  res.status(400).json({ message: "정보가 올바르지 않습니다." });
                  break;
                case "jwt malformed":
                  res.status(400).json({ message: "정보가 올바르지 않습니다." });
                  break;
                case "jwt expired":
                  res.status(401).json({ message: "만료된 토큰 정보입니다." });
                  break;
                case "invalid token":
                  res.status(401).json({ message: "올바르지 않은 토큰 정보입니다." });
                  break;
                default:
                  console.log(
                    "---------------------------------Error occurred in tokenCheck.js---------------------------------",
                    err,
                    "---------------------------------Error occurred in tokenCheck.js---------------------------------"
                  );
                  res.status(500).json({ message: "Something wrong in server" });
                  break;
            }
            return;
        } 
    } else {
        return res.status(400).json({ message: "정보가 올바르지 않습니다."})
    }
}