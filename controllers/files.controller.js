import { getFiles, addFile, getFileByIdService, deleteFileByIdService } from '../services/files.services.js'

export const getAllFiles = (req, res) => {
    res.json({
        success: true,
        files: getFiles(),
    })
}

export const createFile = (req, res) => {
    const { id, content, content_type } = req.body

    if (!content || !content_type) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        })
    }

    addFile({ content, content_type, })

    res.status(201).json({
        success: true,
        file: "File created successfully",
    })
}

export const getFileById = (req, res) => {

    const { id } = req.params

    const file = getFileByIdService(id)

    if (!file) {
        return res.status(404).json({
            success: false,
            message: 'File not found',
        })
    }

    res.json({
        success: true,
        file,
    })


}

export const deleteFileById = (req, res) => {
    const { id } = req.params

    const file = getFileByIdService(id)

    if (!file) {
        return res.status(404).json({
            success: false,
            message: 'File not found',
        })
    }

    deleteFileByIdService(id)

    res.json({
        success: true,
        message: 'File deleted successfully',
    })
}

export const getFilesbyContentType = (req, res) => {
    const { content_type } = req.params

    const files = getFiles().filter(file => file.content_type === content_type)

    if (files.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No files found',
        })
    }

    res.json({
        success: true,
        files,
    })
}