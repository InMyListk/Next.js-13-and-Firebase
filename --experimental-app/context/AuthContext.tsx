import React from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

type AuthContextType = {
  user: User | null;
};

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
});

export const useAuthContext = () => React.useContext(AuthContext);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
