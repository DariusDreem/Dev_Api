import { getStates } from '../services/states.services.js'

export const getAllStates = (req, res) => {
    const states = getStates()
    res.json({
        success: true,
        states: getStates(),
    })
}
