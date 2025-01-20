import express = require('express');
import {delete_location, getAllLocations, getSelected_location, save_locations, update_Location} from "../database/LocationData"
import Location from "../model/Location"
const router = express.Router();

router.post("/", (req, res) => {
   try {
       const {loctaion_id,name,address,rating,type,created_at,travel_id } = req.body;
       const location = new Location(loctaion_id,name,address,rating,type,created_at,travel_id);
       const isSaveLocation = save_locations(location)
       res.status(200).send(isSaveLocation);

   }catch (error){
       res.status(500).send({error:"Not Saved LocationDetails"});
   }
})

router.get('/:id', (req, res) => {
    try {
        const {id}  = req.params;
        const isGetLocation = getSelected_location(id)
        res.status(200).json(isGetLocation);
    }catch (error){
        res.status(500).send({error:"Not Get Location"});
    }
})

router.get('/:id/location', (req, res) => {
    try {
        const getLocations = getAllLocations();
        res.status(200).json(getLocations);
    } catch (error){
        res.status(500).send({error:"Failed to get location"});
    }
})

router.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const {loctaion_id,name,address,rating,type,created_at,travel_id } = req.body;
        const location = new Location(loctaion_id,name,address,rating,type,created_at,travel_id);
        const isUpdateLocation = update_Location(location)
        res.status(200).send(isUpdateLocation);

    }catch (error){
        res.status(500).send({error:"Not Saved LocationDetails"});
    }
})

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const isDelete = delete_location(id);
        res.status(200).send(isDelete);
    }catch (error){
        res.status(500).send({error:"Not Deleted LocationDetails"});
    }
})

export default router;