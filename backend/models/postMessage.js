import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    messageDescription: String,
    creator: String,
    tags:[String],
    selectedUrl: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },

});

const PostMesage = mongoose.model('PostMessage', postSchema);
export default PostMesage;