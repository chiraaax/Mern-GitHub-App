import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        default: "", // Add a default value if needed
    },
    profileUrl: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,        
    },
    likedProfiles: {
        type: Array,
        default: [],
    },
    likedBy:[
        {
            username:{
                type: String,
                required: true,
            },
            avatarUrl: {
                type: String,
                required: true,
            },
            likedDate: {
                type: Date,
                default: Date.now,
            }
        }
    ]
   
},{timestamps: true});
//createdAt, updatedAt

const User = mongoose.model("User", userSchema);

export default User;
