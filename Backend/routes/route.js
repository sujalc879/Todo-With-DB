const { z } = require("zod");
const { UserModel, TodoModel } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const JWT_SECRETE = "sujal";

async function signup(req, res) {
    const { email, password, firstName } = req.body;

    const result = z.object({
        email : z.string().email(),
        password : z.string().min(3).max(100),
        firstName : z.string().min(3).max(100)
    })

    const parsed = result.safeParse(req.body);

    if (!parsed.success) {
        const errorMessage = parsed.error.errors.map(err => err.message);

        res.status(400).json({ Message : errorMessage });
    } else {

        try {
            const hashedPassword = await bcrypt.hash(password, 5);
    
            await UserModel.create({
                email : email,
                password : hashedPassword,
                firstName : firstName
            })
            
            res.json({ Message : "You are Signed Up"});
            
        } catch (error) {
            res.status(403).json({ Message : "The Email is Already Exist in Our Database"});
        }
    }
}

async function signin(req, res) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
        email
    });

    if (!user) {
        res.status(411).json({ Message : "The user is Not exist in Our Database, Please Sign Up Or Check Your Email"});

    } else {
        const hashedPassword = user.password;

       const passwordMatched = await bcrypt.compare(password, hashedPassword);

       if (!passwordMatched) {
        res.status(403).json({ Message : "The Password is incorrect "});

       } else {

        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRETE);

        res.json({ token : token});
       }
    }

}

async function todo(req, res) {
    const userId = req.userId;
    const { title } = req.body;

    try {
        const response = await TodoModel.create({
            title : title,
            done : false,
            userId : userId
        })
    
        res.json({ Message : "todo is created",
                   todoId : response._id,
                   title : response.title,
                   done : response.done,
                   time : response.time,
                   date : response.date
                });
        
    } catch (error) {
        res.json({ Message : "dataBase is down"});
    }
}

async function todos(req, res) {
    const userId = req.userId;

    try {
        const todos = await TodoModel.find({
            userId
        });
    
        res.json(todos);
        
    } catch (error) {
        res.json({ Message : "there is problem while fetching the todos"});
    }

}

async function update(req, res) {
    const { todoId, title } = req.body;

    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, { title : title }, { new : true });

        if (updatedTodo == null) {
            res.json({ Message : "Todo Not Found With Null"}); // todoId can be wrong
        } else {
            res.json(updatedTodo);
        }
        
        
        
    } catch (error) {
        res.json({ Message : "Todo Not Found"}); // todoId can be wrong
    }

}

async function deletes(req, res) {
    const { todoId } = req.body;

    try {
        const deletedOne = await TodoModel.deleteOne({ _id : todoId});
        
        if (deletedOne.deletedCount == 0) {
            res.status(403).json({ Message : "todo Not found With 0"}); // todoId can be wrong
            
        } else {
            res.json({ Message : "todo deleted successfully"});
        }
    
        
    } catch (error) {
        res.status(403).json({ Message : "todo Not found"}); // todoId can be wrong
    }

}

async function done(req, res) {
    const { todoId } = req.body;

    try {
        const doneTodo = await TodoModel.findByIdAndUpdate(todoId, { done : true }, { new : true });

        if (doneTodo == null) {
            res.json({ Message : "Todo Not Found With Null"}); // todoId can be wrong
        } else {
            res.json(doneTodo);
        }
        
        
        
    } catch (error) {
        res.json({ Message : "Todo Not Found"}); // todoId can be wrong
    }
}

async function undone(req, res) {
    const { todoId } = req.body;

    try {
        const undoneTodo = await TodoModel.findByIdAndUpdate(todoId, { done : false }, { new : true });

        if (undoneTodo == null) {
            res.json({ Message : "Todo Not Found With Null"}); // todoId can be wrong
        } else {
            res.json(undoneTodo);
        }
        
    } catch (error) {
        res.json({ Message : "Todo Not Found"}); // todoId can be wrong
    }
}

module.exports = {
    signup,
    signin,
    todo,
    todos,
    update,
    deletes,
    done,
    undone,
    JWT_SECRETE
}