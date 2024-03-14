
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../lib/firebase";


export function useUser(id) {
  const [username, setUsername] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      setLoading(true);
      try {
        const userDoc = await getDoc(doc(db, "users", id));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        } else {
          setError("User not found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUsername();
    }
    return () => {};
  }, [id]);

  return { username, isLoading, error };
}
