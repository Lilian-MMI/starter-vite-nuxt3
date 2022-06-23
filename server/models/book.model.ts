import mongoose from "mongoose";
import Story from "./story.model";

interface IBook {
  _id: mongoose.Types.ObjectId;
  title: string;
  publication: string;
  cover?: string;
  releaseDate?: string;
  price?: string;
  pages?: string;
  number: number;
  stories: typeof Story[];
}

interface bookModelInterface extends mongoose.Model<IBook> {
  build(attr: IBook): BookDoc;
}

interface BookDoc extends mongoose.Document {
  title: string;
  publication: string;
  cover: string;
  releaseDate: string;
  pages: string;
  price: string;
  number: number;
  stories: typeof Story[];
}

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  publication: { type: String, required: true },
  cover: { type: String, required: false },
  releaseDate: { type: String, required: false },
  pages: { type: String, required: false },
  price: { type: String, required: false },
  number: { type: Number, required: true },
  stories: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
    required: false,
  },
});

bookSchema.statics.build = (attr: IBook) => {
  return new Book(attr);
};

const Book = mongoose.model<BookDoc, bookModelInterface>("Book", bookSchema);

export default Book;
