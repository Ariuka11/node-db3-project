const db = require("../data/db")

module.exports = {
    findStepById,
    findSteps,
    addStep
}

function findSteps(id) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .where({ scheme_id: id })
        .select("steps.id", "steps.instructions", "scheme_name", "steps.step_number")
}

function findStepById(schemeId, id) {
    return db("steps")
        .where({id, scheme_id: schemeId})
        .first()
}
async function addStep(schemeId, newStep) {
    const data = {scheme_id: schemeId, ...newStep}
    const [id] = await db("steps").insert(data)

    return findStepById(schemeId, id)
}

