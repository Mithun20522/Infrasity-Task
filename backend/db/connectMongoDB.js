import mongoose from "mongoose"

export const connectDb = (url) => {
    mongoose.connect(url)
    .then(() => console.log(`MongoDB Connected.`))
    .catch((err) => console.log(err))
}