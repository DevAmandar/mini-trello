
# 🎯 Kanban Board

A modern, drag-and-drop Kanban board built with React, TypeScript, and Tailwind CSS. Organize your tasks with lists and items, drag them between columns, and everything is automatically saved to your browser.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![dnd-kit](https://img.shields.io/badge/dnd--kit-drag_%26_drop-FF6B6B)
![Zod](https://img.shields.io/badge/Zod-validation-3E67B1?logo=zod&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/devamandar/kanban-board?color=blue)
![GitHub stars](https://img.shields.io/github/stars/devamandar/kanban-board?color=yellow)

<p align="center">
  <a href="https://devamandar.github.io/kanban-board/">Live Demo</a>
</p>

---

## 👤 About the Author

I'm **Mahmood**, a front-end developer passionate about building creative, functional web applications with a strong focus on clean architecture.

- 🌐 **Portfolio:** [https://devamandar.github.io/resume/](https://devamandar.github.io/resume/)
- 🐙 **GitHub:** [@devamandar](https://github.com/devamandar)
- 📧 **Email:** [m.amandar.dev@gmail.com](mailto:m.amandar.dev@gmail.com)

---

## ✨ Features

- 🖱️ **Drag & Drop** — Move items between lists seamlessly using [`@dnd-kit`](https://dndkit.com/)
- 💾 **Auto-save** — All changes are persisted to `localStorage` automatically
- ✅ **Form Validation** — Input validation using [Zod](https://zod.dev/) schemas
- 🎨 **Clean UI** — Styled with Tailwind CSS, smooth animations on add/remove
- 🔔 **Toast Notifications** — Feedback for every action using `react-toastify`
- 📝 **Full CRUD** — Create, read, update, and delete boards, lists, and items
- 📱 **Responsive** — Works on desktop and tablet
- 🧩 **Type-safe** — Full TypeScript coverage with strict mode
- 🎬 **Smooth Animations** — Fade-out and slide animations on deletion

---

## 🚧 Project Status

> **⚠️ This project is actively under development.**
> New features, UI improvements, and refactors are being added regularly.

### 🗺️ Roadmap

- [x] Drag & drop between lists
- [x] Auto-save to `localStorage`
- [x] Form validation with Zod
- [x] Toast notifications
- [ ] 🎨 **UI Improvements** — Refined visuals, better spacing, modern look
- [ ] 📱 **Better Responsiveness** — Full mobile support, touch-friendly drag & drop
- [ ] 🧩 **More User Flexibility** — Customizable boards, themes, and layouts
- [ ] ⚙️ **Improved Management** — Better list/item management, bulk actions, search & filter
- [ ] 🌙 **Dark Mode**
- [ ] 📤 **Export / Import boards as JSON**
- [ ] 🧪 **Unit & integration tests**

Stay tuned — contributions, feedback, and suggestions are welcome! 

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **State Management** | Context API + `useReducer` |
| **Drag & Drop** | `@dnd-kit/react` |
| **Validation** | Zod |
| **Routing** | React Router v7 |
| **Notifications** | React-Toastify |
| **Icons** | React Icons |
| **Persistence** | localStorage |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/devamandar/kanban-board.git

# Navigate into the project
cd kanban-board

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── component/
│   ├── Component/
│   │   ├── Board/              # Main board view
│   │   ├── List/               # List (column) component
│   │   ├── Item/               # Item (card) component
│   │   └── Task/               # Task card component
│   ├── context/                # React contexts
│   │   ├── BoardContext.ts
│   │   └── ActiveItemContext.ts
│   ├── modal/                  # All modals
│   │   ├── Modal.tsx
│   │   ├── CreatItemModal/
│   │   ├── CreatListModal/
│   │   ├── CreateTaskModal/
│   │   ├── EditTaskModal/
│   │   └── EditTitleListModal/
│   ├── provider/               # Context providers
│   │   ├── BoardProvider.tsx
│   │   └── ActiveItemProvider.tsx
│   ├── reducers/               # useReducer logic
│   │   └── ListReducers.tsx
│   ├── schemas/                # Zod validation schemas
│   │   └── title-schema.ts
│   └── Type/                   # TypeScript types
│       ├── board-type.ts
│       ├── list-type.ts
│       └── item-type.ts
├── data/                       # Initial seed data
│   ├── listData.ts
│   └── listDatas.ts
├── drag and drop/              # dnd-kit wrappers
│   ├── drag/DraggableComponent.tsx
│   └── drop/DroppableComponent.tsx
├── layout/                     # Page layouts
│   ├── BoardPage.tsx
│   └── TasksPage.tsx
├── App.tsx
└── main.tsx
```

---

## 🎮 Usage

### Create a Board

1. Click **"Create +"** on the main page
2. Enter a title and description
3. Your new board appears in the grid

### Manage Lists

| Action | How |
|--------|-----|
| **Add List** | Click the ➕ icon in a board header |
| **Rename List** | Click the ✏️ icon next to a list title |
| **Delete List** | Click the 🗑️ icon next to a list title |

### Manage Items

| Action | How |
|--------|-----|
| **Add Item** | Click ➕ inside a list |
| **Move Item** | Drag and drop between lists |
| **Delete Item** | Click the 🗑️ icon on any item |
| **Select Item** | Click on any item to highlight it |

### Navigation

- Click a **task title** to open its board
- Click the **logout icon** to return to the main page

---

## 🔐 Data Persistence

All data is stored in your browser's `localStorage` under the key `boardData`. This means:

- ✅ No sign-up required
- ✅ Data persists between sessions
- ✅ Works offline
- ⚠️ Clearing browser data will erase everything

**To reset your data:** Open DevTools → Application → Local Storage → Delete `boardData` key.

---

## ✅ Form Validation

This project uses **Zod** for schema-based validation:

```typescript
// schemas/title-schema.ts
export const TitleSchema = z
    .string("Title must be string")
    .trim()
    .nonempty("Title cannot be empty")
    .min(3, "Title must be at least 3 characters")
    .max(20, "Title must be at maximum of 20 characters")
```

**Rules:**
- **Title:** 3–20 characters
- **Description:** 3–60 characters
- All inputs are trimmed automatically

Errors are displayed inline beneath each input field.
