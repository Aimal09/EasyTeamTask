import React, { } from "react";
import { EasyTeamProvider } from "@easyteam/ui";
import { BASE_PATH } from "../config/api";
import { useAppState } from "../state-management/hooks/useAppState";

const Layout = ({ children }) => {
  const { state } = useAppState();

  return (
    <EasyTeamProvider
      token={state.token}
      employees={state.employees}
      isGlobalTimeTrackingEnabled={JSON.parse(state.user.isGlobalTrackingEnabled)}
      basePath={BASE_PATH}>
        {children}
    </EasyTeamProvider>
  );
};

export default Layout;