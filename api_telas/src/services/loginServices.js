import database from '../repository/connection.js';

//Função de login 
async function loginUser(email, senha){
  const sql2 = "SELECT * FROM tbl_usuario WHERE email = ? AND senha=?"
  const dados2 = [email, senha]
  const conn = await database.connect();
  
  //Abrir e fechar uma chamada pro banco
  //Esta variavél vai puxar a informação encontrada no banco
  const [rows] = await conn.query(sql2, dados2)
  conn.end();

  //Mostra o número de dados encontrados
  return rows[0]
}
export default {loginUser};