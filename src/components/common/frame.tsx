import { NavLink } from 'react-router-dom'
import { CommonTab } from './tab'

type CommonFrameProps = {
  children?: string | JSX.Element | JSX.Element[];
}

export const CommonFrame: React.FC<CommonFrameProps> = ({ children }) => (
  <>
    <div className='mb-8'>
      <NavLink className='text-orange-300' to='/'>
        &lt; Back to Home
      </NavLink>
    </div>

    <div className='flex align-center'>
      <CommonTab label='Movies' to='/movies' />
      <CommonTab label='Characters' to='/characters' />
      <CommonTab label='Quotes' to='/quotes' />
    </div>
    <div className='bg-slate-700 rounded-lg rounded-tl-none p-4'>
      {children}
    </div>
  </>
);
