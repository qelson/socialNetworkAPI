const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatDate = require('../utils/formatData')
// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 50,
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: currentDate => formatDate(currentDate)   
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
