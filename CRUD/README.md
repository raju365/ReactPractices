📝 Todo App — React + Tailwind + Motion iOS Swipe Delete

A clean and modern Todo App built with React + Tailwind CSS + Motion (framer-motion v10 style).
Swipe left to delete like iOS. Super smooth UX.

🚀 Features

✔️ Add todos with instant UI update
✔️ Swipe left to delete (Native iOS feel)
✔️ Click delete icon to remove
✔️ Entry/Exit animation on list items
✔️ Responsive layout (Mobile → Tablet → Desktop)
✔️ Smooth drag physics & motion layout transitions

🛠️ Tech Stack

⚛️ React

🎨 Tailwind CSS

🏃 Motion (motion/react) — Framer Motion v10 API

🆔 nanoid — unique IDs

🔥 react-icons — MdDelete

📦 Installation

Clone project:

git clone your-repo-url
cd your-folder


Install dependencies:

npm install


Start dev server:

npm run dev

📁 Project Structure
src/
 ├─ components/
 │   ├─ Create.jsx   # Input form
 │   └─ Read.jsx     # Todo list + Motion animations
 ├─ App.jsx
 └─ main.jsx

🎯 Core Logic
➕ Create Todo (Create.jsx)

Controlled input

Prevents blank submission

Generates unique id via nanoid

Add todo example:
const newTodo = {
  id: nanoid(),
  title,
  isCompleated: false,
};
setTodos([...todos, newTodo]);


Clears input after submit.

📌 Display & Animate Todos (Read.jsx)
✨ Animation on add / delete

New items fade + scale in

Deleted items scale down & fade out

Motion layout prevents jumps

🔥 Swipe left to delete logic
<motion.div
  drag="x"
  dragConstraints={{ left: -120, right: 0 }}
  onDragEnd={(e, info) => {
    if (info.offset.x < -60) deleteHandler(todo.id);
  }}
>


If user drags left beyond threshold → item auto deletes.

📲 UI / UX
iOS Style Delete Reveal

Background stays 🔴 red

Foreground card moves left

Delete icon revealed behind it

Smooth, familiar interaction.

Responsive Layout

Mobile: stack

Desktop: side-by-side

Clean typography

🧠 App.jsx

Parent component maintains todos state and passes read/write access.

const [todos, setTodos] = useState([
  { id: 1, title: "Learn React", isCompleted: false },
]);

🙌 Future Enhancements

🔹 LocalStorage save
🔹 Toggle complete (checkbox + animation)
🔹 Undo delete (toast)
🔹 Drag to reorder tasks
🔹 Light / Dark theme switcher

💡 Contributing

PRs and ideas are welcome! Make UI sexy 😎
Improve animations, add better gesture limits, refactor state.

❤️ Credits

Built with 💙 by Raju Barman
React + Motion = smoothest UX combo 🔥