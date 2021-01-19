const Account = require('../accounts/accounts-model')

const valById = async (req, res, next) => {
    try {
        const account = await Account.getById(req.params.id)
        if (account) {
            req.account = account
            next()
        } else {
            res.status(404).json(`Account with ID: ${req.params.id} not found`)
        }
    } catch (err) {
        res.status(500).json('Something has gone terribly wrong')
    }
}

const valNewAccount = (req, res, next) => {
    req.body.name && req.body.budget ? next() : res.status(400).json({ERROR: 'Please provide name and budget'})
}

const valUpdatedAccount = (req, res, next) => {
    req.body.name || req.body.budget ? next() : res.status(400).json({error: 'please provide updated action data'})
}




module.exports = { valById, valNewAccount, valUpdatedAccount }