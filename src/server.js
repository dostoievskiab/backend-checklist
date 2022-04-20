const app = require('./app');

console.log(`[>] Service running on PORT ${process.env.PORT}`);
app.listen(process.env.PORT);