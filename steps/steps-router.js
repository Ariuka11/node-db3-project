const express = require("express")
const steps = require("./steps-model")

const router = express.Router({
    mergeParams: true
})

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params // scheme id
        const step = await steps.findSteps(id)
        res.json(step)
    } catch (err) {
        next(err)
    }
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

router.post('/', (req, res) => {
    const stepData = req.body;
    const { id } = req.params;
  
    Schemes.findById(id)
      .then(scheme => {
        if (scheme) {
          Schemes.addStep(stepData, id)
            .then(step => {
              res.status(201).json(step);
            })
        } else {
          res.status(404).json({ message: 'Could not find scheme with given id.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new step' });
      });
  });

module.exports = router