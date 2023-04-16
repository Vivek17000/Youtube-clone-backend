import express from "express";
import { verifyToken } from "../verifyToken.js";
import {update, deleteUser} from "../Controllers/user.js"
import { getUser, subscribe } from "../Controllers/user.js";






const router = express.Router();

//update user
router.put("/:id", verifyToken, update)

//delete user
router.delete("/:id",verifyToken, deleteUser)

//get a user
router.put("/find/:id", getUser)

//subscribe a user
router.put("/sub/:id",verifyToken, subscribe)


//unsubscribe a user
router.put("/find/:id",verifyToken, update)

//like a video

//dislike a video

export default router;