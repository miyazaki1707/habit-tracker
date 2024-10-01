import { User } from '../models/user.model'

const Header = ({ username, profilePic }: User) => {
  return (
    <div className='flex items-center justify-between mt-[15px] mx-[15px]'>
      <div className='flex items-center'>
        <img className='w-[36px] h-[36px]' src={profilePic} alt="" />
        <h2 className='text-[15px] pl-[8px] font-medium'>{username}</h2>
      </div>
    </div>
  )
}
export default Header