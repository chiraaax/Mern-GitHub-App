import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Add this import

const Logout = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const navigate = useNavigate(); // Hook to navigate

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { credentials: "include" });
      if (!res.ok) {
        throw new Error(`Logout failed: ${res.statusText}`);
      }
      const data = await res.json();
      console.log(data);

      // Clear auth user state
      if (typeof setAuthUser === "function") {
        setAuthUser(null); // Set authUser to null
      }

      // Redirect to login page after successful logout
      navigate("/login");  // Redirect to login page

      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.message || "An error occurred during logout.");
    }
  };

  return (
    <>
      <img
        src={authUser?.avatarUrl || "/default-avatar.png"}
        alt="User Avatar"
        className="w-10 h-10 rounded-full border border-gray-800"
      />

      <button
        type="button"
        className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800"
        onClick={handleLogout}
        aria-label="Logout"
      >
        <MdLogout size={22} />
      </button>
    </>
  );
};

export default Logout;
