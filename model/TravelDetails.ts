export default class TravelDetails {
    travel_id: string;
    trip_type: string;
    start_date: Date;
    end_date: Date;
    created_at: string;
    destination: string;
    user_id: string;

    constructor(travel_id: string, trip_type: string, start_date: Date, end_date: Date, created_at: string, destination: string, user_id: string) {
        this.travel_id = travel_id;
        this.trip_type = trip_type;
        this.start_date = start_date;
        this.end_date = end_date;
        this.created_at = created_at;
        this.destination = destination;
        this.user_id = user_id;
    }

}