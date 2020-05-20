import {model, Schema} from 'mongoose';

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  route: {
    type: Schema.Types.ObjectId,
    ref: 'Route'
  },
  date: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  }
})

const Ticket = model('ticket', schema);

export default Ticket;
