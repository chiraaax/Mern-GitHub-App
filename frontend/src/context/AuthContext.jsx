import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/check", { credentials: "include" });
        const data = await res.json();
        if (data.user) {
          setAuthUser(data.user); // Set authenticated user
        } else {
          setAuthUser(null); // Ensure authUser is null if not authenticated
        }
      } catch (error) {
        toast.error(error.message);
        setAuthUser(null); // If there's an error, treat the user as logged out
      } finally {
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
