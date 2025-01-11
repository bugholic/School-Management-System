import Announcement from "@/components/Announcements";
import ContainerAttendanceChart from "@/components/ContainerAttendanceChart";
import ContainerEventCalendar from "@/components/ContainerEventCalendar";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* Middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row ">
          {/* Count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* Attendace chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <ContainerAttendanceChart />
          </div>
        </div>
        {/* Bottom charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <ContainerEventCalendar searchParams={searchParams} />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
