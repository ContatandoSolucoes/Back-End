import express from 'express'
import db from '../services/userServices.js'

const router = express.Router()

router.post('/', async (resquest, response) => {
  const {nome, email, senha, telefone, nascimento} = resquest.body
  await db.createUser(nome, email, senha, telefone, nascimento)

  //Criei esse try & catch e os if para captar erros 
  try{
     //if quando alguma variavél vier sozinha obs: Prof luiz recomendou ter no back e no front esta verificação
    if(nome === '' && email === '' && senha === "" && telefone === "" && nascimento === "" ){
    return(response.status(401).send("Error"))
    }
    //Sucesso
    response.status(200).send('Tudo pega com esse cara')
    //Não conseguiu conectar ao banco ou não achou a coluna
    } catch{
      return((response.status(500).send("Error")))
      }
})
export default router