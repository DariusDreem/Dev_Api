const files = []

export const getFiles = () => {
    return files
}

export const addFile = (file) => {
    files.push({
        id: files.length + 1,
        ...file
    })
    return file.id
}

export const getFileByIdService = (id) => {
    return files.find((file) => file.id == id)
}

export const deleteFileByIdService = (id) => {
    const index = files.findIndex((file) => file.id == id)
    if (index !== -1) {
        files.splice(index, 1)
    }
}