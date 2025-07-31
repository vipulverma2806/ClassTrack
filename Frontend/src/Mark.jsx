import React, { use, useEffect, useState } from "react";
import axios from "axios";

const Mark = () => {
  axios.defaults.withCredentials = true;
  //-------------------mark attendance----------------
  const handleAttend = async (e) => {
    e.preventDefault();
    const courseStudents = dummyData.filter((data) => data.class === course);
    const attendanceArray = courseStudents.map((data) => {
      const { rollNo, ...rest } = data;
      return { ...rest, rollNo, status: isChecked[rollNo.toString()] };
    });
    console.log(attendanceArray);
    try {
      const res = await axios.post(`/api/attendance`, attendanceArray);
      console.log(res);
    } catch (err) {}
    return setIsChecked(!isChecked);
  };

  const [isChecked, setIsChecked] = useState({});
  const [course, setCourse] = useState("");
  const [date, setDate] = useState();
  const [dummyData, setDummyData] = useState([]);

  const getStudents = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/getStudents");
      setDummyData(res.data.default);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="flex justify-center bg-gray-700 flex-1 py-15 items-center">
      <form className=" flex flex-col h-auto bg-gray-100 gap-y-5 px-15 py-8 rounded-xl shadow-gray-100 w-4xl  ">
        <h1 className="font-bold text-center text-4xl">Mark Attendance</h1>
        <div className="flex flex-col gap-y-1 text-xl font-semibold">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            className="w-full p-1 border"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col  text-xl font-semibold gap-y-1">
          <label htmlFor="class">Select Class</label>
          <select
            className="border p-1"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          >
            {" "}
            <option value="">Courses</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BTech">BTech</option>
            <option value="MTech">MTech</option>
          </select>
        </div>
        <div className="text-xl ">
          <ul>
            {course ? (
              <div className="px-4 py-2 font-semibold border-b border-b-gray-500 w-full">
                <span className="mr-3">Roll No.</span>
                <span>Name</span>
              </div>
            ) : (
              ""
            )}

            {dummyData
              .filter((stu) => {
                return stu.class === course;
              })
              .map((stu) => {
                return (
                  <div className="flex gap-y-4 border-b border-b-gray-500   justify-between px-4 py-2">
                    <span>
                      <span className="mr-11">{stu.rollNo}.</span>
                      <span>{stu.name}</span>
                    </span>

                    <div className="flex gap-x-7">
                      <div>
                        {" "}
                        <input
                          className="mr-2"
                          type="checkbox"
                          checked={isChecked[stu.rollNo]}
                          onChange={(e) =>
                            setIsChecked((prev) => ({
                              ...prev,
                              [stu.rollNo]: e.target.checked,
                            }))
                          }
                        />
                        <span>Present</span>
                      </div>

                      <div>
                        <input
                          className="mr-2"
                          type="checkbox"
                          checked={isChecked[stu.rollNo] === false}
                          onChange={(e) =>
                            setIsChecked((prev) => ({
                              ...prev,
                              [stu.rollNo]: !e.target.checked,
                            }))
                          }
                        />
                        <span>Absent</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </ul>
        </div>
        {course && (
          <button
            onClick={handleAttend}
            className="w-1/4 p-1 rounded-2xl bg-gray-500 text-2xl text-white"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Mark;

// [
//     {
//         "class": "MCA",
//         "rollNo": 101,
//         "name": "Amit Singh",
//         "isChecked": {
//             "101": true,
//             "102": false,
//             "103": true,
//             "104": false,
//             "105": true,
//             "106": false
//         }
//     },
//     {
//         "class": "MCA",
//         "rollNo": 102,
//         "name": "Neha Gupta",
//         "isChecked": {
//             "101": true,
//             "102": false,
//             "103": true,
//             "104": false,
//             "105": true,
//             "106": false
//         }
//     },

// ]

// my  array is look like that ho w to convert it like

// [
//     {
//         class: "MCA",
//         rollNo: 101,
//         name: "Amit Singh",
//         Status : true,
//         }
//     ,
//     {
//         class: "MCA",
//         rollNo: 102,
//         name:"Neha Gupta",
//         Status: false,
//         }
// ]
