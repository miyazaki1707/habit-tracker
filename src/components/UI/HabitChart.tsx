import { PieChart } from 'react-minimal-pie-chart';

interface HabitChartProps {
  skipped: number,
  completed: number
}

const HabitChart = ({ skipped, completed }: HabitChartProps) => {
  return (
    <PieChart className='w-[200px] inline'
      data={[
        { title: 'Completed', value: completed, color: '#48BB78' },
        { title: 'Skipped', value: skipped, color: '#D02626' },
      ]}
      lineWidth={15} paddingAngle={18} labelPosition={0} rounded={true} label={() => `${completed}/${skipped}`}
    />
  )
}

export default HabitChart