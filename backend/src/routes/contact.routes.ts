import {Router} from "express";
import type { Request, Response } from "express";
import {pool} from "../db/db.js";

export const contactRouter:Router = Router();

contactRouter.post('/contact',async(req:Request, res:Response) => {
    try {
        const {email, mobile, message} = req.body || {};
        if(!email || !mobile || !message) {
            return res.status(400).json({
                success:false,
                message:"Email, mobile and message are required"
            });
        }

        // Here we write the query for insertion later:
        const query = `INSERT INTO contact_info (email, mobile, message) VALUES ($1, $2, $3)
                RETURNING id, email, mobile, message,created_at;
                `
        // Passing array of values:
        const values = [email,mobile,message];
        // Result query implemented:
        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: result.rows[0]
        })
    } catch (error: any) {
        console.error("Contact API Error:", error.message);
        res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
        });
    }
})