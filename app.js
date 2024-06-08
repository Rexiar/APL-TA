const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');
const sequelize = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js MVC application using MariaDB');
});

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
