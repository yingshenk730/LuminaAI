import { Schema, model, models, Document } from 'mongoose'

export interface Image extends Document {
  title: string
  transformationType: string
  publicId: string
  secureURL: string
  width?: number
  height?: number
  config?: object
  transformationUrl?: String
  aspectRatio?: string
  color?: string
  prompt?: string
  authot: {
    _id: string
    firstName: string
    lastName: string
  }
  createdAt?: Date
  updatedAt?: Date
}
const ImageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  transformationType: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  secureURL: { type: String, required: true },
  width: Number,
  height: Number,
  config: Object,
  transformationUrl: String,
  aspectRatio: String,
  color: String,
  prompt: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

const Image = models?.Image || model('Image', ImageSchema)
export default Image
