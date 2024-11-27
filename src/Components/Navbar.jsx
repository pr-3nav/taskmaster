function Navbar() {
    return (
      <nav className="bg-blue-950 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold font-serif tracking-wider text-blue-700">TaskMaster</h1>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-200 font-mono tracking-wider">Home</a>
            <a href="#" className="hover:text-blue-200 font-mono tracking-wider">Tasks</a>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;