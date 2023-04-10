import { NavLink, LinkProps } from 'react-router-dom';

type CommonTabProps = {
  label: string
}

export const CommonTab: React.FC<LinkProps & CommonTabProps> = ({ label, to }) => (
  <NavLink
    className={ ({ isActive }) =>
      [
        'text-xs border-2 border-b-0 border-slate-700 rounded-t-lg px-2 pt-4 pb-3 mr-1',
        isActive ? 'text-orange-300 bg-slate-700' : 'text-slate-400'
      ].join(' ')
    }
    to={to}
  >
    {label}
  </NavLink>
)
