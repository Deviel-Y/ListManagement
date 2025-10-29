# 📝 List Management

A lightweight and minimal **React-based list management app** that lets you **create, edit, delete, and sort** your lists with a clean UI and responsive design.  
Built purely with React (no backend) and powered by **Zustand**, **React Hook Form**, and **TailwindCSS**.

---

## 🚀 Features

- ➕ Add any kind of list item
- ✏️ Edit or delete existing items
- 📅 Sort lists by creation date
- ⚡ Real-time updates using Zustand store
- 🎨 Clean UI with TailwindCSS
- 🔥 Toast notifications for actions
- 🧩 Modular structure using **subcomponent strategy**

---

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **TypeScript**
- **TailwindCSS**
- **Zustand** (for state management)
- **React Hook Form** + **Zod** (for validation)
- **Motion** (for animations)
- **React Icons** + **React Hot Toast**

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Deviel-Y/ListManagement.git

# Navigate into the project directory
cd ListManagement

# Install dependencies
npm install

# Start the development server
npm run dev


```

🖥️ Local Development

Your app will be running at:  
👉 **http://localhost:5173**

---

## 📁 Project Structure

src/
├── components/ # All React components
│ ├── Table/ # Table UI + subcomponents
│ ├── Modal/ # Modal UI + subcomponents
│ └── ...
│
├── utils/ # Reusable utility functions
├── libs/ # Library-related functions
└── store/ # Zustand store

Each component directory follows a **subcomponent strategy** for cleaner organization and reusability.

---

## 🧠 How It Works

- The app uses **Zustand** for managing list states globally.
- **React Hook Form** and **Zod** handle form validation.
- Each list item stores a **title**, **subtitle**, and **creation date**.
- Lists can be **sorted by date** dynamically.

---

## 🧩 Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Run the project in development mode  |
| `npm run build`   | Build the project for production     |
| `npm run lint`    | Run ESLint for code quality          |
| `npm run preview` | Preview the production build locally |

---

## 🧰 Dependencies

See the full list in **`package.json`**.  
Main ones include:

---

## 🪪 License

This project is released under the **MIT License**.

---

## 👨‍💻 Author

**Daniel (Deviel-Y)**  
[GitHub Profile](https://github.com/Deviel-Y)
