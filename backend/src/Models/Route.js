import {model, Schema} from 'mongoose';

const schema = new Schema({
  area: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  }
})

const Route = model('route', schema);

export default Route;
