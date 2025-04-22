const auctions = []

export const getAll = () => {
    return auctions
}
// to define start_bid_date, end_bid_date, created_at, updated_at, deleted_at, tag_id, seller_id, buyer_id, state_id
export const create = (auction) => {
    auctions.push({
        id: auctions.length + 1,
        ...auction
    })
    return auction.id
}

export const getById = (id) => {
    return auctions.find((auction) => auction.id == id)
}

export const deleteById = (id) => {
    const index = auctions.findIndex((auction) => auction.id == id)
    if (index !== -1) {
        auctions.splice(index, 1)
    }
}