# 🎓 Harbour.Space Scholarship Page – Zeptolab Apprenticeship

Responsive React app for Harbour.Space’s **Data Science Apprenticeship** with **Zeptolab**.

---

## ⚙️ Tech Stack

- **React + Vite**
- **Tailwind CSS**
- **Redux Toolkit**
- **Framer Motion**
- **Lucide Icons**
- **Harbour.Space API**

---

## 📁 Architecture

- **src** – main source folder
  - **assets** – static assets (images, fonts, etc.)
  - **components** – reusable components
  - **pages** – page components
  - **store** – Redux store and slices


---

## 🌐 API Integration

- Endpoint:  
  `https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab`
- Data fetched with `createAsyncThunk`
- Global access via Redux store

---

## ✅ Features

- Fully responsive
- Dynamic API data
- Animated FAQ with filters
- Reusable components
- Sticky summary bar

---
## 🔄 Git Workflow

- **Git Flow** used for feature branches and merging strategy:
    - `main` → production-ready
    - `develop` → ongoing integration
    - `feature/*` → per component/section

---

## ✅ Unit Testing

The project includes a unit test suite using **Jest**:
This suite tests:

The initial state of the scholarshipSlice

The fulfilled state of the fetchScholarship async action

The rejected state (error handling)


```bash
npm run test
```
## 🚀 Run Project

```bash
npm install
npm run dev
```