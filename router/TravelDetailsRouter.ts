import express = require("express");
import TravelDetails from "../model/TravelDetails";
import {
    delete_TravelDetails,
    getAll_TravelDetails, getUniq_TravelDetails,
    save_TravelDetails,
    update_TravelDetails
} from "../database/TrvalDetailsData";
import {getUsers} from "../database/UserData";
import {getAllChats} from "../database/ChatData";

const router = express.Router();

router.post("/", (req, res) => {

    try {
        const {travel_id,trip_type,start_date, end_date,created_at,destination,user_id} = req.body;
        const newTravelDetails = new TravelDetails(travel_id,trip_type,start_date, end_date,created_at,destination,user_id)
        const newTravel = save_TravelDetails(newTravelDetails);
        res.status(200).send(newTravel);
    } catch (error){
        res.status(500).send({error:"Not Saved TravelDetails"});
    }
})

router.get('/', (req, res) => {

    try {
        const get_travelDetails = getAll_TravelDetails();
        res.status(200).json(get_travelDetails);
    }catch (error){
        res.status(500).send({error:"Not Get TravelDetails"});

    }
})

router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
      const {id} = req.params;
      const getuniq_trvelDetails = getUniq_TravelDetails(id);
      res.status(200).json(getuniq_trvelDetails);
  }catch (error){
      res.status(500).send({error:"Not Get TravelDetails"});
  }

})

router.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const {travel_id,trip_type,start_date, end_date,created_at,destination,user_id} = req.body;
        const newTravelDetails = new TravelDetails(travel_id,trip_type,start_date, end_date,created_at,destination,user_id)
        const newTravel = update_TravelDetails(newTravelDetails);
        res.status(200).send(newTravel);
    } catch (error){
        res.status(500).send({error:"Not Saved TravelDetails"});
    }
})

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const isDelete = delete_TravelDetails(id);
        res.status(200).send(isDelete);
    }catch (error){
        res.status(500).send({error:"Not Delete TravelDetails"});
    }
})



export default router;