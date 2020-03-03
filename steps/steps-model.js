const db = require("../data/db")

module.exports = {
    findBySchemeId
}

function findBySchemeId(stepId) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .select("steps.id", "steps.instructions", "scheme_id")
        .where("steps.id", stepId)
}
