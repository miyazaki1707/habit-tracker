import { User } from '../models/user.model'

const Header = ({username, profilePic}: User) => {
      return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img className='w-[36px] h-[36px]' src={profilePic} alt="" />
          <h2  className='text-[15px] pl-[8px] font-medium'>{username}</h2>
        </div>
        <button className='text-[#fff] rounded-xl text-center p-0'>
          <p className='text-[13px] px-[13px] py-[6px] font-medium'>Free plan</p>
        </button>
    </div>
  )
}

export default Header