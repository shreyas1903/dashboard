import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
const SUPERSET_DASHBOARD_ID = "7af4a3fe-294d-4dfe-a622-db33df925f7d";
const SUPERSET_DASHBOARD_URL = "http://superset.drozone.co.in";
const BACKEND_API_URL =
  "http://superset.drozone.co.in/api/v1/security/guest_token/";
const credentials = {
  username: "shreyaspatil19",
  password: "admin",
  provider: "db",
  refresh: true,
};
const API_BASE_URL = "http://superset.drozone.co.in/api/v1";
const LOGIN_ENDPOINT = "/security/login";
function App() {
  const navigate = useNavigate();
  const [authtoken, setAuthToken] = useState("");

  // authtoken
  const getAuthToken = async ({ username, password, provider, refresh }) => {
    const response = await fetch(`${API_BASE_URL}${LOGIN_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        provider,
        refresh,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unable to login");
    }
    console.log(data.access_token);
    return data.access_token;
  };
  // Call the function with the credentials
  const getGuestToken = async () => {
    const Authtoken = await getAuthToken(credentials);
    console.log("authtoken", Authtoken);
    const response = await fetch(BACKEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authtoken}`,
      },
      body: JSON.stringify({
        resources: [
          {
            id: "2766f1ad-6d1d-412a-a9f8-fb2996204942",
            type: "dashboard",
          },
        ],
        rls: [
          {
            clause: "string",
            dataset: 0,
          },
        ],
        user: {
          first_name: "Shreyas",
          last_name: "Patil",
          username: "shreyaspatil19",
        },
      }),
    });
    const token = await response.json();
    console.log(token);
    return token;
  };

  const handleClick = async () => {
    console.log("clicked");
    const token = await getGuestToken();
    window.location.href = `http://superset.drozone.co.in/superset/dashboard/3?standalone=true&edit=false&standalone=true&header=false&token=${encodeURIComponent(
      token
    )}`;
    // console.log("here is the token", token);
    // <a
    //   href={``}
    // >
    //   <button>Go to Dashboard</button>
    // </a>;
    // try {
    //   // const token =
    //   // "YwU60YVTUUnrGRWaaL8ZNZqSys6RjCrO3KHffaTCQcblSdhtA1AYdut8IQF4MfyV";
    //   // setAuthToken(token);
    //   const dashboardUrl =
    //     "http://superset.drozone.co.in/superset/dashboard/3?standalone=true&edit=false&standalone=true&header=false&token=${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…zdCJ9.MqV8PD0AxX0OkflRPO__sHRHIA_Yxl7o4hBda6QvRAQ}";
    //   navigate(dashboardUrl);
    //   console.log(token);
    // } catch (error) {
    //   console.error("Unable to retrieve authToken:", error);
    // }
  };
  // useEffect(() => {
  //   const embedSupersetDashboard = async () => {
  //     await embedDashboard({
  //       id: SUPERSET_DASHBOARD_ID,
  //       supersetDomain: SUPERSET_DASHBOARD_URL,
  //       mountPoint: document.getElementById("dashboard"),
  //       fetchGuestToken: () => getGuestToken(),
  //       dashboardUiConfig: {
  //         hideTitle: true,
  //         hideChartControls: true,
  //         hideTab: true,
  //       },
  //     });
  //   };
  //   if (document.getElementById("dashboard")) {
  //     embedSupersetDashboard();
  //   }
  // }, []);
  return (
    <div className="App">
      <h1>Superset Dashboard in React</h1>
      {/* <div id="dashboard" /> */}
      {/* <a href="http://34.200.137.60:3000/superset/dashboard/3/?native_filters_key={getAuthToken}"> */}
      {/* <BrowserRouter> */}
      <button onClick={handleClick}> go to the dashboard</button>
      {/* </BrowserRouter> */}
      {/* </a> */}
    </div>
  );
}
export default App;
