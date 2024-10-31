import { pool } from "../db.js";

//get all users controller

export const getUsers = async(req,res)=>{
    try {
        const users = await pool.query('SELECT * FROM users');
        res.status(200).json(users.rows);
        
    } catch (err) {
        console.log(err.message)
    }
}

//get a user controller

export const getUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await pool.query('SELECT * FROM users WHERE user_id = $1',[id]);
        res.status(200).json(user.rows[0]);
        
    } catch (err) {
        console.log(err.message)
    }
}

//create a user controller

export const createUser = async(req,res)=>{
        try {
            const {name,email,password} = req.body;
            const newsUser = await pool.query('INSERT INTO users (name,email,password) VALUES($1, $2,$3) RETURNING *',[name,email,password]);
            res.status(201).json(newsUser.rows[0]);
            
        } catch (err) {
            console.log(err.message)
        }
}

//update a user controller

export const updateUser = async(req,res)=>{
        try {

            const {id} = req.params;
            const {name,email,password} = req.body;
            const editUser = await pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE user_id = $4 RETURNING *',[name,email,password,id]);
            res.status(200).json('User Updated');
            
        } catch (err) {
            console.log(err.message)
        }
}
//delete a user controller
export const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const removeUser = await pool.query('DELETE FROM users WHERE user_id = $1',[id]);
        res.status(200).json('User deleted successfully')
    } catch (err) {
        console.log(err.message)
    }
}