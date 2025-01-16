import express = require("express");
import User from '../model/User'
import {addUser, deleteUser, getUniqUser, getUsers, updateUser} from "../database/UserData";

const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
    const {id,name, email, password,preferences,createdAt } = req.body;
    const newUser = new User(id,name,email,password,preferences,createdAt);
    addUser(newUser)
});


router.get('/', (req, res) => {
    try {
        const customers = getUsers();
        res.status(200).json(customers);
    }catch (error){
        res.status(500).send({error:"Failed to get user"});
    }

});

router.put("/:id", async (req: express.Request, res: express.Response) => {
    const {id,name, email, password,preferences,createdAt } = req.body;
    const newUser = new User(id,name,email,password,preferences,createdAt);

    const isUpdate =updateUser(newUser);
    res.status(200).json(isUpdate);
})

router.delete("/:id", async (req: express.Request, res: express.Response) => {
    const {id} = req.params;
    const isDelete =deleteUser(id);
    res.status(200).json(isDelete);
})

router.get("/:id", async (req: express.Request, res: express.Response) => {
    const {id} = req.params;
    const getUser = getUniqUser(id);
    res.status(200).json(getUser);

})

export default router;