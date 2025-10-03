# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with elegant design across all devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Interactive Sections**: 
  - Hero section with call-to-action buttons
  - About Me with highlights and quick facts
  - Projects showcase with filtering and project cards
  - Skills section with animated progress bars
  - Resume timeline with experience and education
  - Contact form with validation
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML

## Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization Guide

### 1. Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal details (name, title, contact info)
- About me description and highlights
- Skills and proficiency levels
- Project information
- Work experience and education

### 2. Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `public/index.html` and `tailwind.config.js`
- **Layout**: Adjust spacing and layout in individual components

### 3. Adding New Projects

Add new project objects to the `projects` array in `src/data/portfolioData.js`:

```javascript
{
  id: 4,
  title: "Your Project Name",
  description: "Project description...",
  image: "project-image-url",
  techStack: ["React", "Node.js", "MongoDB"],
  liveLink: "https://your-project.com",
  githubLink: "https://github.com/username/project",
  featured: true
}
```

### 4. Contact Form Integration

The contact form currently shows a success message. To integrate with a backend:

1. Replace the form submission logic in `src/components/Contact.js`
2. Add your API endpoint or email service integration
3. Handle form validation and error states

### 5. Resume Download

To add a downloadable resume:

1. Add your resume PDF to the `public` folder
2. Update the download button in `src/components/Resume.js`:

```javascript
<a 
  href="/your-resume.pdf" 
  download="Your-Name-Resume.pdf"
  className="btn-primary inline-flex items-center"
>
  Download PDF
</a>
```

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills section
│   ├── Resume.js       # Resume section
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── data/
│   └── portfolioData.js # All content data
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## Performance Tips

1. **Image Optimization**: Use optimized images (WebP format recommended)
2. **Lazy Loading**: Implement lazy loading for images
3. **Code Splitting**: Use React.lazy() for component-level code splitting
4. **Bundle Analysis**: Use `npm run build` and analyze bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)