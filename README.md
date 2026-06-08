# 🎉 Birthday Wishes Website

A beautiful, interactive 3-page birthday celebration website built with HTML, CSS, and JavaScript. Perfect for creating a memorable and heartfelt birthday experience.

## 🌟 Features

### Page 1: Landing/Welcome Page
- **Countdown Timer**: Displays days, hours, minutes, and seconds until the birthday
- **Unlock Button**: Click to unlock the celebration and reveal the next page
- **Confetti Animation**: Celebratory confetti burst when unlocking
- **Floating Balloons**: Animated balloons floating across the background

### Page 2: Memory Lane
- **Interactive Timeline**: Beautiful milestone timeline with photos
- **Gift Box**: Clickable gift box that opens to reveal a special message
- **Surprise Message**: Heartfelt message pops up when gift is unwrapped
- **Responsive Layout**: Perfect on all screen sizes

### Page 3: Birthday Wishes
- **Wishes Grid**: Six beautiful wish cards with different messages
- **Heartfelt Letter**: A special, personalized birthday letter
- **Confetti Celebration**: Automatic confetti animation on page load
- **Elegant Design**: Clean, modern design with smooth animations

## 🎨 Design Features

- **Smooth CSS Animations**:
  - Floating balloons
  - Falling confetti
  - Bouncing gift box
  - Hover effects on cards
  - Smooth transitions

- **Background Music Toggle**: 
  - Play/pause button in the top-right corner
  - Music enabled across all pages
  - Smooth audio controls

- **Fully Responsive**:
  - Beautiful on mobile phones
  - Perfect on tablets
  - Stunning on desktop displays
  - Optimized touch interactions

## 📁 Project Structure

```
birthday-wishes-website/
├── index.html              # Landing page
├── memories.html           # Memory lane page
├── wishes.html             # Birthday wishes page
├── css/
│   └── style.css           # All styles and animations
├── js/
│   └── script.js           # All JavaScript functionality
├── assets/
│   ├── music/
│   │   └── birthday-music.mp3  # Background music
│   ├── images/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   └── photo4.jpg
│   └── fonts/
│       └── (optional custom fonts)
└── README.md               # This file
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Trisha227/birthday-wish-website.git
cd birthday-wish-website
```

### 2. Add Your Custom Content

#### Update Birthday Date (in js/script.js)
Find this line and change the date to the actual birthday:
```javascript
const birthdayDate = new Date('2026-12-25T00:00:00').getTime(); // Change to actual birthday
```

#### Add Timeline Photos
Replace the placeholder images in `assets/images/` with your own:
- `photo1.jpg` - The beginning
- `photo2.jpg` - Growing up
- `photo3.jpg` - Adventures
- `photo4.jpg` - Today

#### Add Background Music
Place your birthday music file at `assets/music/birthday-music.mp3`

#### Customize Messages
Edit the wishes and messages in the HTML files to personalize them.

### 3. Deploy

You can deploy this website for free using:
- **GitHub Pages**: Push to main branch and enable GitHub Pages in settings
- **Netlify**: Connect your GitHub repo
- **Vercel**: Connect your GitHub repo
- **Any web hosting service**: Upload files via FTP

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎵 Adding Music

1. Find a royalty-free birthday music from sites like:
   - [Free Music Archive](https://freemusicarchive.org/)
   - [Pixabay Music](https://pixabay.com/music/)
   - [YouTube Audio Library](https://www.youtube.com/audiolibrary/)

2. Download as MP3 and place in `assets/music/birthday-music.mp3`

3. The music will automatically play when user clicks the music button

## ✨ Customization Tips

### Change Colors
Edit the color values in `css/style.css`:
- Primary gradient: `#667eea` and `#764ba2`
- Accent colors: `#FF6B6B`, `#FFD93D`, `#6BCB77`, `#4D96FF`, `#FF88DC`

### Adjust Animation Speed
Modify animation duration values:
- Balloon float: `8s` → `10s` (slower)
- Confetti fall: `3s` → `5s` (slower)
- Countdown separator: `2s` → `3s` (slower)

### Add More Wishes
Duplicate the `.wish-card` div in `wishes.html` and customize the content.

## 📄 License

Free to use for personal or commercial purposes.

## 🎂 Have Fun!

Make someone's birthday special with this beautiful website. Feel free to customize it with your own photos, messages, and music!

---

**Made with ❤️ for celebrating special people!**
