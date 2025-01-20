export default class Location {
    loctaion_id: string;
    name: string;
    address: string;
    rating: Number;
    type: string;
    created_at: Date;
    travel_id: string;

    constructor(loctaion_id: string, name: string, address: string, rating: Number, type: string, created_at: Date, travel_id: string ) {
        this.loctaion_id = loctaion_id;
        this.name = name;
        this.address = address;
        this.rating = Number(address);
        this.type = address;
        this.created_at = created_at;
        this.loctaion_id = loctaion_id;
        this.travel_id = travel_id;
    }
}