import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    messageDescription: String,
    creator: String,
    tags: String,
     selectedUrl: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
  

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