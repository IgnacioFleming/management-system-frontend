# 📈 Business Manager - Frontend

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![License](https://img.shields.io/badge/license-ISC-blue)](#)
[![React](https://img.shields.io/badge/Frontend-React-blue)](#)
[![Vite](https://img.shields.io/badge/Bundler-Vite-8A2BE2)](#)

Welcome to the **Business Manager Frontend**, a responsive and modular web application to manage products, clients, and sales. Built with React and styled with PrimeReact components for a professional and intuitive user experience.

---

## 📊 Technologies Used

- **Framework**: React.js
- **Bundler**: Vite
- **Routing**: React Router DOM
- **UI Library**: PrimeReact + PrimeFlex + PrimeIcons
- **Form Management**: Formik + Yup (validation)
- **Charting**: Chart.js
- **Alerts**: SweetAlert2
- **Excel Handling**: XLSX library
- **Environment Variables**: Vite Meta Env
- **Testing**: Jest + React Testing Library

---

## 🚀 Key Features

- User authentication flow integrated with backend API.
- Product, client, and sales management interface.
- Dashboard with dynamic charts using Chart.js.
- Form handling with validation powered by Formik and Yup.
- Data export to Excel files.
- Responsive design with PrimeFlex.
- Modular and scalable project architecture.
- Clean and consistent code style enforced by ESLint and StandardJS.

---

## ⚙️ How to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/IgnacioFleming/management-system-frontend.git
cd management-system-frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure the environment:**

Create a `.env` file at the project root with the following:

```ini
Copiar
Editar
VITE_API_BASE_URL=http://localhost:8080
```

(Make sure this URL matches the backend server URL.)

4. **Start the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```bash
src/
├── components/     # Reusable UI components
├── contexts/       # Context API providers
├── helpers/        # Utility functions
├── hooks/          # Custom React hooks
├── layouts/        # Layout-level components
├── pages/          # Page-level components
├── schemas/        # For form data validation with Yup
├── sections/       # Section-level components
├── services/       # API request services
└── main.jsx        # Application entry point
```

## 🌐 Deployment

The app is configured for deployment through Vercel, Netlify, or any static site hosting that supports React + Vite.

## 👨‍💻 Author

Developed by Ignacio Fleming
