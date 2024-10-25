import React from "react";
import { Settings } from "@easyteam/ui";
import { useAppState } from "../state-management";
import axios from "axios";
import { BASE_URL } from "../config/api";
import { View } from "react-native";

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