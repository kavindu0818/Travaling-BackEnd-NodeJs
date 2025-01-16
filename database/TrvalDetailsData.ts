import TravelDetails from "../model/TravelDetails";
import {chat} from "./ChatData";

export const travelDetails:TravelDetails []=[]

export function save_TravelDetails(newTravelDetails:TravelDetails) {
    travelDetails.push(newTravelDetails)

    console.log(travelDetails)
    // console.log(newTravelDetails.trip_type)
}

export function getAll_TravelDetails() {
    return travelDetails;
}

export function getUniq_TravelDetails(id: string) {
    const user = travelDetails.find(trvalDetails => trvalDetails.travel_id === id);
    if (user) {
        console.log(`Travel Details with ID ${id} found.`);
        return travelDetails;
    } else {
        console.log(`Travel Details with ID ${id} not found.`);
        return null;
    }
}

export function update_TravelDetails(newTravelDetails:TravelDetails) {
    const index = travelDetails.findIndex(trvalDetails => trvalDetails.travel_id === newTravelDetails.travel_id)
    if (index !== -1) {
        travelDetails[index] = newTravelDetails;
        console.log(`Travel Details with ID ${newTravelDetails.travel_id} updated successfully.`);
    } else {
        console.log(`Travel Details with ID ${newTravelDetails.travel_id} not found.`);
    }
}

export function delete_TravelDetails(id:string) {
    const index = travelDetails.findIndex(trvalDetails => trvalDetails.travel_id === id);
    if (index !== -1) {
        travelDetails.splice(index, 1);
        console.log(`Travel Details with ID ${id} deleted successfully.`);
    } else {
        console.log(`Travel Details with ID ${id} not found.`);
    }

}