import express from "express";

import {getAllNotes, createNote, deleteNote, getNoteById, updateNote} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

// samyakrock11_db_user
// eIkLDQVJUlBay9Lx
// k7bKVe3zdiVPX7lf


// mongodb+srv://samyakrock11_db_user:k7bKVe3zdiVPX7lf@cluster0.3ll8sro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
