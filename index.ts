import app from './app'
const { PORT: port = 3000 } = process.env
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
import node_db from '../node_db'

console.log(node_db)
node_db.test()