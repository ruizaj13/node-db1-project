const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getById,
    insert,
    update,
    remove
}

function getAll() {
    return db('accounts')
}

function getById(id) {
    return db('accounts').where({id}).first()
}

function insert(account) {
    return db('accounts').insert(account)
        .then(([id]) => {
            return db('accounts').where({id}).first()
        })
}

function update(id, changes){
    return db('accounts').where({id}).update(changes)
        .then(() => {
            return getById(id)
        })
}

function remove(id) {
    return db('accounts').where({id}).del()
}
