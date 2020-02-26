
const app = require('./app')


require('./models/Team');

app.set('port', 3000)

app.listen(app.get('port'), () => {
  console.log(`Express is running`)
})
