const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: [true, 'Parent name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  studentName: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  classApplyingFor: {
    type: String,
    required: [true, 'Class applying for is required'],
    enum: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
           'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[6-9]\d{9}$/, 'Please enter a valid Indian mobile number']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    lowercase: true
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    default: 'pending'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Admission', admissionSchema);
