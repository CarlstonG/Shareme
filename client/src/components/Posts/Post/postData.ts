export interface postData {
    _id: string | number | null | undefined;
    title: String;
    messageDescription: String;
    creator: String;
    tags: String;
    selectedUrl: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    likeCount: {
        type: Number;
        default: 0;
    },
    createdAt?:{
        type: String | Date;
    },
    updatedAt?:{ type: String | Date; } | null
}