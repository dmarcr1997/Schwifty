export const getOne = model => async (req, res) => {
    const item = await model.findById(req.params.id).exec()
    if (item) {
      res.status(200)
      res.send({ data: item })
    } else {
      res.status(404)
      res.send({ error: 'couldnt find that one' })
    }
  }
  
  export const getMany = model => async (req, res) => {
    const items = await model.find().exec()
    if (items) {
      res.status(200)
      res.send({ data: items })
    } else {
      res.status(404)
      res.send({ error: 'couldnt find anything' })
    }
  }
  
  export const createOne = model => async (req, res) => {
    const item = await model.create(req.params).exec()
    if (item) {
      res.status(200)
      res.send({ data: item })
    } else {
      res.status(404)
      res.send({ error: 'couldnt create that' })
    }
  }
  
  export const updateOne = model => async (req, res) => {
    const item = await model
      .findByIdAndUpdate(req.params.id, req.params.data)
      .exec()
    if (item) {
      res.status(200)
      res.send({ data: item })
    } else {
      res.status(404)
      res.send({ error: 'couldnt update that' })
    }
  }
  
  export const removeOne = model => async (req, res) => {
    const item = await model.findByIdAndRemove(req.params.id).exec()
    if (item) {
      res.status(200)
      res.send({ removed: item })
    } else {
      res.status(404)
      res.send({ error: 'couldnt remove that' })
    }
  }
  
  export const crudControllers = model => ({
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model)
  })
  