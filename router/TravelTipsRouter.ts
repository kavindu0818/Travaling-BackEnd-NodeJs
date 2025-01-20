import express = require("express");
import TravelTips from "../model/TravelTips";
import {
    delete_TravelTips,
    get_travelTips,
    getSelectd_travelTips,
    save_travelTips,
    update_TravelTips
} from "../database/TravelTipsData";

const router = express.Router();

router.post("/", (req, res ) => {
    try {
        const {tips_id, tips_Content, createdAt,travel_id} = req.body;
        const newTravelTips = new TravelTips(tips_id,tips_Content, createdAt,travel_id);
        const newTips = save_travelTips(newTravelTips);
        res.status(200).send(newTips);
    } catch (error){
        res.status(500).send({error:"Not Saved TravelTips"});
    }
})

router.get("/", async (req: express.Request, res: express.Response) => {
    try {
        const get_tips = get_travelTips();
        res.status(200).json(get_tips);
    }catch (error){
        res.status(500).send({error:"Not Get TravelTips"});

    }
})

router.get("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const getSelect_tips = getSelectd_travelTips(id);
        res.status(200).json(getSelect_tips);
    }catch (error){
        res.status(500).send({error:"Not Get TravelTip"});
    }
})

router.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const {tips_id, tips_Content, createdAt, travel_id} = req.body;

        // if (!tips_id || !tips_Content || !createdAt || !travel_id) {
        //     return res.status(400).send({ error: "All fields are required." });
        // }

        const newTravelTips = new TravelTips(tips_id, tips_Content, createdAt, travel_id);
        const updatedTips = update_TravelTips(newTravelTips);

        if (updatedTips) {
            res.status(200).send(updatedTips);
        } else {
            res.status(404).send({error: "Travel Tip not found."});
        }
    }catch (error){
        res.status(500).send({error:"Not Get TravelTip"});
    }
    }
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send({ error: "Failed to update Travel Tip." });
    // }
);

router.delete("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const isDelete = delete_TravelTips(id);
        res.status(200).send(isDelete);
    }catch (error){
        res.status(500).send({error:"Not Delete TravelTips"});
    }
})

export default router;