import { Clock, EasyTeamProvider } from "@easyteam/ui";
import React from "react";
import { useAuth } from "../login/AuthProvider";

const Home = () => {
    const { token, employees } = useAuth();
    const customFont = {
      regular: "AvenirNext-Regular",
      bold: "AvenirNext-Blod",
      semiBold: "AvenirNext-SemiBold"
    }
    return(
        <>
        {(token && employees)&& <EasyTeamProvider
          token={token}
          employees={employees}
          customFont={customFont}
          basePath="http://192.168.100.229:5001/api/"
          isGlobalTimeTrackingEnabled={true}>
          <Clock onEvent={(e)=> console.log(e)}/>
        </EasyTeamProvider>}
        </>
    )
}

export default Home;