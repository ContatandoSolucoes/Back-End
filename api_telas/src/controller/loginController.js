import express from 'express'
import db from '../services/userlogin.js'

const router = express.Router()

router.post('/', async (resquest, response) => {
  const {email,senha} = resquest.body
  await db.loginUser(email,senha)

  //Criei esse try & catch e os if para captar erros obs: no caso do erro tratado pelo if é quando alguma variavél vier sozinha ou email/senha não forem compativéis
  try{

  //Variavél para verificar se o email e senha estão corretos
  const userl = await db.loginUser(email, senha);

  //if quando alguma variavél vier sozinha
  if(email === '' && senha === ""){
    return(response.status(401).send("Error"))
  }
  //email ou senha não forem compativéis
  if(userl.lenght > 0){
    return((response.status(401).send("Error")))
  }
  //Resposta de sucesso
  response.status(200).send('Tudo pega com esse cara')
  //Erro não conseguiu conectar no banco ou coluna não existe
  } catch{
    return((response.status(500).send("Error")))
    }
})
export default router