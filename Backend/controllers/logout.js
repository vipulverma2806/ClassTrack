const logout = (req,res)=>{
    try{
        res.clearCookie("token")
        res.status(200).json("Succesfully logout")
    }catch(err){
        res.status(400).json("error occured")
    }
}

module.exports = logout