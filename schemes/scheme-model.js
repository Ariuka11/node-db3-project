const db = require('../data/db')

module.exports = {
    find,
    findById,
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

function add(newScheme) {
    return db("schemes")
        .insert(newScheme)
        .then(ids => {
            return findById(ids[0])
        })
}
function update(id, changes) {
    return db("schemes")
        .where({ id })
        .update(changes)
}
function remove(id) {
    return db("schemes")
        .where("id", id)
        .del()
}