import { MainTab } from "./tab"

type MainFrameProps = {
  children?: string | JSX.Element | JSX.Element[]
}

export const MainFrame: React.FC<MainFrameProps> = ({ children }) => (
  <>
    <div className='flex align-center'>
      <MainTab label='Movies' to="/movies" />
      <MainTab label='Characters' to="/characters" />
      <MainTab label='Quotes' to="/quotes" />
    </div>
    <div className="bg-slate-700 p-4">
      {children}
    </div>
  </>
)
