
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

const AuthStatus = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        user: { name: "Sushmita Purbey", email: "sushmita14@gmail.com" },
        token: "12345abcde",
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-blue-800">Authentication Status</h2>
      {isAuthenticated ? (
        <div className="text-center">
          <p className="text-red-950">Welcome, <span className="font-bold">{user.name}</span>!</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-green-700">You are not logged in.</p>
          <button
            onClick={handleLogin}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthStatus;
