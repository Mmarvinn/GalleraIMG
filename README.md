# Image Gallery Project

A modern, responsive image gallery application built with Next.js and Unsplash API.

## 🚀 Features

- Server-side rendering for optimal performance
- Real-time image search
- Dynamic photo details with carousel
- URL synchronization with gallery state
- Favorite images system with local storage
- Responsive grid layout
- Modern UI with Ant Design components

## 🛠 Tech Stack

- **Framework:** Next.js 13+
- **UI Library:** Ant Design
- **Styling:** CSS Modules
- **Image API:** Unsplash
- **State Management:** React Context
- **Data Persistence:** Local Storage
- **Routing:** Next.js App Router

## 🏗 Project Structure

```plaintext
imageGallery/
├── app/                   # Next.js app directory
│   ├── photos/[id]/       # Dynamic photo routes
│   └── favorites/         # Favorites page
├── components/            # React components
├── styles/                # CSS modules
├── api/                   # API integration
├── services/              # Utility functions
└── public/                # Static assets
```

## 🚦 Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_access_key_here
```

4. Run the development server:

```bash
npm run dev
```

## 💻 Development

- **Starting dev server:**

```bash
npm run dev
```

- **Building for production:**

```bash
npm run build
```

- **Running production build:**

```bash
npm start
```

## 🎨 Components

- **Gallery:** Main component for displaying images
- **SearchBar:** Real-time search functionality with Ant Design
- **FavoriteBadge:** Favorites system integration
- **PhotoDetails:** Dynamic photo view with carousel navigation
- **Header:** Navigation and branding component

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid layout
- Adaptive image sizing
- Touch-friendly carousel
- Dynamic UI elements
- Fluid typography

## 🔑 Key Features

1. **Image Search:**

   - Real-time search functionality
   - Integration with Unsplash API
   - Error handling
   - Loading states

2. **Photo Details:**

   - Dynamic routing with URL synchronization
   - Carousel navigation between photos
   - Detailed photo information

3. **Favorites System:**

   - Local storage persistence
   - Add/remove functionality
   - Synchronized state management
   - Favorites page with dedicated gallery

4. **Performance:**
   - Server-side rendering
   - Image optimization
   - Lazy loading
   - Route prefetching
   - Optimized carousel transitions

## 📄 License

MIT License

## 👤 Author

Anatolii Tserkunyk
