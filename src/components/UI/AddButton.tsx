import addButton from '../../assets/add_button.svg'; 

const AddButton = () => {
  return (
    <div className='flex mt-[15px] justify-center'>
        <img className='w-[18px] h-[18px]' src={addButton} alt="" />
        <h2 className='text-[#696969] font-medium pl-[6px]'>Create a new one</h2>
    </div>
  )
}

export default AddButton