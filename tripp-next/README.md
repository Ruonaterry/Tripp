# Tripp - Nigerian Real Estate Platform

A modern, AI-powered real estate platform for buying, selling, renting, and investing in properties across Nigeria, secured via escrow with neighborhood insights and B2B capabilities.

## 🏠 Overview

Tripp is a comprehensive real estate platform that combines traditional property listings with modern technology:

- **AI-Powered Valuation**: Up-to-date market signals and comparable sales
- **Escrow Protection**: Secure transactions with trusted third-party holding
- **Neighborhood Insights**: Safety ratings, school quality, and transit information
- **B2B Layer**: Tools for real estate agencies and investors
- **Interactive Search**: Advanced filtering and map integration
- **User Property Uploads**: Direct image uploads from devices with drag & drop

## 🚀 Features

### Core Functionality
- **Property Listings**: 50+ properties across major Nigerian cities
- **Advanced Search**: Filter by location, price, bedrooms, and more
- **Property Details**: Comprehensive property information with agent contact
- **Interactive Map**: Visual property locations (MapLibre integration)
- **Responsive Design**: Works on desktop, tablet, and mobile
- **User Property Uploads**: Add new properties with image uploads

### Premium Features
- **AI Valuation**: Market analysis and price recommendations
- **Escrow Services**: Secure payment processing
- **Neighborhood Analytics**: Safety, schools, and amenities ratings
- **B2B Tools**: Agency management and investor dashboards

### User Experience
- **Dark Theme**: Modern, professional interface
- **Real-time Updates**: Live property data and market insights
- **Agent Communication**: Direct messaging with property agents
- **Save Properties**: Bookmark favorite listings
- **File Upload**: Drag & drop image uploads from desktop/mobile

## 🆕 Latest Updates

### ✅ Recently Added Features
- **File Upload System**: Users can now upload property images directly from their devices
- **Drag & Drop Interface**: Intuitive image upload with visual feedback
- **Mobile Upload Support**: Camera and gallery access on mobile devices
- **Image Preview**: Live preview of uploaded images before publishing
- **localStorage Integration**: User-added properties persist across sessions
- **SSR Compatibility**: Fixed localStorage errors for proper server-side rendering

### 📸 Image Upload Features
- **Multiple Upload Methods**: Drag & drop, file browser, or image URL
- **File Type Validation**: Supports JPG, PNG, GIF, WebP formats
- **Base64 Encoding**: Images stored as data URLs for immediate use
- **Error Handling**: Graceful fallbacks for invalid files
- **Responsive Design**: Works seamlessly on all device sizes

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **React Hooks**: State management and effects

### Key Libraries
- **MapLibre GL JS**: Interactive mapping
- **Next.js Image**: Optimized image loading
- **React Router**: Client-side navigation
- **FileReader API**: Client-side file processing

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📁 Project Structure

```
tripp-next/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── listings/           # Property listings
│   │   ├── property/[id]/      # Individual property pages
│   │   ├── upload/             # Post new listings (with file upload)
│   │   ├── insights/           # Neighborhood insights
│   │   ├── escrow/             # Escrow services
│   │   ├── valuation/          # AI valuation
│   │   └── auth/               # Authentication pages
│   ├── components/             # Reusable components
│   │   ├── ImageWithFallback.tsx
│   │   └── Map.tsx
│   └── data/                   # Static data
│       └── listings.ts         # Property listings + localStorage functions
├── public/                     # Static assets
│   └── house.svg              # Fallback property image
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🏙️ Property Locations

The platform features properties across major Nigerian cities:

### Lagos (Commercial Capital)
- **Victoria Island**: ₦450M - Premium waterfront properties
- **Banana Island**: ₦550M - Luxury island community
- **Lekki Phase 1**: ₦320M - Upscale residential
- **Ikoyi**: ₦280M - Diplomatic district
- **Surulere, Yaba, Gbagada**: Mid-range options

### Abuja (Federal Capital)
- **Maitama**: ₦380M - Diplomatic zone
- **Asokoro**: ₦290M - Government officials
- **Wuse 2, Gwarinpa, Kubwa**: Various price points

### Other Major Cities
- **Port Harcourt**: Oil & gas hub properties
- **Kano**: Northern commercial center
- **Kaduna**: Northern capital
- **Jos**: Plateau State
- **Ibadan**: Oyo State capital
- **Enugu**: Eastern hub
- **Calabar**: Cross River
- **Uyo**: Akwa Ibom
- **Benin City**: Edo State

## 💰 Pricing Structure

Properties range from ₦110M to ₦550M across different locations and property types:

- **Luxury Properties**: ₦400M+ (Victoria Island, Banana Island)
- **Premium Properties**: ₦200M-400M (Lekki, Maitama, Asokoro)
- **Mid-range Properties**: ₦150M-200M (Surulere, GRA areas)
- **Affordable Properties**: ₦110M-150M (Suburban areas)

## 🎨 Design System

### Color Palette
- **Primary**: Deep slate/navy backgrounds (#0f1420)
- **Secondary**: Light slate text (#e2e8f0)
- **Accent**: Blue highlights (#3b82f6)
- **Cards**: Dark card backgrounds (#161d26)

### Typography
- **Primary Font**: Arial, Helvetica, sans-serif
- **Headings**: Bold, large scale
- **Body Text**: Clean, readable

### Components
- **Cards**: Rounded corners, subtle borders
- **Buttons**: Hover effects, consistent styling
- **Forms**: Clean inputs with focus states
- **Modals**: Overlay dialogs for interactions
- **Upload Areas**: Drag & drop zones with visual feedback

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tripp-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Next.js Configuration
The app is configured in `next.config.ts` to allow external images from Unsplash for property photos.

### Tailwind CSS
Custom configuration in `tailwind.config.ts` with dark theme support and custom color variables.

### Environment Variables
Create a `.env.local` file for any API keys or configuration:
```env
NEXT_PUBLIC_MAP_TOKEN=your_map_token_here
```

## 📱 Usage Guide

### For Homebuyers
1. **Browse Properties**: Visit the homepage to see featured listings
2. **Search & Filter**: Use the search bar and filters to find specific properties
3. **View Details**: Click "View" on any property card for detailed information
4. **Contact Agent**: Use the "Message Agent" button to inquire about properties
5. **Save Properties**: Click "Save" to bookmark interesting properties

### For Property Sellers
1. **Post Listings**: Navigate to `/upload` to add new properties
2. **Upload Images**: Use drag & drop or file browser to upload property photos
3. **Fill Details**: Complete all property information and description
4. **Preview**: See your listing before publishing
5. **Publish**: Your property appears immediately in the listings

### For Agents
1. **Post Listings**: Use the upload page to add new properties
2. **Manage Inquiries**: Respond to buyer messages through the platform
3. **Access B2B Tools**: Use agency-specific features for client management

### For Investors
1. **Market Analysis**: Access AI-powered valuation tools
2. **Neighborhood Insights**: Review safety and amenity ratings
3. **Investment Dashboard**: Track portfolio performance

## 📸 Image Upload Guide

### Uploading Property Images
1. **Navigate to Upload Page**: Click "Post Listing" from homepage
2. **Choose Upload Method**:
   - **Drag & Drop**: Drag image files directly onto the upload area
   - **File Browser**: Click "Choose File" to browse device files
   - **Image URL**: Enter a valid image URL (alternative method)
3. **Preview**: See your image preview before publishing
4. **Remove/Replace**: Use the "Remove" button to change images
5. **Publish**: Your property with uploaded images goes live immediately

### Supported Formats
- **File Types**: JPG, PNG, GIF, WebP
- **Size Limit**: 5MB per image
- **Quality**: High-resolution images recommended

## 🔒 Security Features

- **Escrow Protection**: Secure payment processing
- **Data Encryption**: All sensitive data is encrypted
- **Secure Authentication**: Protected user accounts
- **Privacy Controls**: User data protection
- **File Validation**: Secure image upload processing

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📊 Performance

- **Image Optimization**: Next.js Image component for fast loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for fast loading
- **CDN Ready**: Optimized for content delivery networks
- **SSR Compatible**: Proper server-side rendering with localStorage safety

## 🐛 Known Issues & Solutions

### localStorage Errors (Fixed ✅)
- **Issue**: `localStorage is not defined` during SSR
- **Solution**: Added browser environment checks
- **Status**: Resolved - works on both server and client

### File Upload Compatibility
- **Mobile**: Works on all modern mobile browsers
- **Desktop**: Full drag & drop support
- **Fallback**: Image URL input for compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: support@tripp.ng
- **Phone**: +234 XXX XXX XXXX
- **Website**: https://tripp.ng

## 🔮 Future Roadmap

### Phase 2 Features
- **Mobile App**: iOS and Android applications
- **Virtual Tours**: 360° property walkthroughs
- **Mortgage Calculator**: Integrated financing tools
- **Property Alerts**: Email notifications for new listings
- **Multiple Image Uploads**: Gallery support for properties

### Phase 3 Features
- **Blockchain Integration**: Smart contracts for transactions
- **AR Property Viewing**: Augmented reality property exploration
- **International Listings**: Properties outside Nigeria
- **Advanced Analytics**: Market trend analysis
- **Cloud Storage**: Server-side image storage and CDN

## 📍 File Location

**README.md is located at:**
```
C:\Users\eeter\Trip\tripp-next\README.md
```

---

**Built with ❤️ for the Nigerian real estate market**
