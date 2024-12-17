const http = require('http');
const fs = require('fs');
const path = require('path');

const words = ['გამარჯობა', 'სალამი', 'კარგი', 'გილოცავთ', 'მადლობა'];

for (let i = 1; i <= 20; i++) {
  const word = words[i % words.length];
  fs.writeFile(path.join(__dirname, `file${i}.txt`), word, (err) => {
    if (err) throw err;
    console.log(`file${i}.txt created`);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const aboutPage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>About Page</title>
      </head>
      <body>
          <h1>Welcome to the About Page!</h1>
          <p>This is the About section of our website.</p>
          <a href="/homepage">Go to Homepage</a>
      </body>
      </html>
    `;
    res.end(aboutPage);
  } else if (req.url === '/homepage') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const homepage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Homepage</title>
      </head>
      <body>
          <h1>Welcome to the Homepage!</h1>
          <p>This is the main page of the website.</p>
          <a href="/about">Go to About Page</a>
      </body>
      </html>
    `;
    res.end(homepage);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
