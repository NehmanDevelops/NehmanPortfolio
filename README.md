# Jekyll & Hyde Portfolio

A stunning, highly interactive personal portfolio website showcasing dual expertise in software development and sales. Built with Next.js, featuring a dramatic split-screen design with immersive animations and personality-based navigation.

## 🎭 Concept

**"One mind, two masters: Code by day, closes by night."**

This portfolio presents a "Jekyll & Hyde" split personality theme:
- **Developer Side**: Dark mode with matrix rain effects, terminal-style UI, neon green accents
- **Sales Side**: Luxurious bright mode with gold/red accents, confetti animations, bold typography
- **Interactive Switch**: Dramatic transformation between the two personalities

## ✨ Features

- **Split-Screen Landing Page**: Choose between Developer and Sales sides
- **Dramatic Transitions**: Full-page animations when switching personalities
- **Matrix Rain Effect**: Animated code rain on Developer side
- **Confetti Animation**: Celebratory animations on Sales side
- **Interactive Components**: Hover effects, cursor trails, and micro-interactions
- **Responsive Design**: Fully responsive across all devices
- **Modern Tech Stack**: Next.js 14, React, Framer Motion, Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 3d-react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Main page with split-screen logic
│   └── globals.css         # Global styles and animations
├── components/
│   ├── SplitScreen.jsx     # Split-screen landing component
│   ├── PersonalitySwitch.jsx # Interactive switch button
│   ├── DeveloperSide.jsx   # Developer personality view
│   ├── SalesSide.jsx       # Sales personality view
│   ├── MatrixRain.jsx      # Matrix rain animation
│   ├── Confetti.jsx        # Confetti animation
│   ├── CursorEffect.jsx    # Custom cursor effects
│   └── sections/
│       ├── DeveloperAbout.jsx
│       ├── DeveloperProjects.jsx
│       ├── DeveloperSkills.jsx
│       ├── DeveloperContact.jsx
│       ├── SalesAbout.jsx
│       ├── SalesProjects.jsx
│       ├── SalesSkills.jsx
│       └── SalesContact.jsx
├── public/                 # Static assets
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Developer Side**: Edit components in `components/sections/Developer*.jsx`
2. **Sales Side**: Edit components in `components/sections/Sales*.jsx`

### Colors & Styling

Modify `tailwind.config.js` to customize:
- `dev-green`: Developer side accent color
- `sales-gold`: Sales side accent color
- `sales-red`: Sales side secondary color

### Content

Update the following with your information:
- Projects/Deals in respective section components
- Skills and technologies
- Contact information
- Social media links
- Statistics and achievements

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live at `your-project.vercel.app`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Environment Variables

If you need to add environment variables (e.g., for contact forms), create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js (optional, for future enhancements)
- **Type Safety**: TypeScript (optional)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or inquiries, please use the contact forms in the portfolio.

---

**Built with ❤️ and a split personality**
