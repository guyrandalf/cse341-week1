const greetMe = (req, res) => {
  let name = "Randalf";
  res.send(`Hello ${name}`);
};

const greetNoon = (req, res) => {
  let name = "Randalf";
  res.send(`Good Afternoon ${name}`);
};

module.exports = {
    greetMe,
    greetNoon,
}