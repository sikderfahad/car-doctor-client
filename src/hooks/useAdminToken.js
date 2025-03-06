//

import { useEffect, useState } from "react";
import { getIdToken } from "firebase/auth";
import { useAuth } from "../provider/AuthProvider";

const useAdminToken = () => {
  const [token, setToken] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const getToken = async () => {
      const token = await getIdToken(user);
      setToken(token);
    };
    getToken();
  }, [user]);

  return token;
};

export default useAdminToken;
