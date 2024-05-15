import mongoose from "mongoose";

const messagesCollection = "messages";

const messagesSchema = new mongoose.Schema({
    messages: {
    type: Array,
    default: [
      {
        messages: String,
      },
    ],
  },
});

const messagesModel = mongoose.model(messagesCollection, messagesSchema);

export default messagesModel;
