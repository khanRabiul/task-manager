import { useState } from "react";

const TaskModal = () => {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: "",
    priority: "",
    isFavourite: false,
  });

  return (
    <section className="inset-0 flex justify-center h-screen items-center bg-gray-700 bg-opacity-80">
      <div className="bg-slate-800 rounded-md p-8 w-2/3">
        <form>
          <div className="mb-10">
            <h2 className="text-center text-3xl font-semibold ">
              Create your tasks
            </h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-4">
              <label htmlFor="title" className="text-gray-300 text-xl block">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full rounded-sm px-2 py-2 text-slate-900 text-xl"
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="description"
                className="text-gray-300 text-xl block"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="6"
                className="w-full rounded-sm px-2 py-2 text-slate-900 text-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="space-y-4">
                <label htmlFor="tags" className="text-gray-300 text-xl block">
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  className="w-full rounded-sm px-2 py-2 text-slate-900 text-xl"
                />
              </div>
              <div className="space-y-4">
              <label htmlFor="priority" className="text-gray-300 text-xl block">
                  Priority
                </label>
                <select name="priority" id="priority" className="w-full rounded-sm px-2 py-2 text-slate-900 text-xl">
                    <option value="Low">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TaskModal;
