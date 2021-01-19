const express = require('express');
const router = express.Router();
const Account = require('./accounts-model.js');

const{ valById, valNewAccount, valUpdatedAccount } = require('../middleware/accounts-middleware')

router.get('/', async (req, res) => {
    try {
        const accounts = await Account.getAll()
        res.status(200).json(accounts)
    } catch (err) {
        res.status(500).json({Error: err.message})
    }
})

router.get('/:id', valById, async (req, res) => {
    res.status(200).json(req.account)
})

router.post('/', valNewAccount, (req, res) => {
    Account.insert(req.body)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json({Error: err.message})
        })
})

router.put('/:id', valById, valUpdatedAccount, (req, res) => {
    Account.update(req.params.id, req.body)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json({Error: err.message})
        })
})

router.delete('/:id', valById, (req, res) => {
    Account.remove(req.params.id)
        .then(account => {
            res.status(200).json('Account has been deleted')
        })
        .catch( err => {
            res.status(500).json({Error: err.message})
        })
})





module.exports = router