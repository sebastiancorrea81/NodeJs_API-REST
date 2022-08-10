const ProductsService = require('./../service/productsService')
const express = require('express');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.index();
  res.status(200).json( products );
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.show(id);
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const product = service.create(body);
    res.status(201).json({
      message: "created",
      data: product
    });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json({
    message: "updated",
    data: product
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json({
    message: "deleted",
    id: product
  });
});

module.exports = router;
