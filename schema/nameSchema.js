import mongoose from "mongoose";

const nameSchema = mongoose.Schema;
const contactList = new nameSchema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Name = mongoose.model("contactlist", contactList);

export default Name;
