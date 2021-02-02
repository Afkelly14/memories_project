import mongoose from 'mongoose';

//specify what post needs to have
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

//turn Schema into model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;