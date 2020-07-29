const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');

const { connectDB } = require('./config/db');

dotenv.config({ path: './config/.env' });

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/', require('./routes/index'));
app.use('/api/v1/url', require('./routes/url'));

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
