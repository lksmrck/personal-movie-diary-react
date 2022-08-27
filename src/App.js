import React, { useEffect } from "react";

import MainPage from "./pages/MainPage";

function App() {
  useEffect(() => {
    document.title = "My Movie Diary";
  }, []);

  return <MainPage />;
}

export default App;
