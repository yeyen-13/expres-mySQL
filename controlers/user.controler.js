const db = require("../config/db");

module.exports={
 getAllUser:(req, res) => {
    db.query("select id,username,email,password from user", (err, result, fields) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  },

 getUsrById:(req,res)=>{

    console.log(req.id)
    const {id}= req.params
    db.query(`select * from user where id= ?`,[id],  (err,result,field)=>{
      if(err){
        console.log(err)
      }
      res.json(result)
    })
     
  
  },

 postUser:(req,res)=>{
    let user=req.body
    console.log(req.body)
    
      db.query(`insert into user 
      (username,email,password)values
      (?,?,?)`,[user.usename, user.email, user.password], (err,result,field)=>{
          if(err){
              console.log(err)
          }
    
          res.json("berhasil menmbahkan database")
      })
    },
    deleteById:(req,res)=>{
        const{id}= req.params
        db.query(`delete user from user where id=?`,[id],(err,result,field)=>{
          if(err){
            console.log(err)
          }
          res.json(result)
        })
      },
      updateById:(req,res)=>{
        const{id}= req.params
        let updateUser = req.body
        db.query(`update user  set username =?, email =?, password=? where id=?`,[updateUser.username, updateUser.email, updateUser.password, id],(err,result,field)=>{
          if(err){
            console.log(err)
          }
          res.json("data secses to update")
        })
      }
}

