const mongoose = require('mongoose');
const Contact = require('../models/Contact');
require('dotenv').config();

async function testContactMessages() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Get all contact messages
    const messages = await Contact.find().sort({ date: -1 });
    
    console.log('\nStored Contact Messages:');
    console.log('----------------------');
    
    if (messages.length === 0) {
      console.log('No messages found in the database');
    } else {
      messages.forEach((msg, index) => {
        console.log(`\nMessage ${index + 1}:`);
        console.log(`Name: ${msg.name}`);
        console.log(`Email: ${msg.email}`);
        console.log(`Subject: ${msg.subject}`);
        console.log(`Message: ${msg.message}`);
        console.log(`Date: ${msg.date}`);
      });
    }
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

testContactMessages(); 