const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutModel = new Schema({
  day: { 
      type: Date, 
      required: true, 
      default: Date.now 
  },
  exercise: [{
  type: {
    type: String,
    trim: true,
    required: true
  },

   name: {
    type: String,
    trim: true,
    required: true
  },

  duration: {
    type: Number,
    trim: true,
  },

  weight: {
    type: Number,
    trim: true
  },

  distance: {
    type: Number,
    trim: true
  },

  reps: {
    type: Number,
    trim: true
    
  },
  sets: {
    type: Number,
    trim: true,
  } 
  }]
});

const Workout = mongoose.model("Workout", WorkoutModel);

module.exports = Workout;