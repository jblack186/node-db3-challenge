const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({id}).first();
}

function findSteps(user_id) {
    return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.steps_id')
    .select( 'sc.name') 
    .where({user_id});  
}

function add() {

}

function addStep() {
    
}

function update() {

}

function remove() {
    
}