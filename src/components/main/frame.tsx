import { NavLink } from "react-router-dom"
import { MainTab } from "./tab"

type MainFrameProps = {
  children?: string | JSX.Element | JSX.Element[]
}

export const MainFrame: React.FC<MainFrameProps> = ({ children }) => (
  <>
    <div className='mb-8'>
      <NavLink className='text-orange-300' to='/'>
        &lt; Back to Home
      </NavLink>
    </div>

    <div className='flex align-center'>
      <MainTab label='Movies' to="/movies" />
      <MainTab label='Characters' to="/characters" />
      <MainTab label='Quotes' to="/quotes" />
    </div>
    <div className="bg-slate-700 rounded-lg rounded-tl-none p-4">
      {children}
    </div>
  </>
)
