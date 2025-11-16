import { format, startOfDay, subDays } from 'date-fns';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    const data = JSON.parse(localStorage.getItem('userData')) || [];
    return data;
  });
  const [isLoading, setIsLoading] = useState(false);
  const date = format(Date.now(), 'dd/MM/yyyy');
  const todaysData = userData?.find((data) => data.date === date);
  const backgroundStyle = {
    negative: 'bg-yellow-600',
    positive: 'bg-sky-600',
    neutral: 'bg-gray-600',
  };
  const sevenDays = useMemo(() => {
    const lastSeven = startOfDay(subDays(startOfDay(new Date()), 7));
    const formatted = format(lastSeven, 'dd/MM/yyyy');
    return formatted;
  }, []);

  useEffect(
    function () {
      const isOutdated = userData.some((data) => data.date <= sevenDays);
      if (!isOutdated) return;
      setUserData((userData) =>
        userData.filter((data) => data.date > sevenDays)
      );
    },
    [sevenDays, userData]
  );

  useEffect(
    function () {
      localStorage.setItem('userData', JSON.stringify(userData));
    },
    [userData]
  );

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        todaysData,
        backgroundStyle,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx)
    throw new Error("You might be using context value outside of it's scope");
  return ctx;
}
