import React from 'react'
import moringIcon from '../assets/mrn_icon.svg';
import eveningIcon from '../assets/evn_routine.svg';

const mapIcon = (iconName: string): string => {
    const iconMap: { [key: string]: string } = {
        morning: moringIcon,
        evening: eveningIcon
    }

    return iconMap[iconName] || moringIcon
}

export default mapIcon