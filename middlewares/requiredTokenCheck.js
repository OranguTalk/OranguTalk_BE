module.exports = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(400).json({ message: "정보가 올바르지 않습니다."});
    }
    
    await require('./tokenCheck')(req, res, next, authorization);
}