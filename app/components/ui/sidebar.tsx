export default function NavSideBar({children}: {children: React.ReactNode}) {
    return (
        <div color="default" className="h-screen w-80 text-gray-300 bg-gray-800 fixed overflow-y-auto">
          <div className="p-4">
            {children}
          </div>
        </div>
    );
}