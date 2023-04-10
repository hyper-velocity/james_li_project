import { NavLink } from 'react-router-dom'

export default () => (
  <div className='h-screen text-center flex flex-col items-center justify-center px-4 sm:px-8 py-6 sm:py-12'>
    <div className='max-w-5xl'>
      Welcome to LibLab Assessment<br/>
      Click <NavLink className='text-orange-300' to='/movies'>here</NavLink> to browse for movies, characters and quotes
    </div>
  </div>
)
