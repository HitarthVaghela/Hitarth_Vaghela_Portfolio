const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Project = require('../models/Project');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Read projects data
const projectsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/projects.json'), 'utf-8')
);

// Seed function
const seedDB = async () => {
  try {
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Previous projects deleted');

    // Insert new projects
    await Project.insertMany(projectsData);
    console.log('Projects successfully seeded!');
    
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

// Run seed function
seedDB(); 