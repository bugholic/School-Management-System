import Announcement from "@/components/Announcements";
import ContainerBigCalendar from "@/components/ContainerBigCalendar";
import { auth } from "@clerk/nextjs/server";
import "react-big-calendar/lib/css/react-big-calendar.css";

const TeacherPage = async () => {
  const { userId } = await auth();
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row flex-1">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <ContainerBigCalendar type="teacherId" id={userId!} />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
};

export default TeacherPage;
