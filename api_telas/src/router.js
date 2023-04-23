import express from 'express'

import user from './controller/cadastroController.js'
import userl from './controller/loginController.js'
import email from './controller/senhaController.js'
import camera from './controller/cameraController.js'
import update from './controller/autenticacaoController.js'
import denuncia from './controller/denunciaController.js'


const router = express()

router.use('/user', user)

router.use('/login',userl)

router.use('/reset', email)

router.use('/photo', camera)

router.use('/denuncia',denuncia)

router.use('/update', update)

export default router