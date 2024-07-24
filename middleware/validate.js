const validate = require('../helper/validate');

// GROCERIES VALIDATION
const saveGroceryItemValidate = (req, res, next) => {
    const grocValidateRule = {
        category: 'required|string',
        itemDescription: 'required|string',
        price: 'required|string',
    };
    validate(req.body, grocValidateRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

// CLOTHING VALIDATION
const clothingItemValidate = (req, res, next) => {
    const clothValidateRule = {
        item: 'required|string',
        price: 'required|string',
    };
    validate(req.body, clothValidateRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

// CLOTHING VALIDATION
const saveClothingItemValidate = (req, res, next) => {
    const elecValidateRule = {
        category: 'required|string',
        itemDescription: 'required|string',
        price: 'required|numeric',
    };
    validate(req.body, elecValidateRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next()
        }
    });
}

module.exports = {
    saveGroceryItemValidate,
    saveElectroInventValidate
}