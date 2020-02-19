const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' })
});

app.set('port', process.env.PORT || 7777);

app.listen(app.get('port'), () => {
  console.log(`App running on http://localhost:${app.get('port')}`)
});
