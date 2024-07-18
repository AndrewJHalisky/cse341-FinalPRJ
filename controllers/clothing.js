/*****************************************  
 Functions to create, get, update, and delete
 records to and from the clothing section
 ******************************************/

const mongodb = require('../data/db');
const ObjectId = require('mongodb').ObjectId;

// GET ONE ITEM IN THE CLOTHING INVENTORY
const getOneClothItem = async (req, res) => {
    const result = await mongodb.getDb().db().collection('clothing').find()
    result.toArray().then((clothing) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(clothing)
    })
};
// GET MULTIPLE ITEMS IN THE CLOTHING INVENTORY
const getMultiClothItems = async (req, res) => {
    const result = await mongodb.getDb().db().collection('clothing').find()
    result.toArray().then((clothing) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(clothing)
    })
};
const addClothes = async (req, res) => {
    const clothesId = new ObjectId(req.params.id);
    const clothes = { 
        type: req.body.type,
        name: req.body.name,
        price: req.body.price,
    }
    const response = await mongodb.getDatabase().db().collection('clothing').insertOne({clothes})
    if (response.modifiedCount > 0) {

        res.status(204).send() }
            else {
                res.status(500).json(response.error || `An error occured while updating the user.`)
            }
};
const updateClothes = async (req, res) => {
    const clothesId = new ObjectId(req.params.id);
    const clothes = {
        type: req.body.type,
        name: req.body.name,
        price: req.body.price,
    }
    const response = await mongodb.getDatabase().db().collection('clothing').replaceOne({clothes}, clothes)
    if (response.modifiedCount > 0) {
        res.status(204).send() }
            else {
                res.status(500).json(response.error || `An error occured while updating the user.`)
            }
};

const deleteClothes = async (req, res) => {
    const clothesId = new ObjectId(req.params.id);
    const clothes = await mongodb.getDatabase().db().collection('electronics').remove({_id: clothesId}, true)
    if (response.modifiedCount > 0) {
        res.status(204).send() } 
        else {
            application.listen(port, () => (console.log(`Database is listening and node is Running on port ${port}`)));
        }
    };

module.exports = {
    getOneClothItem,
    getMultiClothItems,
    addClothes,
    updateClothes,
    deleteClothes
}


