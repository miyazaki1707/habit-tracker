import React, { useState } from 'react'

interface buttonProps {
    title: string
}

const CalendarButton = ({title}: buttonProps) => {  
    const [active, useActive] = useState(false);
    
    return (
        <button onClick={e => useActive(!active)} className={"w-[38px] h-[38px] rounded-[50px] text-[#fff] font-medium text-[15px] " + (active ? 'bg-[#000]': 'bg-[#B3B3B3]')}>{title}</button>
    )
}

export default CalendarButton