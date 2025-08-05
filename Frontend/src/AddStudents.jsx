import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AddStudents = () => {
  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    class: "",
  });
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/addstudents", {
        name: form.name.trim(),
        rollNo: form.rollNo,
        class: form.class,
      });
      setForm({
        name: "",
        rollNo: "",
        class: "",
      });
      toast.success("Student Added Successfully");
    } catch (err) {
      console.log(err);
    }

    // console.log(form);
  };
  return (
    <div className="flex justify-center bg-gray-700 flex-1 py-15 items-center">
      <form
        onSubmit={handleAdd}
        className=" flex flex-col h-auto bg-gray-100 gap-y-5 px-15 py-8 rounded-xl shadow-gray-100 w-4xl"
      >
        <h1 className="font-bold text-center text-4xl">Add Students</h1>
        <div className="flex flex-col  text-xl font-semibold gap-y-1">
          <label htmlFor="name">Name</label>
          <input
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="border p-2"
            type="text"
            id="name"
          />
        </div>
        <div className="flex flex-col  text-xl font-semibold gap-y-1">
          <label htmlFor="rollNo">Roll No.</label>
          <input
            value={form.rollNo}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                rollNo: e.target.value.trim(),
              }))
            }
            className="border p-2"
            type="number"
            id="rollNo"
          />
        </div>
        <div className="flex flex-col  text-xl font-semibold gap-y-1">
          <label htmlFor="class">Select Class</label>
          <select
            id="class"
            className="border p-2"
            value={form.class}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                class: e.target.value,
              }))
            }
          >
            <option value="">Courses</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BTech">BTech</option>
            <option value="MTech">MTech</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-1/4 p-2 mt-3 rounded-2xl bg-gray-500 text-2xl text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudents;
