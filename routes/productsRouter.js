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
    res.status(201).json({
      message: "created",
      data: body
    });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "updated",
    data: body,
    id: id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "deleted",
    id: id
  });
});

module.exports = router;
