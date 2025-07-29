import React, { useState } from "react";
import axios from "axios";
import dummyData from "./DummyData";
const Mark = () => {
  const handleCheck = async () => {
    try {
      const res = await axios.post("/api/attend");
    } catch (err) {}
    return setIsChecked(!isChecked);
  };

  const [isChecked, setIsChecked] = useState({});
  const stu = { name: "gfdfgd" };

  return (
    <div className="flex justify-center bg-gray-700 min-h flex-1 overflow-hidden items-center">
      <form className=" flex flex-col h-auto bg-gray-100 gap-y-5 p-5 rounded-xl shadow-gray-100 w-1/2  ">
        <h1 className="font-bold text-3xl">Mark Attendance</h1>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="date">Select Date</label>
          <input type="date" className="w-full p-1 border" />
        </div>
        <div className="flex flex-col gay-y-1">
          <label htmlFor="class">Select Class</label>
          <select className="border p-1">
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BTech">BTech</option>
            <option value="MTech">MTech</option>
          </select>
        </div>
        <div>
          <ul>
            {dummyData.map((stu) => {
              return (
                <div className="flex gap-y-4">
                  <span>{stu.name}</span>
                  <span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) =>
                        setIsChecked((prev) => ({
                          ...prev,
                          [stu.name]: e.target.checked,
                        }))
                      }
                    />
                    Present
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) =>
                        setIsChecked((prev) => ({
                          ...prev,
                          [stu.name]: e.target.checked,
                        }))
                      }
                    />
                    Absent
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Mark;
