import { MdDelete } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";

const Read = ({ todos, setTodos }) => {
  const deleteHandler = (id) => {
    const filteredtodo = todos.filter((todo) => todo.id != id);
    setTodos(filteredtodo);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto px-4 md:px-10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-thin">
        Pending <span className="text-red-400">Todos</span>
      </h1>

      <ol className="w-full py-2 space-y-2">
        <AnimatePresence mode="popLayout">
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              layout
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: -20 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              {/* Background red delete area */}
              <div className="absolute inset-0 bg-red-600 rounded-md flex items-center justify-end px-6 z-0">
                <MdDelete size={26} className="text-white" />
              </div>

              {/* Swipe item */}
              <motion.div
                drag="x"
                dragConstraints={{ left: -120, right: 0 }}
                dragElastic={0.2}
                whileDrag={{ scale: 1.03 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -60) {
                    deleteHandler(todo.id);
                  }
                }}
                className="bg-gray-900 select-none px-4 py-3 rounded-md shadow flex justify-between items-center relative z-10"
              >
                <span>{todo.title}</span>
                <MdDelete
                  className="cursor-pointer text-red-400"
                  onClick={() => deleteHandler(todo.id)}
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </ol>
    </div>
  );
};

export default Read;
