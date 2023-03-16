import express from 'express'

//Importar novas funções
import user from './controller/userController.js'
import userl from './controller/loginController.js'

const router = express()

//Rotas das novas funções

//Criar usuários
router.use('/user', user)

//Realizar login
router.use('/login',userl)

export default router