const TaskBoard = () => {
  return (
    <main className="mt-48">
      <h1 className="text-center text-3xl font-semibold capitalize">
        Add your task
      </h1>

      <div className="container mx-auto">
        <div className="w-4/3 bg-slate-600 rounded-lg py-10 px-6">
          <table className=" w-full ">
            <thead className="bg-slate-700 rounded-md">
              <tr className="space-x-4">
                <th className="p-3 text-lg">Task</th>
                <th className="p-3 text-lg">Description</th>
                <th className="p-3 text-lg">Tags</th>
                <th className="p-3 text-lg">Priority</th>
                <th className="p-3 text-lg">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 text-lg"></td>
                <td className="p-3 text-lg"></td>
                <td className="p-3 text-lg"></td>
                <td className="p-3 text-lg"></td>
                <td className="p-3 text-lg"></td>
              </tr>
            </tbody>
          </table>
          {/* Buttons  */}
          <div>
          <button className="px-12 py-2 bg-green-800 rounded-md font-semibold text-lg mr-8">
            Add Task
          </button>
          <button className="px-12 py-2 bg-red-600 rounded-md font-semibold text-lg">
            Delete All
          </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskBoard;
