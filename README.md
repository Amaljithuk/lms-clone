# 🎓 Techmindz LMS Clone

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel)

A pixel-perfect, fully responsive frontend clone of the Techmindz Learning Management System (LMS) dashboard. This project was built as a technical assessment for the Software Developer Intern position.

**🚀 Live Demo:** [https://lms-clone-gold.vercel.app](https://lms-clone-gold.vercel.app)

---

## 📋 Assessment Overview

The goal was to replicate the UI layout, navigation flow, and key modules from a provided PDF sample. While a backend was not required, I implemented client-side logic to demonstrate interactivity and state management.

### Key Modules Implemented:
- **Dashboard:** Statistical overview with cards.
- **Profile:** Detailed user profile with complex grid layouts.
- **Courses:** searchable list of active courses.
- **Payments & Funds:** Tables and forms for financial modules.
- **Sessions & Timetable:** Date-specific views and data tables.
- **Feedback (Bonus):** Interactive rating system and history.

---

## ✨ Key Features & Improvements

Beyond the basic requirements, I added several enhancements to improve User Experience (UX):

1.  **📱 Fully Responsive Layout**
    - The sidebar automatically collapses on mobile devices.
    - Implemented a smooth slide-in hamburger menu for smaller screens.
    - Tables are scrollable on mobile to prevent layout breakage.

2.  **🔍 Functional Search**
    - The **Courses** page features a real-time search bar that filters the course list instantly (Client-side filtering).

3.  **🎨 Active State Navigation**
    - The sidebar visually highlights the current active page, improving navigation clarity.

4.  **⭐ Interactive Feedback Page**
    - I designed and built a custom **Feedback & Support** page (not in original PDF) featuring an interactive star rating component and a submission form.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Vercel

---



## 🚀 Getting Started Locally

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Amaljithuk/lms-clone.git
    cd lms-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure
src/
├── app/ # Next.js App Router pages
│ ├── assignments/ # Assignments Page
│ ├── courses/ # Courses Page (w/ Search)
│ ├── feedbacks/ # Feedback Page (Bonus)
│ ├── payments/ # Payments Page
│ ├── profile/ # User Profile Page
│ ├── layout.js # Global Layout (Sidebar + Header Logic)
│ └── page.js # Dashboard (Home)
├── components/
│ ├── Header.js # Top Navigation Bar
│ └── Sidebar.js # Main Navigation Sidebar
└── globals.css # Tailwind directives & Global variables
code Code

    
---

## 👤 Author

**Amaljith U K**
- MCA Student, CUSAT

  
