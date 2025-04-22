const pictures = []

export const getPictures = (req, res) => {
    return pictures;
}

export const createPicture = (picture) => {
    pictures.push({
        id: pictures.length + 1,
        ...picture
    })
    return picture.id
}

export const getById = (id) => {
    return pictures.find((picture) => picture.id == id)
}

export const deleteById = (id) => {
    const index = pictures.findIndex((picture) => picture.id == id)
    if (index !== -1) {
        pictures.splice(index, 1)
    }
}




