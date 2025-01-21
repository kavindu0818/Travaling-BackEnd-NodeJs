import TravelTips from "../model/TravelTips";


export const travelTips: TravelTips [] = []

export function save_travelTips(newTravelTips: TravelTips) {
    travelTips.push(newTravelTips);
    console.log(travelTips);
}

export function get_travelTips() {
    return travelTips;
}

export function getSelectd_travelTips(id: string) {
    const getTip = travelTips.find(travelTips => travelTips.tips_id === id);

    if (getTip) {
        console.log(`Tip with ID ${id} found.`);
        return getTip;
    } else {
        console.log(`Tip with ID ${id} not found.`);
        return null;
    }
}

export function update_TravelTips(newTravelTips: TravelTips): TravelTips | null {
    const index = travelTips.findIndex(t => t.tips_id === newTravelTips.tips_id);
    if (index !== -1) {
        travelTips[index] = newTravelTips;
        console.log(`Travel Tip with ID ${newTravelTips.tips_id} updated successfully.`);
        return travelTips[index];
    } else {
        console.log(`Travel Tip with ID ${newTravelTips.tips_id} not found.`);
        return null;
    }
}

export function delete_TravelTips(id:string) {
    const index = travelTips.findIndex(travelTips => travelTips.tips_id === id);
    if (index !== -1) {
        travelTips.splice(index, 1);
        console.log(`Travel Tip with ID ${id} deleted successfully.`);
    } else {
        console.log(`Travel Tip with ID ${id} not found.`);
    }
}