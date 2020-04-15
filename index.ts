import app from './app'
const { PORT: port = 3000 } = process.env
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
