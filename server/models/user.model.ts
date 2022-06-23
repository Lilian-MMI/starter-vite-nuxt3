import mongoose from "mongoose";
import Book from "./book.model";

interface IUser {
  _id: mongoose.Types.ObjectId;
  username: string;
  password: string;
  books: typeof Book[];
}

interface userModelInterface extends mongoose.Model<IUser> {
  build(attr: IUser): UserDoc;
}

interface UserDoc extends mongoose.Document {
  username: string;
  password: string;
  books: typeof Book[];
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  books: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  },
});

userSchema.statics.build = (attr: IUser) => {
  return new User(attr);
};

const User = mongoose.model<UserDoc, userModelInterface>("User", userSchema);

export default User;
