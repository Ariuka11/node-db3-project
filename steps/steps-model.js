const db = require("../data/db")

module.exports = {
    findBySchemeId,
    findSteps,
    addStep
}

function findSteps(id) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .where({ scheme_id: id })
        .select("steps.id", "steps.instructions", "scheme_name")
}

function findBySchemeId(stepId) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .where("steps.id", stepId)
        .select("steps.id", "steps.instructions", "scheme_name")
}
