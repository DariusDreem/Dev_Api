const files = []

const getFiles = () => {
    return files
}

const addFile = (file) => {
    files.push({
        id: files.length + 1,
        ...file
    })
    return file.id
}

const getFileById = (id) => {
    return files.find((file) => file.id == id)
}

const deleteFileById = (id) => {
    const index = files.findIndex((file) => file.id == id)
    if (index !== -1) {
        files.splice(index, 1)
    }
}