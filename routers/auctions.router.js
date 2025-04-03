import express from 'express';
import { getAllAuctions, createAuctions, getAuctionById, deleteAuctionById } from '../controllers/auctions.controller.js';
const auctionRouter = express.Router();

auctionRouter.get('/', getAllAuctions)
auctionRouter.post('/', createAuctions)
auctionRouter.get('/:id', getAuctionById)
auctionRouter.delete('/:id', deleteAuctionById)

export default auctionRouter