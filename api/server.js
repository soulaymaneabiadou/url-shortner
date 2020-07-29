const express = require('express');
const dotenv = require('dotenv');

const { connectDB } = require('./config/db');

dotenv.config({ path: './config/.env' });

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/api/v1/url', require('./routes/url'));

app.listen(process.env.PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
