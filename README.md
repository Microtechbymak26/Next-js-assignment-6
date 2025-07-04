# Online Learning Platform

A modern, responsive web application for discovering and enrolling in online courses, built with **Next.js 14**, **React 18**, and **TailwindCSS 3**. This project demonstrates a clean, scalable architecture and beautiful UI for an e-learning platform.

---

## 🚀 Features

- **Hero Section:** Eye-catching introduction with call-to-action buttons and a hero image.
- **Navigation Bar:** Modern, responsive navbar with contact info, social links, and navigation menu.
- **Courses by Category:** Browse courses by categories like Design, Marketing, Development, Business, and more.
- **Achievements:** Platform stats (courses, mentors, students, recognition) displayed in a modern layout.
- **Programs:** Highlighted courses with images, ratings, and enroll buttons.
- **Teams:** Meet the team section with member profiles and social links.
- **Testimonials:** Customer reviews with ratings and user images.
- **Footer:** Newsletter subscription, quick links, and social media icons.
- **Fully Responsive:** Optimized for all devices (desktop, tablet, mobile).
- **Modern UI:** Built with TailwindCSS and custom design tokens for a unique look.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [TailwindCSS 3](https://tailwindcss.com/) + [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/)
- **Image Optimization:** [next/image](https://nextjs.org/docs/pages/api-reference/components/image)
- **TypeScript:** For type safety and better developer experience

---

## 📁 Project Structure

```
my-app/
├── public/image/         # All images and logos
├── src/app/components/   # All React components
│   ├── Achievements/
│   ├── Courses/
│   ├── Footer/
│   ├── Hero 1/
│   ├── Navigation/
│   ├── Programs/
│   ├── Teams/
│   ├── Testimonial/
│   └── home.tsx          # Main homepage composition
├── src/app/layout.tsx    # App layout
├── src/app/page.tsx      # Entry point
├── src/app/globals.css   # Global styles
├── tailwind.config.ts    # TailwindCSS config
├── next.config.mjs       # Next.js config
└── ...
```

---

## 🖥️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Customization & Development

- Edit components in `src/app/components/` to update sections (Hero, Courses, Achievements, etc).
- Update images in `public/image/` for branding.
- TailwindCSS config is in `tailwind.config.ts` for design tokens and breakpoints.
- All pages are fully responsive and mobile-friendly.

---

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js 14.

---

## 🤝 Credits

- UI inspired by modern e-learning platforms.
- Built with ❤️ using Next.js, React, and TailwindCSS.
- Built with ❤️ by Mak Developer
---

## 📄 License

This project is for educational/demo purposes.
