
import { pool } from "../db.js";

//get all events controller
    export const getEvents = async(req,res)=>{
        try {
            const events = await pool.query('SELECT * FROM events');
            if(!events){
                res.status(404).json('No events found')
            }
            res.status(200).json(events.rows);
        } catch (err) {
            console.log(err.message)
        }
    }


//get an event controller

    export const getEvent = async(req,res)=>{
        try {
            const {id} = req.params;
            const event = await pool.query('SELECT * FROM events  WHERE event_id = $1',[id]);
            if(!event){
                res.status(404).json('Event not found')
            }
            res.status(200).json(event.rows[0]);
            
        } catch (err) {
            console.log(err.message)
            
        }
    }

//create an event controller
    export const createEvent = async(req,res)=>{
        try {
            const {event_name,description,start_date,end_date} = req.body;
            const newEvent = await pool.query('INSERT INTO events (event_name,description,start_date,end_date) VALUES($1,$2,$3,$4',[event_name,description,start_date,end_date]);
            
            res.status(201).json(newEvent.rows[0]);
            
        } catch (err) {
            console.log(err.message)
        }
    }    

 //update an event controller
 
    export const updateEvent = async(req,res)=>{
        try {
            const {id} = req.params;
            const {event_name,description,start_date,end_date} = req.body;
            const editEvent = await pool.query('UPDATE events SET event_name = $1, description = $2, start_date = $3, end_date = $4 WHER event_id = $5 RETURNING *',[event_name,description,start_date,end_date,id]);
            if(!editEvent){
                res.status(404).json('Event not found')
            }
            res.status(200).json('Event updated successfully');
            res.json(editEvent);
            
        } catch (err) {
            console.log(err.message)
        }
    }

//delete an event controller
    export const deleteEvent = async (req,res)=>{
        try {
            const {id} = req.params;
            const removeEvent = await pool.query('DELETE FROM events WHERE event_id = $1',[id]);
            if(!removeEvent){
                res.status(404).json('Event not found')
            }
        } catch (err) {
            console.log(err.message)
        }
    }    