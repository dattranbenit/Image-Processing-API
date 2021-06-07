import express from "express"
import routes from "./routes/index"
const path = require('path')
const app = express()
const port = 5000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(port, () => console.log(`Listening on port ${port}`))

export default app