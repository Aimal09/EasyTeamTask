import React from "react";
import { Settings } from "@easyteam/ui";
import { useAppState } from "../context/AppStateContext";
import axios from "axios";
import { BASE_URL } from "../config/api";

const SettingsScreen = () => {
  const { state } = useAppState();

  const updateGlobalTrackingSetting = async (payload) => {
    try {
      await axios.put(
        BASE_URL + "/updateGlobalTrackingSetting",
        { isGlobalTrackingEnabled: payload },
      );
    } catch (error) {
      console.error("Error updating global tracking setting:", error);
    }
  };

  return (
    <Settings
      onSave={({ isGlobalTrackingEnabled }) => {
        updateGlobalTrackingSetting(isGlobalTrackingEnabled);
      }}
    />
  );
};

export default SettingsScreen;