import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Mark = () => {
  axios.defaults.withCredentials = true;
  const [isChecked, setIsChecked] = useState({});
  const [course, setCourse] = useState("");
  const [date, setDate] = useState();
  const [dummyData, setDummyData] = useState([]);

  //-------------------mark attendance----------------
  const handleAttend = async (e) => {
    e.preventDefault();
    const courseStudents = dummyData.filter((data) => data.class === course);
    const attendanceArray = courseStudents.map((data) => {
      const { rollNo, ...rest } = data;

      return {
        ...rest,
        rollNo,
        status: !!isChecked[rollNo.toString()],
        date: date,
      };
    });
    console.log(attendanceArray);
    try {
      const res = await axios.post(`http://localhost:4000/api/attendance`, attendanceArray);
      console.log(res);
    } catch (err) {console.log(err)}
    setCourse('');
    toast.success("Attendance Marked")
    return setIsChecked({});
  };

  //-----------get student data---------------------
  const getStudents = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/getStudents");
      console.log(res.data)
      setDummyData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="flex justify-center bg-gray-700 flex-1 py-15 items-center">
      <form
        onSubmit={handleAttend}
        className=" flex flex-col h-auto bg-gray-100 gap-y-5 px-15 py-8 rounded-xl shadow-gray-100 w-4xl  "
      >
        <h1 className="font-bold text-center text-4xl">Mark Attendance</h1>
        <div className="flex flex-col gap-y-1 text-xl font-semibold">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            className="w-full p-1 border"
            required
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
          <div>
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
                  <div
                    key={[stu.rollNo]}
                    className="flex gap-y-4 border-b border-b-gray-500   justify-between px-4 py-2"
                  >
                    <span>
                      <span className="mr-11">{stu.rollNo}.</span>
                      <span>{stu.name}</span>
                    </span>

                    <div className="flex gap-x-7">
                      <div>
                       
                        <input
                          className="mr-2"
                          type="checkbox"
                          checked={!!isChecked[stu.rollNo]}
                          onChange={(e) => {
                            setIsChecked((prev) => ({
                              ...prev,
                              [stu.rollNo]: !prev[stu.rollNo],
                            }));
                          }}
                        />
                        <span>Present</span>
                      </div>

                  
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {course && (
          <button
            type="submit"
            className="w-1/4 p-1 hover:bg-gray-900 rounded-2xl bg-gray-700 text-2xl text-white"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Mark;
