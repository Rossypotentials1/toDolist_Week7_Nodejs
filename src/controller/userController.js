const users = require("../model/user");

//1. retrieve all tasks

exports.getAllUsers = async (req,res) =>{
    try{
        let users = await User.find();
        if(users.length === 0)
        return res.status(404).json({
            success: false,
            message: "Users not found",
        });
        res.status(200).json({
            success: true,
            message: "Users found",
            users,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal server Error",
            error: error.message,
        })
    }
};
exports.getUser = async(req, res) =>{
    try{
        let id = {_id: res.params.id};
        let user = await User.findone(id);
        if(!user) return res.status(404).json({
            success: false,
            message: "user not found",
            
        });
        res.status(200).json({
            success: true,
            message: "User found",
            user,
            count: user.length,

        });
            
        
    }catch(error){
        res.status(500).json({
            success: false,
            message: "internal error",
            error: error.message,

        })
    }
};

//2. Add a todo
exports.createUsers = async(req, res)=>{
   try {
    let user = await req.body;
    let created = await User.create(user);
    if(!created) return res.status(400).json({
        success:false,
        message: "creation of user was unsuccesfull",
    });
    res.status(200).json({
        success:true,
        message: "user successfully created",
        user: created,
    })
    
   } catch (error) {
    res.status(500).json({
        success:false,
        message: "internal error",
        error: error.message,
    });
   }
};


//3. Updated a particular toDo wit Id
exports.updateUser = async(req,res) =>{
    try {
        
        
        let id = {_id: res.params.id};
        let user = await req.body;
        let update = await User.findAndUpdte(id, user, { new: true});
        if(!update) return res.status(404).json({
            success: false,
            message: "user not updated",
            
        });
        res.status(200).json({
            success: true,
            message: "User Updated",
            user: update,

        });
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "internal error",
            error:error.message,

    });

}
};

// 5. Delete toDo tasks
exports.deleteUser = async (req,res)=>{
    try {
        
        
        let id = {_id: res.params.id};
        let deleted = await User.findAndDelete(id, user, { new: true});
        if(!deleted) return res.status(404).json({
            success: false,
            message: "user not deleted",
            
        });
        res.status(200).json({
            success: true,
            message: "User deleted",
            user: deleted,

        });
        
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "User deleted",
            error: error.message,

        });
        
    }
};