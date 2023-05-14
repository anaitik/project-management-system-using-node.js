const express = require('express');
const cors = require('cors');
require('./mongooseDb/mongooseDataBase');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/api', productRoutes);

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
