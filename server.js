const express = require('express');
const app = express();

app.get('*', (req, res)=> {
  res.send('Hello World from arthurbernierjr');
})


app.listen(3000, () => {
  console.log('You have connected me!!!!')
})
