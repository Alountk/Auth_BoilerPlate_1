  
const signToken = require("./../helpers/signToken");

module.exports = (res, token) => {
  res.cookie(process.env.WEBSITENAME, signToken(token), {
    maxAge: 43200000,
    httpOnly: true,
    secure: false,
    sameSite: true
  }).status(200).json(token)
}