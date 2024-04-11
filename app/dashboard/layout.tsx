import SideBar from "@/app/ui/dashboard/sidebar";
import Header from "../ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen p-4">
      <Header />
      <div className="flex h-[calc(100vh-112px)] w-full gap-4">
        <div className="w-full max-w-[240px]">
          <SideBar />
        </div>
        <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-primary">
          {children}
        </div>
      </div>
    </div>
  );
}
