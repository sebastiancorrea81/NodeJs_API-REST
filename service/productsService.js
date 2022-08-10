const { faker } = require("@faker-js/faker");

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 20;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      });
    }
  }

  index () {
    return this.products;
  }

  show (id) {
    return this.products.find(item => item.id === id);
  }

  create (data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      name: data.name,
      price: data.price,
      image: data.image
    };

  }



}

module.exports = ProductsService;
