import React, { use, useEffect, useState } from "react";
import axios from "axios";

const Status = () => {
  axios.defaults.withCredentials = true;
  const [course, setCourse] = useState();
  const [report,setReport] = useState();
  
const dummyData = []
  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/status/${course}`);
        console.log(res);
        setReport(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  getStudents();
  }, [course]);

  return (
    <div className="flex justify-center bg-gray-700 flex-1 py-15 items-center">
      <div className=" flex flex-col h-auto bg-gray-100 gap-y-5 px-15 py-8 rounded-xl shadow-gray-100 w-4xl  ">
        <div className="flex flex-col  text-xl font-semibold gap-y-1">
          <h1 className="font-bold text-center text-4xl">
            Class wise Attendance Percentage
          </h1>
          <label htmlFor="class">Select Class</label>
          <select
            className="border p-1"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          >
            <option value="">Courses</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BTech">BTech</option>
            <option value="MTech">MTech</option>
          </select>
        </div>

        <div className="text-xl ">
          <div>
            {course ? (
              <div className="px-4 py-2 flex justify-between font-semibold border-b border-b-gray-500 w-full">
                <span className="w-35 text-center">Roll No.</span>
                <span className="w-35 text-center">Name</span>
                <span className="w-35 text-center">Attendance %</span>
              </div>
            ) : (
              ""
            )}

            {dummyData
              .filter((stu) => {
                return stu.course === course;
              })
              .map((stu) => {
                return (
                  <div
                    key={[stu.rollNo]}
                    className="flex gap-y-4 border-b border-b-gray-500 justify-between px-4 py-2"
                  >
                    <span className="w-35 text-center">{stu.rollNo}.</span>
                    <span className="w-35 text-center">{stu.name}</span>
                    <span className="w-35 text-center">{stu.attPercent}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
