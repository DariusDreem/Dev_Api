const statesExplanation = {
    "Open": "This state indicates that the auction is currently open for bidding. Bidders can place their bids on the items listed in the auction.",
    "Pending": "This state indicates that the auction is currently pending. This may mean that the auction is not yet open for bidding or that it is waiting for some condition to be met before it can proceed.",
    "Close": "This state indicates that the auction has closed and no further bids can be placed. The auction is now in the process of being finalized, and the winning bidder will be determined based on the highest bid received before the auction closed.",
    "Canceled": "This state indicates that the auction has been canceled and will not proceed. This may happen for various reasons, such as the item being withdrawn from sale or a technical issue preventing the auction from taking place.",
    "Sold": "This state indicates that the auction has successfully concluded, and the item has been sold to the highest bidder. The winning bidder is now the owner of the item, and payment and delivery arrangements will be made."
}

const states = [
    "Open",
    "Pending",
    "Close",
    "Canceled",
    "Sold"
]

export const getStates = (req, res) => {
    return statesExplanation;
}

