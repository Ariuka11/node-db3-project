const express = require('express');

const stepsRouter = require("../steps/steps-router")
const Schemes = require('./scheme-model.js');

const router = express.Router();

router.use("/:id/steps", stepsRouter)

router.get('/', async (req, res, next) => {
  // Schemes.find()
  //   .then(schemes => {
  //     res.json(schemes);
  //   })
  //   .catch(err => {
  //     res.status(500).json({ message: 'Failed to get schemes' });
  //   });

  try {
    res.json(await Schemes.find())
  } catch (err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  // Schemes.findById(id)
  //   .then(scheme => {
  //     if (scheme) {
  //       res.json(scheme);
  //     } else {
  //       res.status(404).json({ message: 'Could not find scheme with given id.' })
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).json({ message: 'Failed to get schemes' });
  //   });

  try {
    const { id } = req.params;
    const scheme = await Schemes.findById(id)

    if (scheme) {
      res.json(scheme)
    } else {
      res.status(404).json({
        message: 'Could not find scheme with given id.'
      })
    }
  } catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  // const schemeData = req.body;

  // Schemes.add(schemeData)
  //   .then(scheme => {
  //     res.status(201).json(scheme);
  //   })
  //   .catch(err => {
  //     res.status(500).json({ message: 'Failed to create new scheme' });
  //   });

  try {
    const newScheme = await Schemes.add(req.body)
    res.status(201).json(newScheme)
  } catch (err) {
    next(err)
  }
});


router.put('/:id', async (req, res, next) => {


  // Schemes.findById(id)
  //   .then(scheme => {
  //     if (scheme) {
  //       Schemes.update(id, changes)
  //         .then(updatedScheme => {
  //           res.json(updatedScheme);
  //         });
  //     } else {
  //       res.status(404).json({ message: 'Could not find scheme with given id' });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).json({ message: 'Failed to update scheme' });
  //   });

  try {
    const { id } = req.params
    const scheme = await Schemes.update(id, req.body)

    if (scheme) {
      res.json(scheme)
    } else {
      res.status(404).json({
        message: "Could not find the scheme with given ID"
      })
    }
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  // const { id } = req.params;

  // Schemes.remove(id)
  //   .then(deleted => {
  //     if (deleted) {
  //       res.json({ removed: deleted });
  //     } else {
  //       res.status(404).json({ message: 'Could not find scheme with given id' });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).json({ message: 'Failed to delete scheme' });
  //   });

  try {
    const { id } = req.params
    const deletedScheme = await Schemes.remove(id)

    if (deletedScheme) {
      res.status(204).end()
    } else {
      res.status(404).json({
        message: 'Could not find scheme with given id'
      })
    }
  } catch (err) {
    next(err)
  }
});

module.exports = router;