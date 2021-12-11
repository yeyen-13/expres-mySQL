const express = require("express");
const { route } = require(".");
const router = express.Router();

const{ getAllUser,getUsrById,postUser,deleteById,updateById}= require('../controlers/user.controler')

//get all
router.get("/",  getAllUser);

//menambahkan data baru kedalam database
//penulisan dengan hardcode
// router.post("/",(req,res)=>{
//     db.query(`insert into user 
//     (username,email,password)values
//     ("nana","nana@gmail.com","123")`, (err,result,field)=>{
//         if(err){
//             console.log(err)
//         }

//         res.json("berhasil menmbahkan database")
//     })
// })


//get data by id
router.get("/:id",getUsrById)

//post user
router.post("/",postUser)

//update user by id

router.put("/:id",updateById)




//delete user by id
router.delete("/:id",deleteById)



module.exports = router;
