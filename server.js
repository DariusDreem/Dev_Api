import app from './app.js'

const port = 3000
const hostname = '0.0.0.0'

app.listen(port, hostname, () => {
    console.log('\x1b[32m%s\x1b[0m', `Server running at http://localhost:${port}/`)
})