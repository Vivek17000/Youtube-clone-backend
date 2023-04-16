import express from "express";
import { signup,signin } from "../Controllers/auth.js"

const router = express.Router();

//create a user 
router.post('/signup',signup )

//sign in 
router.post('/signin', signin )

//google authorization
router.post('/google', )



export default router;