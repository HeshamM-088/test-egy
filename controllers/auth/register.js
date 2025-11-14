const  bcrypt = require('bcrypt');
const User =require('../../model/user');
const register=async(req,res)=>{
    const{ name , email, password }=req.body;
    // console.log({ name , email, password });
    if(!name || !email || !password){
    return res.status(400).json({
      message: "All fields are required ",
      data: null
    });
  }
  const DB_users=await User.find({},{__v:0});
    const existingUser=DB_users.find(({email:user_email}) => user_email==email);
    if(existingUser){
      return res.status(400).json({
        message:"Email already exists",
        data:null,
      });
    }
    const hashedPassword= await bcrypt.hash(password,8);
    console.log(hashedPassword);
    const newUser=new User({
      name,
      email,
      password:hashedPassword,
      
    } );
    console.log(newUser)
    await newUser.save();
    return res.status(201).json({
      message:"User registered successfully",
      data:{name,email},
    });
};



module.exports=register;