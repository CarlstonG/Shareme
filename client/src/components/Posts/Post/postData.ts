export interface postData {
    title: String;
    messageDescription: String;
    creator: String;
    tags: String;
    selectedUrl: String;
    likeCount: {
        type: Number;
        default: 0;
    },
    createdAt:{
        type: String | Date;
    },
}