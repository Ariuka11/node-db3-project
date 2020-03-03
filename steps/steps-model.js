const db = require("../data/db")

module.exports = {
    findBySchemeId,
    findSteps,
    addStep
}

function findSteps(scheme_id) {
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

function addStep(newStep) {
    return db("steps")
        .insert(newStep)
        .then(ids => {
            return findSteps(ids[0])
        });
}   