# 📝 Advanced Task Manager App

A feature-rich **Task Management App** built with **Next.js (App Router)**, supporting drag-and-drop, persistent storage, theming, and responsive UI — without Tailwind.

---

## 🚀 Features

### ✅ Basic Functionality
- Add new tasks
- Mark tasks as complete or undo
- Delete tasks
- Filter by All / Completed / Pending
- Persist tasks using `localStorage`

### 💡 React Features
- Custom Hook: `useLocalStorage` for syncing tasks
- `useContext` + `useMemo` for task and theme management
- Performance optimizations with `React.memo`, `useCallback`, `useMemo`
- Form validation to prevent empty task submission

### 🎨 UI Enhancements
- **Dark/Light Mode Toggle** with `ThemeContext`
- Responsive layout (mobile-first)
- Smooth CSS transitions
- Drag-and-drop support with `react-beautiful-dnd`

---

## 🛠️ Tech Stack

- ⚙️ Framework: [Next.js 13+ (App Router)](https://nextjs.org/docs/app)
- 🎨 Styling: Custom CSS (No Tailwind)
- 🧠 State Management: React Context API
- 🔄 Drag-and-Drop: [`react-beautiful-dnd`](https://github.com/atlassian/react-beautiful-dnd)

---

## 📦 Installation

```bash
git clone https://github.com/shivamsinghal160/advanced-task-manager-nextjs.git
cd advanced-task-manager-nextjs
npm install
