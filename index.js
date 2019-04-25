const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url === '/') {
    response.end('Bienvenue sur votre server');
  } else if (request.url === '/contact') {
    response.end('Nous ne sommes pas joignables pour le moment !');
  } else if (request.url.includes('display')) {
    const lien = request.url.split('/');
    const nom = lien[lien.length - 1];
    response.end(`Vous tentez d'afficher le profil de ${nom}`);
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`server is listening on ${port}`);
});