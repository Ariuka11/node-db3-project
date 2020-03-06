const express = require("express")
const steps = require("./steps-model")

const router = express.Router({
    mergeParams: true
})

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params // scheme id
        const step = await steps.findSteps(id)
        if (step) {
            res.json(step)
        } else {
            res.status(404).json({
                message: 'Could not find scheme with given id.'
            })
        }

    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const step = await steps.findBySchemeId(id)
        if (step) {
            res.json(step)
        } else {
            res.status(404).json({
                message: 'Could not find scheme with given id.'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router