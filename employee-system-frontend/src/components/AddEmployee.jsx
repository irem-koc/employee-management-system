const AddEmployee = () => {
  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="name"
          >
            First Name
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 p-2 outline-none"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 p-2 outline-none"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            className="h-10 w-96 border mt-2 p-2 outline-none"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button className="rounded text-white  font-semibold bg-green-400 py-2 px-6 hover:bg-green-700">
            Save
          </button>
          <button className="rounded text-white  font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
