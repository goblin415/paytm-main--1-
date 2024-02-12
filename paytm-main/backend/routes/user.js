const express = require("express") ;
const router = express.Router() ;
const z = require("zod") ;
const jwt = require("jsonwebtoken")
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("./middleware");

const signupBody = z.object({
    username : z.string().email() , 
    firstname : z.string() , 
    lastname : z.string() , 
    password : z.string()
})

router.post("/signup" , async (req , res)=>{
    const { success } = signupBody.safeParse(req.body) ;
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username 
    })

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const user = await User.create({
        username : req.body.username ,
        firstName : req.body.firstName , 
        lastName : req.body.lastName , 
        password : req.body.password 
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })


    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.status(200).json({
        message: "User created successfully",
        token: token
    })

})

const singninBody = z.object({
    username : z.string().email(), 
    password : z.string()
})

router.post("/signin" , async (req , res)=>{
    const {success} = singninBody.safeParse(req.body) ;
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username , 
        password : req.body.password 
    })

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        
        return;
    }

    res.status(411).json({
        message : "Error while login"
    })

})

const updateBody = z.object({
	password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})

router.put("/", authMiddleware , async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        _id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router ;