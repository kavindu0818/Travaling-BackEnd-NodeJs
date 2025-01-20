import Location from "../model/Location"
import {chat} from "./ChatData";

export const locations: Location[] = []

export function save_locations(newLocations: Location) {
    locations.push(newLocations)

    console.log(locations)
}

export function getSelected_location(id: string) {

    const getLocation = locations.find(locations =>locations.loctaion_id === id);

    if (getLocation) {
        console.log(`Location with ID ${id} found.`);
        return getLocation;
    } else {
        console.log(`Location with ID ${id} not found.`);
        return null;
    }
}

export function getAllLocations(){
    return locations;
}

export function update_Location(newUpdateLocation: Location) {
    const index = locations.findIndex(locations => locations.loctaion_id === newUpdateLocation.loctaion_id);
    if (index !== -1) {
        locations[index] = newUpdateLocation;
        console.log(`Location with ID ${newUpdateLocation.loctaion_id} updated successfully.`);
    } else {
        console.log(`Location with ID ${newUpdateLocation.loctaion_id} not found.`);
    }
}

export function delete_location(id: string) {
    const index = locations.findIndex(locations => locations.loctaion_id === id);
    if (index !== -1) {
        locations.splice(index, 1);
        console.log(`Location with ID ${id} deleted successfully.`);
    } else {
        console.log(`Location with ID ${id} not found.`);
    }
}