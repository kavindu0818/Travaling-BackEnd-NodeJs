import express = require("express");
import Chat from "../model/Chat";
import {delete_Chat, getAllChats, getChat, saveChat, updateChat} from "../database/ChatData";

const router = express.Router();

router.post("/", (req, res) => {

    try {
        const{quaryId, quaryText,  responseText, createdAt,userId} = req.body;
        const newChat = new Chat(quaryId,quaryText,responseText,createdAt,userId);
        const isSave = saveChat(newChat);
        res.status(200).json(isSave);
    }catch (error){
        res.status(500).send({error:"Not Saved Chat"});
    }

})

router.get('/', (req, res) => {

    try {
        const isGetChats = getAllChats();
        res.status(200).json(isGetChats);
    }catch (error){
        res.status(500).send({error:"Not Get Chats"});

    }
})

router.get("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const chat = getChat(id);
        res.status(200).json(chat);
    }catch (error){
        res.status(500).send({error:"Not Get Chat"});
    }

})

router.put("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const{quaryId, quaryText,  responseText, createdAt,userId} = req.body;
        const newChat = new Chat(quaryId,quaryText,responseText,createdAt,userId);
        const isSave = updateChat(newChat);
        res.status(200).json(isSave);
    }catch (error){
        res.status(500).send({error:"Not Saved Chat"});
    }

})

router.delete('/:id',(req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const deletedChat = delete_Chat(id);
        res.status(200).send(deletedChat)
    }catch (error){
        res.status(500).send({error:"Not Deleted Chat"});
    }
})

export default router;