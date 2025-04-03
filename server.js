import app from './app.js'

const port = 3000
const hostname = '0.0.0.0'

app.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/`)
})