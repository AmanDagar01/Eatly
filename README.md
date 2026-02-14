# Eatly - Food Delivery Platform

## 📱 Project Overview

**Eatly** is a modern food delivery application that connects food lovers with food partners (restaurants/delivery services). The platform features a TikTok-style feed for browsing food items, user authentication, favorites management, and a comprehensive food partner dashboard.

## ✨ Features

### For Users
- 🔐 **User Authentication** - Secure login and registration
- 🎬 **Reel Feed** - TikTok-style infinite scrolling food content
- ❤️ **Like Functionality** - Like and interact with food items
- 💾 **Save for Later** - Save favorite food items
- 📱 **Responsive Mobile Design** - Bottom navigation for easy access
- 🏠 **Home & Saved Sections** - Quick access to feeds and saved items

### For Food Partners
- 🔐 **Partner Authentication** - Dedicated login and registration
- 🍲 **Create Food Items** - Add and manage food listings
- 👤 **Partner Profile** - Manage business profile and offerings
- 📊 **Dashboard** - Overview of all food items

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.x
- **Database**: MongoDB (via Mongoose 8.x)
- **Authentication**: JWT & bcryptjs
- **File Storage**: ImageKit
- **Additional**: CORS, Cookie Parser, Multer (file uploads)

### Frontend
- **Framework**: React 19.x with Vite
- **Styling**: CSS (Custom stylesheets)
- **Routing**: React Router v7.x
- **HTTP Client**: Axios
- **Linting**: ESLint

## 📁 Project Structure

```
Eatly/
├── backend/                    # Express.js server
│   ├── src/
│   │   ├── app.js             # Express app configuration
│   │   ├── server.js          # Server entry point
│   │   ├── controllers/       # Business logic
│   │   ├── routes/            # API endpoints
│   │   ├── models/            # MongoDB schemas
│   │   ├── middlewares/       # Auth & custom middleware
│   │   ├── services/          # Utilities (storage, etc.)
│   │   └── db/                # Database connection
│   ├── package.json
│   └── .env                   # Environment variables
│
├── frontend/                   # React + Vite application
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── routes/            # Routing configuration
│   │   ├── styles/            # CSS stylesheets
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/                # Static assets
│   ├── package.json
│   └── vite.config.js
│
└── videos/                     # Sample video content
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create or update `.env` file:
   ```properties
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   
   The server will run on `http://localhost:3000` (or your configured port)

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📡 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Food Routes
- `GET /api/food` - Get all food items
- `GET /api/food/:id` - Get specific food item
- `POST /api/food/like` - Like a food item
- `GET /api/food/likes` - Get user's liked items
- `POST /api/food/save` - Save a food item
- `GET /api/food/saved` - Get user's saved items

### Food Partner Routes
- `POST /api/food-partner/register` - Partner registration
- `POST /api/food-partner/login` - Partner login
- `POST /api/food-partner/create` - Create new food item
- `GET /api/food-partner/items` - Get partner's food items
- `GET /api/food-partner/profile` - Get partner profile

## 🔑 Key Features

### Authentication System
- JWT-based authentication for secure API access
- Separate auth flows for users and food partners
- Encrypted passwords using bcryptjs

### Database Models
- **User** - User account information
- **FoodPartner** - Restaurant/delivery service profiles
- **Food** - Food item details
- **Likes** - User likes tracking
- **Save** - User saved items tracking

### File Management
- Image uploads via Multer
- Cloud storage integration with ImageKit

## 🎨 UI Components

- **BottomNav** - Navigation bar for mobile
- **ReelFeed** - Main feed component with reel-style content
- **Auth Components** - Login and registration pages for users and partners
- **Profile** - Partner business profile page
- **CreateFood** - Food item creation form

## 📱 Styling

The project uses custom CSS with dedicated stylesheets:
- `theme.css` - Global theme and colors
- `auth-shared.css` - Authentication pages styling
- `reels.css` - Reel feed styling
- `profile.css` - Profile page styling
- `bottom-nav.css` - Navigation styling
- `create-food.css` - Create food form styling

## 🔒 Security Features

- CORS configuration for frontend-backend communication
- JWT token-based authentication
- Password encryption with bcryptjs
- Secure cookie handling with cookie-parser

## 📦 Dependencies Overview

**Backend:**
- express: Web framework
- mongoose: MongoDB ODM
- jsonwebtoken: JWT authentication
- bcryptjs: Password hashing
- multer: File uploads
- imagekit: Cloud storage
- cors: Cross-origin requests
- dotenv: Environment variables

**Frontend:**
- react: UI library
- react-router-dom: Client-side routing
- axios: HTTP client
- vite: Build tool

## 🚧 Development

### Running Tests
Currently, no tests are configured. To add tests:
```bash
npm install --save-dev jest @testing-library/react
```

### Linting
```bash
cd frontend
npm run lint
```

## 📝 Environment Variables

**Backend (.env file)**
```properties
JWT_SECRET=your_secret_key_for_jwt
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
PORT=3000 (optional, defaults to 3000)
```

### Environment Variables Explanation

| Variable | Description | Example |
|----------|-------------|---------|
| `JWT_SECRET` | Secret key for signing JWT tokens | `your-secret-key-here` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:password@cluster.mongodb.net/eatly` |
| `IMAGEKIT_PUBLIC_KEY` | ImageKit public key for file uploads | `public_key_xxx` |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key for server authentication | `private_key_xxx` |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint for serving images | `https://ik.imagekit.io/your_id` |
| `PORT` | Server port (optional) | `3000` |

To get started:
1. Copy `.env.example` to `.env` in the backend folder
2. Fill in all the required values
3. Never commit `.env` to version control

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request


## 👤 Author

Created by Aman Dagar

## 🆘 Troubleshooting

### Backend connection issues
- Verify MongoDB URI is correct
- Check if MongoDB Atlas network allows your IP
- Ensure JWT_SECRET is set in .env

### Frontend build errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf dist && npm run build`

### CORS errors
- Ensure frontend URL matches CORS origin in backend (currently http://localhost:5173)
- Check that credentials: true is set for authentication

## 🚀 Future Enhancements

- Payment integration
- Real-time order tracking
- Push notifications
- Analytics dashboard
- Review and rating system
- Advanced search and filters
