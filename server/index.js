const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Database/connect');
const jobSeekerRoutes = require('./routes/jobSeekerRoutes');
const companyRoutes = require('./routes/companyRoutes');
const jobPostRoutes = require('./routes/jobPostRoutes');

require('dotenv').config();
connectDB(process.env.MONGODB_URL);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());


app.use('/api', jobSeekerRoutes);
app.use('/api', companyRoutes);
app.use('/api', jobPostRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});