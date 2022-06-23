import mongoose from "mongoose";

interface IStory {
  _id: mongoose.Types.ObjectId;
  code: string;
  title: string;
  pages?: string;
}

interface storyModelInterface extends mongoose.Model<IStory> {
  build(attr: IStory): StoryDoc;
}

interface StoryDoc extends mongoose.Document {
  code: string;
  title: string;
  pages: string;
}

const storySchema = new mongoose.Schema({
  code: { type: String, required: true },
  title: { type: String, required: true },
  pages: { type: String, required: false },
});

storySchema.statics.build = (attr: IStory) => {
  return new Story(attr);
};

const Story = mongoose.model<StoryDoc, storyModelInterface>(
  "Story",
  storySchema
);

export default Story;
