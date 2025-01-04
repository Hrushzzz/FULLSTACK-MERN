import mongoose, { model, Schema } from "mongoose";

const theatreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false
    },
    owner: {
        // Here owner is referred to a objectId in "users" collection. 
        // So, we access other collection/table reference like this ::
      type: mongoose.Schema.Types.ObjectId,   
      ref: "users",   // passing the reference collection in "ref".
      required: true,
    },
  },
  { timestamps: true }
);

const Theatre = model("theatres", theatreSchema);

export default Theatre;