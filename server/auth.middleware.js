require("dotenv").config();

const authMiddleware = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (!bearerHeader) return res.send(401);
    const key = bearerHeader.split(" ")[1];
    if (!key) return res.send(401);
    if(key !== process.env.REACT_APP_API_SECRET) return res.send(401);
    next();
};

module.exports = {authMiddleware};
