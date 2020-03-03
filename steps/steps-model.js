const db = require("../data/db")

module.exports = {
    findSteps,
    findBySchemeId,
    addStep
}

function findSteps(scheme_Id) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .select("steps.id", "steps.instructions", "scheme_name")
        .where("steps.scheme_id", scheme_Id)
}

function findBySchemeId(stepId) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .select("steps.id", "steps.instructions", "scheme_id")
        .where("steps.id", stepId)
}

function addStep(newStep) {
    return db("steps")
        .insert(newStep)
        .then()
}   