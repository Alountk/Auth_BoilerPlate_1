module.exports = (res, token) => {
  res.cookie(process.env.WEBSITENAME, token, {
    maxAge: 43200000,
    httpOnly: true,
    secure: true,
    sameSite: true
  }).status(200).json('All OK')
}