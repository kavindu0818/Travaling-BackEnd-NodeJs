export default class Chat {
    quaryId: string;
    quaryText: string;
    responseText: string;
    createdAt: Date;
    userId: string;

    constructor(quaryId: string, quaryText: string, responseText: string, createdAt: Date, userId: string) {
        this.quaryId = quaryId;
        this.quaryText = quaryText;
        this.responseText = responseText;
        this.createdAt = createdAt;
        this.userId = userId;
    }
}
