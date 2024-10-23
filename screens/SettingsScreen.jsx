import React from "react";
import { Settings } from "@easyteam/ui";
import { useAppState } from "../context/AppStateContext";

const SettingsScreen = () => {
  const { state } = useAppState();

  return (
    <Settings
      onSave={() => {}}
    />
  );
};

export default SettingsScreen;