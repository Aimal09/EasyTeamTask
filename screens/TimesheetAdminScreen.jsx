import React, { useLayoutEffect, useRef, useState } from "react";
import { Timesheet, AddButton } from "@easyteam/ui";

const TimesheetAdminScreen = ({ navigation, route }) => {
  const ref = useRef(null);
  const {
    employeeId,
    startDate:pStartDate,
    endDate:pEndDate
  } = route.params ?? {};

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
    <>
    <Timesheet
      ref={ref}
      startDate={startDate}
      endDate={endDate}
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
    </>
  );
};

export default TimesheetAdminScreen;