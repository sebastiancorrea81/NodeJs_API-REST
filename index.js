const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Mi server en express');
});

app.get('/products', (req, res) => {
  res.json([
    {
      "name": "producto_01",
      "price": 12.50,
      "stock": 125
    },
    {
      "name": "producto_02",
      "price": 13.50,
      "stock": 123
    },
    ]
  )
});

app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  res.json(
    {
      "ID": productId,
      "name": "producto_" + productId,
      "price": + productId - 5,
      "stock": + productId + 5
    }
  )
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { productId, categoryId } = req.params;
  res.json(
    {
      "ID": productId,
      "category": categoryId,
      "name": "product_" + productId,
      "price": + productId - 5,
      "stock": + productId + 5
    }
  )
});

app.listen(port, () => {
  console.log('Mi Port' + port);
});
