import { getAll, create, getById, deleteById } from '../services/auctions.services.js'


export const getAllAuctions = (req, res) => {
    res.json({
        success: true,
        auctions: getAll(),
    })
}

export const createAuctions = (req, res) => {
    const { id, titre, description, file_id, initial_price, actual_price,   } = req.body
// to define start_bid_date, end_bid_date, created_at, updated_at, deleted_at, tag_id, seller_id, buyer_id, state_id
    if (!titre || !date || !author) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all required fields',
        })
    }

    create({ titre, date, author, isRent })

    res.status(201).json({
        success: true,
        user: 'Auction created successfully',
    })
}

export const getAuctionById = (req, res) => {
    const { id } = req.params

    const auction = getById(id)

    if (!auction) {
        return res.status(404).json({
            success: false,
            message: 'Auction not found',
        })
    }

    res.json({
        success: true,
        auction,
    })
}

export const deleteAuctionById = (req, res) => {
    const { id } = req.params

    const auction = getById(id)

    if (!auction) {
        return res.status(404).json({
            success: false,
            message: 'Auction not found',
        })
    }

    deleteById(id)

    res.json({
        success: true,
        message: 'Auction deleted successfully',
    })
}

export const getAverageRating = (req, res) => {
    const { id } = req.params

    const auction = getById(id)

    if (!auction) {
        return res.status(404).json({
            success: false,
            message: 'Auction not found',
        })
    }

    const averageRating = auction.ratings.reduce((acc, rating) => acc + rating, 0) / auction.ratings.length

    res.json({
        success: true,
        averageRating,
    })
}