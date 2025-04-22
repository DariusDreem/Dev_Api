import { getAll, create, getById, deleteById } from '../services/auctions.services.js'


export const getAllAuctions = (req, res) => {
    res.json({
        success: true,
        auctions: getAll(),
    })
}

export const createAuctions = (req, res) => {
    const { id, titre, description, file_id, initial_price, actual_price, } = req.body
    // to define start_bid_date, end_bid_date, created_at, updated_at, deleted_at, tag_id, seller_id, buyer_id, state_id
    if (!titre || !description || !file_id || !initial_price) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all required fields',
        })
    }

    create({ titre, description, file_id, initial_price, actual_price })

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

export const getAuctionsByState = (req, res) => {
    const { state } = req.params

    const auctions = getAll().filter(auction => auction.state === state)

    if (auctions.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No auctions found for this state',
        })
    }

    res.json({
        success: true,
        auctions,
    })
}

export const getAuctionByPriceRange = (req, res) => {
    const { minPrice, maxPrice } = req.query

    if (!minPrice && !maxPrice) {
        return res.status(400).json({
            success: false,
            message: 'Please provide at least one price range',
        })
    }

    const auctions = getAll().filter(auction => {
        if (minPrice && maxPrice) {
            return auction.price >= minPrice && auction.price <= maxPrice
        } else if (minPrice) {
            return auction.price >= minPrice
        } else if (maxPrice) {
            return auction.price <= maxPrice
        }
    })

    if (auctions.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No auctions found for this price range',
        })
    }

    res.json({
        success: true,
        auctions,
    })
}

export const AuctionBySellerId = (req, res) => {
    const { sellerId } = req.params

    const auctions = getAll().filter(auction => auction.seller_id === sellerId)

    if (auctions.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No auctions found for this seller',
        })
    }

    res.json({
        success: true,
        auctions,
    })
}

