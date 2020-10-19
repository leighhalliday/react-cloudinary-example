// const cloudinary = require("cloudinary").v2;

export default async (_req, res) => {
  res.statusCode = 200;
  res.json({ signature: "abcd", timestamp: 12345 });
};
