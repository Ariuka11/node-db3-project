const db = require('../data/db')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db("schemes")
}
function findById(id) {
    return db("schemes")
        .where({ id })
        .first()
}
function findSteps(scheme_id) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .select("steps.id", "steps.instructions", "scheme_name")
        .where("schemes.id", scheme_id)
}
function add() {
    
}
function update() {

}
function remove() {

}