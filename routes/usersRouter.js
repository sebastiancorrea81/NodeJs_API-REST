const { faker } = require("@faker-js/faker");
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const users = [];
  for (let i = 0; i < limit; i++) {
    users.push({
      ID: i+1,
      name: faker.name.fullName(),
      address: faker.address.streetAddress(),
      city: faker.address.cityName()
    });
  }
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    ID: id,
    name: faker.name.fullName(),
    address: faker.address.streetAddress(),
    city: faker.address.cityName()
  });

});

module.exports = router;
