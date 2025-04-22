const tags = []

export const getAll = () => {
    return tags
}

export const create = (tag) => {
    tags.push({
        id: tags.length + 1,
        ...tag
    })
    return tag.id
}

export const getById = (id) => {
    return tags.find((tag) => tag.id == id)
}

export const deleteById = (id) => {
    const index = tags.findIndex((tag) => tag.id == id)
    if (index !== -1) {
        tags.splice(index, 1)
    }
}

export const deleteByName = (name) => {
    const index = tags.findIndex((tag) => tag.name == name)
    if (index !== -1) {
        tags.splice(index, 1)
    }
}

export const getByName = (name) => {
    return tags.find((tag) => tag.name == name)
}