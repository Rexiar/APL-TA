const express = require('express');
const bodyParser = require('body-parser');
const entryRoutes = require('./routes/entryRoutes');
const sequelize = require('./config');

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use('/', entryRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
