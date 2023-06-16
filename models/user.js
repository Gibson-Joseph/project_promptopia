import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;

// The "models" Object is provided by the Mongoose Library and stored all the registered models.
// If a modal named "User" already exists in the "modals" object, it assign that existing modal to the "User" variable.
// This prevants redefining the model and ensures that the existing modal is reused.

// If a modal named "User" does not exist in the "modals" object, the "modal" function from Mongoose is called to create a new modal
// The newly created modal is then assigned to the "User" variable.
