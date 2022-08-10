const express = require ('express');
const routerApi = require('./routes/indexRouter')
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from my express server');
});

routerApi(app);

app.get('/*', (req, res) => {
  res.send('Any Way');
})


app.listen(port, () => {
  console.log('Mi Port: ' + port);
});
