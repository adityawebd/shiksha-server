// src/server.js
const app = require('./App');
const connectDB = require('./config/config')






const PORT = process.env.PORT || 5000;
connectDB();
 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 