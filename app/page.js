import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white overflow-hidden flex justify-center items-center">
      <div className="flex w-[95%] h-full overflow-hidden flex-col">
        <Header />
        <Dashboard />
      </div>
      <div className="h-full overflow-auto shadow-lg w-[5%]">
        <Sidebar />
      </div>
    </div>
  );
}
