
import AuthStatus from "./components/AuthStatus";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Redux Authentication
        </h1>
        <AuthStatus />
      </div>
    </div>
  );
}

export default App;
