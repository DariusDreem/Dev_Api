import { getPictures, createPicture, getById, deleteById } from '../services/pictures.services.js'

export const getAllPictures = (req, res) => {
    const pictures = getPictures()
    res.json({
        success: true,
        pictures: getPictures(),
    })
}

export const createNewPicture = (req, res) => {
    const { path, auction_id } = req.body

    if (!path || !auction_id) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        })
    }

    const pictureId = createPicture({ path, auction_id })

    res.status(201).json({
        success: true,
        message: 'Picture created successfully',
        pictureId,
    })
}

export const getPictureById = (req, res) => {
    const { id } = req.params

    const picture = getById(id)

    if (!picture) {
        return res.status(404).json({
            success: false,
            message: 'Picture not found',
        })
    }

    res.json({
        success: true,
        picture,
    })
}

export const deletePictureById = (req, res) => {
    const { id } = req.params

    const picture = getById(id)

    if (!picture) {
        return res.status(404).json({
            success: false,
            message: 'Picture not found',
        })
    }

    deleteById(id)

    res.json({
        success: true,
        message: 'Picture deleted successfully',
    })
}

export const getPicturesByAuctionId = (req, res) => {
    const { auction_id } = req.params

    const pictures = getPictures().filter(picture => picture.auction_id === auction_id)

    if (pictures.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No pictures found for this auction',
        })
    }

    res.json({
        success: true,
        pictures,
    })
}

export const deletePicturesByAuctionId = (req, res) => {
    const { auction_id } = req.params

    const pictures = getPictures().filter(picture => picture.auction_id === auction_id)

    if (pictures.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No pictures found for this auction',
        })
    }

    pictures.forEach(picture => deleteById(picture.id))

    res.json({
        success: true,
        message: 'Pictures deleted successfully',
    })
}
