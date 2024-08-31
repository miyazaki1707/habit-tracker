import { useState } from "react"
import CalendarButton from "./CalendarButton"
import TimePicker from "./TimePicker";
import IOSSwitch from "./Switcher";




const NotificationsBlock = () => {
  const [switchChecked, useSwitchChecked] = useState(false);
  const [value, onChange] = useState('10:00');

  return (
    <>
      <h2 className="font-medium text-[15px] mb-[13px]">Notifications</h2>
      <div className="flex justify-between  ">
        <CalendarButton title={"M"} ></CalendarButton>
        <CalendarButton title={"T"} ></CalendarButton>
        <CalendarButton title={"W"} ></CalendarButton>
        <CalendarButton title={"Tr"} ></CalendarButton>
        <CalendarButton title={"F"} ></CalendarButton>
        <CalendarButton title={"Sr"} ></CalendarButton>
        <CalendarButton title={"S"} ></CalendarButton>
      </div>
      <div className="flex justify-between mt-[19px] mx-[10px] items-center">
        <h3 className="text-[15px] font-medium">Remind everyday</h3>
        <IOSSwitch checked={switchChecked} onChange={(checked) => useSwitchChecked(checked)}></IOSSwitch>
      </div>
      <div className="flex justify-between mt-[10px] mx-[10px] items-center">
        <h3 className="text-[15px] font-medium">Reminder time</h3>
        <div>
          <TimePicker step={10} onTimeSelect={(time) => console.log('Selected time:', time)} />
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default NotificationsBlock