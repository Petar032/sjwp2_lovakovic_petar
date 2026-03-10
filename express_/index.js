import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send("<h1>My home page</h1>");
});
app.get('/about', (req, res) => {
  res.send("<h3>About me page</h3>");
});
app.get('/contact', (req, res) => {
  res.send("<h3>Contact Us</h3>");
});
app.get('/info', (req, res) => {
    res.send("<h3>Info page</h3>");
  });
app.listen(port, "127.0.0.1", () => {
  console.log(`The server is running on port ${port}`);
});             