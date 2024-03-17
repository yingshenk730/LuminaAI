import { Schema, model, Document, models } from 'mongoose'

export interface User extends Document {
  clerkId: string
  email: string
  userName: string
  photo: string
  firstName?: string
  lastName?: string
  planId?: number
  creditBalance?: number
}

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
})

const User = models?.User || model('User', UserSchema)
export default User
