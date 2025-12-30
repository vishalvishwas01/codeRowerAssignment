const Layout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-blue-800 flex items-center justify-center px-4 over">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default Layout;
