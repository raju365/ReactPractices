import { Motion, spring } from "motion/react";
import { useState } from "react";
// import { MdDelete } from "react-icons/md";


export default function SwipeTasks({ todo, onDelete }) {
  const [x, setX] = useState(0);

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // delete threshold
    if (offset > 120 || velocity > 800) {
      // right delete
      spring({
        from: x,
        to: 500,
        stiffness: 180,
        damping: 20,
        onUpdate: latest => setX(latest),
      });
      setTimeout(() => onDelete(todo.id), 200);
    }
    else if (offset < -120 || velocity < -800) {
      // left delete
      spring({
        from: x,
        to: -500,
        stiffness: 180,
        damping: 20,
        onUpdate: latest => setX(latest),
      });
      setTimeout(() => onDelete(todo.id), 200);
    } 
    else {
      // reset
      spring({
        from: x,
        to: 0,
        stiffness: 250,
        damping: 15,
        onUpdate: latest => setX(latest),
      });
    }
  };

  return (
    <Motion.div
      drag="x"
      dragSnapToOrigin
      dragElastic={0.2}
      style={{ x }}
      onDragEnd={handleDragEnd}
      className="bg-gray-700 px-4 py-3 rounded-lg text-white shadow-lg cursor-grab active:cursor-grabbing select-none"
      whileDrag={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {todo.title}
    </Motion.div>
  );
}
