const express = require('express');
const dotenv = require('dotenv').config();
const os = require('os');
const cluster = require('cluster');
const authRoute = require('./routes/authRoutes');
const formRoute = require('./routes/formRoutes');
const hoiRoutes = require('./routes/hoiRoutes');
const ieacRoutes = require('./routes/ieacRoutes');
const adminRoutes = require('./routes/adminRoutes');
const studentAdminRoutes = require('./routes/studentAdminRoutes');
const sportsAdminRoutes = require('./routes/sportsAdminRoutes');
const researchRoutes = require('./routes/researchAdminRoutes')
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const db = require('./models');
const { serverLogger } = require('./middleware/logger');
const bcrypt = require('bcrypt')

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
}
else {

  // creating express app
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.static(`${__dirname}/data`));
  app.use('/auth', authRoute);
  app.use('/forms', formRoute);
  app.use('/hoi/data', hoiRoutes);
  app.use('/ieac/data', ieacRoutes);
  app.use('/admin/data', adminRoutes);
  app.use('/students-admin/data', studentAdminRoutes);
  app.use('/sports-admin/data', sportsAdminRoutes);
  app.use('/research-admin/data', researchRoutes);
  app.use(errorHandler);

  // server listen and database configuration
  db.sequelize.sync().then(async (req) => {
    try {
      
      const userCount = await db.User.count();

      if (userCount === 0) {
        
        await db.User.create({
          email_id: 'sas.tech@somaiya.edu',
          password: await bcrypt.hash('Sas@1234', 10),
          role:"ADMIN"
        });

        console.log('Default user created successfully!');
      }

      serverLogger.info(`Connected to database ${req.config.database}`);
      console.log('Connected to MySQL database');
    } catch (error) {
      console.error('Error creating default user: OR User already exists');
    }

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      serverLogger.info(`Server started running at port ${PORT}`);
      console.log(`Server started running at port ${PORT}`);
    });
  });
}
