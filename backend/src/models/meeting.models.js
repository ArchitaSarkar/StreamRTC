import mongoose,{Schema} from "mongoose";

const meetingSchema = new Schema({
   userId:
   {
       type: mongoose.Schema.Types.ObjectId,    
         ref: "User",
         required: true
    },
    meetingCode:
    {
        type: String,
        required: true,
    },
    date:
    {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: true });
const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };