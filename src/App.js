import { embedDashboard } from "@superset-ui/embedded-sdk";
import React, { useEffect } from "react";

function App() {
  function fetchGuestTokenFromBackend() {
    fetch("")
      .then((response) => response.json())
      .then((data) => data.token);
  }

  useEffect(() => {
    embedDashboard({
      id: "426e0d5a-de9f-4b14-98b0-7bc8c87a7199",
      supersetDomain: "https://superset.example.com",
      mountPoint: document.getElementById("dashboard-container"),
      fetchGuestToken: () => fetchGuestTokenFromBackend(),
      dashboardUiConfig: {
        hideTitle: true,
        filters: {
          expanded: true,
        },
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">Dashboard</header>
      <div></div>
    </div>
  );
}

export default App;
