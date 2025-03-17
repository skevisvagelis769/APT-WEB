import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    dir: String
});
const Image = mongoose.model('Image', ImageSchema);
export default Image;
