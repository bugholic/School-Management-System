import Announcements from "@/components/Announcements";
import { BigCalendar } from "@/components/BigCalendar";
import Performamce from "@/components/Performamce";
import Image from "next/image";
import Link from "next/link";

const SingleStudentsPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* {left} */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Info Card */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3 ">
              <Image
                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={144}
                height={144}
                className="max-w-36 max-h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Jack Dreqwen</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 gap-2 flex items-center">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 gap-2 flex items-center">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 gap-2 flex items-center">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 gap-2 flex items-center">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards*/}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lesson</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="font-semibold">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* {right} */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-lamaSkyLight"
              href={`/list/lessons?classId=${"2"}`}
            >
              Student&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaPurpleLight"
              href={`/list/teachers?classId=${2}`}
            >
              Student&apos;s Teachers
            </Link>
            <Link
              className="p-3 rounded-md bg-pink-50"
              href={`/list/exams?classId=${2}`}
            >
              Student&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaSkyLight"
              href={`/list/assignments?classId=${2}`}
            >
              Student&apos;s Assignments
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaYellowLight"
              href={`/list/results?studentId=${"student2"}`}
            >
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performamce />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentsPage;
