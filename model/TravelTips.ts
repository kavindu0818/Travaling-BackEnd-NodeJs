export default class TravelTips {
    tips_id:string;
    tips_Content:string;
    createdAt:string;
    travel_id:string;

    constructor(tips_id:string,tips_Content:string,createdAt:string, travel_id:string) {
        this.tips_id = tips_id;
        this.tips_Content = tips_Content;
        this.createdAt = createdAt;
        this.travel_id = travel_id;
    }

}