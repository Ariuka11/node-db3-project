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

async function add(newScheme) {
    // return db("schemes")
    //     .insert(newScheme)
    //     .then(ids => {
    //         return findById(ids[0])
    //     })
    const [id] = await db("schemes").insert(newScheme)
    return db("schemes").where({ id }).first()
}
async function update(id, changes) {
    // return db("schemes")
    //     .where({ id })
    //     .update(changes)
    await db("schemes")
        .where({ id })
        .update(changes)
    return findById(id)
}
function remove(id) {
    return db("schemes")
        .where({ id })
        .del()
}