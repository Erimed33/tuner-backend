const app = require('./app')
//loads out environment variables so we can use it
require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


