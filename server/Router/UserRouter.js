const router = require("express").Router();
const redis = require("redis");
let User = require("../Model/UserModule");
const client = redis.createClient();
client.connect();
client.on("error", (error) => {
  console.error(error);
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const storeUser = await User.findOne({ email: email });

    if (storeUser) {
      return res.send("Bu email daha önceden kullanılmıştır");
    }

    const users = client.keys("user*");
    let count;

    users.then(function (usersLength) {
      count = usersLength.length + 1;
      client.hSet(`user${count}`, "name", name);
      client.hSet(`user${count}`, "email", email);
      client.hSet(`user${count}`, "password", password);
    });

    const newUser = new User({
      name,
      email,
      password,
    });
    const savedUser = await newUser.save();

    return res.send("Başarıyla kaydedildi");
  } catch (err) {
    return res.send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email: email });

    if (!isUser) {
      return res.send("böyle bir kullanıcı buunamadı");
    }
    const isMatch = password === isUser.password;
    if (!isMatch) {
      return res.send("Bilgileriniz uyuşmuyor tekrar deneyiniz.");
    }
    if (isMatch) {
      return res.send("Giriş başarılı.");
    }
  } catch (err) {
    return res.send(err);
  }
});

module.exports = router;
