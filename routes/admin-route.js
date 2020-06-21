import { Router } from 'express'

export const productRouter = Router()

import { getAllMotels, postAddMotel, getMotelById, postEditMotel, postDeleteMotel } from '../controllers/admin-controller'

productRouter.get('/all-motels', getAllMotels)
productRouter.post('/add-motel', postAddMotel)

productRouter.post('/motel-id', getMotelById)
productRouter.put('/motel-edit', postEditMotel)
productRouter.post('/motel-delete', postDeleteMotel)