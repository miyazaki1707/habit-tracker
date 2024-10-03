import { useEffect, useState } from "react"
import CalendarButton from "./CalendarButton"
import TimePicker from "./TimePicker";
import IOSSwitch from "./Switcher";

interface NotificationsBlockProps {
  notificationTime: string,
  notificationsDays: number[]
}


const NotificationsBlock = ({ notificationTime, notificationsDays }: NotificationsBlockProps) => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [time, onChange] = useState(notificationTime);
  const [notificationsDaysState, setNotificationsDays] = useState(notificationsDays);

  const weekDays = [
    "M", "T", "W", "Tr", "F", "Sr", "S"
  ]

  const selectAllDays = (checked: boolean) => {
    setSwitchChecked(checked);
    if (checked == true) {
      setNotificationsDays([0, 1, 2, 3, 4, 5, 6]);
    } else {
      setNotificationsDays([]);
    }
  }

  useEffect(() => {
  }, [notificationsDaysState])

  const notifyDatesCheck = (index: number): boolean => {
    const res = notificationsDaysState.includes(index) ? true : false;

    return res;
  }

  return (
    <>
      <h2 className="font-medium text-[15px] mb-[13px]">Notifications</h2>
      <div className="flex justify-between  ">
        {weekDays.map((element, index) => (
          <CalendarButton key={index} title={element} state={notifyDatesCheck(index)} ></CalendarButton>
        ))}
      </div>
      <div className="flex justify-between mt-[19px] mx-[10px] items-center">
        <h3 className="text-[15px] font-medium">Remind everyday</h3>
        <IOSSwitch checked={switchChecked} onChange={(checked) => selectAllDays(checked)}></IOSSwitch>
      </div>
      <div className="flex justify-between mt-[10px] mx-[10px] items-center">
        <h3 className="text-[15px] font-medium">Reminder time</h3>
        <div>
          <TimePicker step={10} time={time} />
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default NotificationsBlock