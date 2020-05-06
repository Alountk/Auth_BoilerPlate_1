const mongoose = require('mongoose');

const defaultConfig = {
    type: String,
    required: true,
    trim: true,
  };

const userSchema = mongoose.Schema({
    username:{...defaultConfig,unique:true},
    email:{...defaultConfig,unique:true},
    password:defaultConfig,
},{timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

module.exports = mongoose.model('User', userSchema);