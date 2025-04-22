import { getAll, create, getById, getByName , deleteById, deleteByName } from '../services/tags.service.js' 

export const getAllTags = (req, res) => {
    const tags = getAll()

    res.json({
        success: true,
        tags,
    })
}

export const createTag = (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Name is required',
        })
    }

    const tagId = create({ name })

    res.status(201).json({
        success: true,
        message: 'Tag created successfully',
        tagId,
    })
}

export const getTagById = (req, res) => {
    const { id } = req.params

    const tag = getById(id)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    res.json({
        success: true,
        tag,
    })
} 

export const deleteTagById = (req, res) => {
    const { id } = req.params

    const tag = getById(id)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    deleteById(id)

    res.json({
        success: true,
        message: 'Tag deleted successfully',
    })
}

export const deleteTagByName = (req, res) => {
    const { name } = req.params

    const tag = getByName(name)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    deleteByName(name)

    res.json({
        success: true,
        message: 'Tag deleted successfully',
    })
}

export const getTagByName = (req, res) => {
    const { name } = req.params

    const tag = getByName(name)

    if (!tag) {
        return res.status(404).json({
            success: false,
            message: 'Tag not found',
        })
    }

    res.json({
        success: true,
        tag,
    })
}