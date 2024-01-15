const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  membership_status: { type: Boolean, required: true },
});

UserSchema.virtual("full_name").get(function () {
  return this.first_name + " " + this.last_name;
});