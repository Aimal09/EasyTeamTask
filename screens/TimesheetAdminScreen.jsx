import React, { useLayoutEffect, useRef, useState } from "react";
import { Timesheet, AddButton } from "@easyteam/ui";

const TimesheetAdminScreen = ({ navigation, route }) => {
  const ref = useRef(null);
  const employeeId = route.params?.employeeId || "";

  useLayoutEffect(() => {
    if (ref.current?.adminWritePermissions) {
      navigation.setOptions({
        headerRight: () => (
          <AddButton
            onPress={() => {
              const selectedEmployeeId = ref.current?.selectedEmployeeId;
              if (selectedEmployeeId) {
                navigation.navigate("Time Sheet", {
                  screen: "ShiftFormScreen",
                  params: { employeeId: selectedEmployeeId }, 
                });
              }
            }}
          />
        ),
      });

      const unsubscribe = navigation.addListener("focus", () => {
        ref.current?.reloadData();
      });

      return unsubscribe;
    }
  }, [navigation]);

  if (!employeeId) {
    console.warn("employeeId is missing");
    navigation.goBack();
    return null; 
  }

  return (
    <Timesheet
      ref={ref}
      employeeId={employeeId}
      onEditPress={(date, selectedEmployeeId) => {
        navigation.navigate("Time Sheet", {
          screen: "ShiftFormScreen",
          params: {
            date,
            employeeId: selectedEmployeeId,
          },
        });
      }}
    />
  );
};

export default TimesheetAdminScreen;