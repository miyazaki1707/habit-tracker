import icon from '../../assets/routine_icon.png';

const Routine = () => {
  return (
    <div className='flex mt-[26px] bg-[#F9F9F9] rounded-[7px]'>
         <img src={icon} alt="" className='w-[32px] h-[32px] my-[13px] ml-[18px] mr-[13px]'/>
         <div>
            <div className='flex justify-between pt-[13px]'>
                <h3 className='font-medium'>Routine lists</h3>
                <p className='pr-[8px]'>0/2</p>
            </div>
            <p className='pb-[13px] pt-[4px]'>You can create a lists of routines, setting a reminders and track the progress</p>
         </div>
    </div>
  )
}

export default Routine