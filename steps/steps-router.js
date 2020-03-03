const express = require("express")
const steps = require("./steps-model")

const router = express.Router({
    mergeParams: true
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const step = await steps.findBySchemeId(id)
        res.json(step)

    } catch (err) {
        next(err)
    }
})

module.exports = router