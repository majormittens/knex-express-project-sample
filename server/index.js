'use strict'

const PORT = process.env.PORT || 8080

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.disable('x-powered-by')

app.use('/', [
  require('./routes/auth_routes'),
  require('./routes/user_routes'),
  require('./routes/project_routes'),
  require('./routes/debug_routes')
])

app.use(require('./middleware/error_middleware').all)

app.listen(PORT, () => {
  console.log(`Server started on port ${ PORT }`)
}).on('error', err => {
  console.log('ERROR: ', err)
})
