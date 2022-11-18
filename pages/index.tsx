import { useEffect, useState } from "react";

import { LoadingScreen } from "./Loading";

import HomeScreen from "./HomeScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? <LoadingScreen /> : <HomeScreen />;
}
