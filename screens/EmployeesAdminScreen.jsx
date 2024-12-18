import React, { useLayoutEffect, useMemo, useRef } from "react";
import { EmployeesTimesheet } from "@easyteam/ui";

const EmployeesScreen = ({ navigation, route }) => {
  const ref = useRef(null);

  const startDate = useMemo(() => {
    return route.params ? route.params?.startDate : undefined;
  }, [route.params]);

  const endDate = useMemo(() => {
    return route.params ? route.params.endDate : undefined;
  }, [route.params]);

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      ref.current?.reloadData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <EmployeesTimesheet
      ref={ref}
      onEmployeeReportPress={({ employeeId, startDate, endDate }) => {
        navigation.navigate('Time Sheet', {
          screen: 'TimesheetAdminScreen',
          params: { employeeId, startDate, endDate },
        });
      }}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

export default EmployeesScreen;