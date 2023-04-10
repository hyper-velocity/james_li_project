import { Link } from 'react-router-dom'

export default () => (
  <div className="h-screen text-center flex flex-col items-center justify-center px-4 sm:px-8 py-6 sm:py-12">
    <div className="max-w-5xl">
      Welcome to LibLab Assessment<br/>
      Click <Link className='text-orange-300' to='/movies'>here</Link> to browse for movies, characters and quotes
    </div>
  </div>
)
