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

router.get("/:stepId", async (req, res, next) => {
    try {
        const { stepId } = req.params
        const { id } = req.params

        const step = await steps.findStepById(id, stepId)
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

router.post("/", async (req, res, next) => {
    try {
        const { instructions, step_number } = req.body 
        const { id } = req.params // scheme_id
        const newStep = await steps.addStep(id, {instructions, step_number})
        res.json(newStep)
    } catch (err) {
        next(err)
    }
})

module.exports = router