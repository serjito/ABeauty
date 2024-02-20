import Sidebar from '../Components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-black">
      <div className="w-full flex-none md:w-64">
        {' '}
        <Sidebar />
      </div>
      <div className=" flex-grow mx-14 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
