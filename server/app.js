const redis = require("redis");

const client = redis.createClient();

client.connect();
client.on("error", (error) => {
  console.error(error);
});

/* const a = client.hGetAll("user1");
a.then(function (result) {
  console.log(result["name"]);
  console.log(result["l_name"]);
  console.log(result["email"]);
}); */

/* client.hSet("user1", "name", "mami");
client.hSet("user1", "l_name", "turkan");
client.hSet("user1", "email", "mami@gamil.com"); */

/* client.lPush("takim", "fener");
client.lPush("takim", "gs");
client.lPush("takim", "bjk");

const b = client.lRange("takim", 0, 2);
b.then(function (result) {
  if (result[0] === "fb") {
    console.log("bjk sampiyon");
  } else {
    console.log("fb sampiyon");
  }
}); */

/* const users = client.keys("user*");
let count;

users.then(function (usersLength) {
  count = usersLength.length + 1;
  console.log(count);
});
 */
