import express from 'express';
import auctionRouter from './routers/auctions.router.js'
import statesRouter from './routers/states.router.js'
// import tagRouter from './routers/tags.router.js'
import picturesRouter from './routers/pictures.router.js'
import filesRouter from './routers/files.router.js'

const app = express()
app.use(express.json())


app.use('/v1/auction', auctionRouter)
app.use('/v1/states', statesRouter)
// app.use('/v1/tag', tagRouter)
app.use('/v1/pictures', picturesRouter)
app.use('/v1/files', filesRouter)

export default app