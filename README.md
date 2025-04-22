# Portfolio Website

A modern portfolio website built with React.js and Node.js, featuring a contact form with MongoDB integration.

## Features

- Responsive design
- Smooth scrolling navigation
- Project showcase
- Contact form with MongoDB backend
- Skills and experience sections
- Social media integration

## Tech Stack

- Frontend: React.js, Styled Components, Framer Motion
- Backend: Node.js, Express.js
- Database: MongoDB
- Deployment: Render/Heroku (backend), Netlify/Vercel (frontend)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/HitarthVaghela/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
- Create a `.env` file in the server directory
- Add your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Run the development servers:
```bash
# Run backend server (from server directory)
npm start

# Run frontend development server (from client directory)
npm start
```

## Deployment

### Backend Deployment (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set environment variables:
   - MONGO_URI
   - NODE_ENV=production
4. Deploy

### Frontend Deployment (Netlify)
1. Create a new site on Netlify
2. Connect your GitHub repository
3. Set build settings:
   - Build command: `cd client && npm install && npm run build`
   - Publish directory: `client/build`
4. Set environment variables if needed
5. Deploy

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

## 🔗 Website Features

- 🌐 **Home Page** – A brief intro about me and my interests.
- 💻 **Projects** – A display of the work I've done with short descriptions and links to repositories.
- 🧠 **Skills** – Technologies and tools I'm proficient in.
- 📄 **Resume** – Option to view/download my resume.
- 📞 **Contact** – A simple way to reach out via email or social links.

---
