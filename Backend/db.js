const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const getFormattedTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};


const getFormattedDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${day}/${month}/${year}`;
};

const User = new Schema({
    email : { type : String, unique : true },
    password : String,
    firstName : String
});

const Todo = new Schema({
    title : String,
    done : Boolean,
    userId : ObjectId,
    time: {
    type: String,
    default: getFormattedTime
  },
    date: {
    type: String,
    default: getFormattedDate
  }

})

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
    UserModel,
    TodoModel
}