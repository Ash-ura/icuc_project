import {  NavLink} from  'react-router-dom'


function Navbar() {

    const navLinkStyle = ({isActive})=>{
        return {
            fontWeight:isActive ? 'bold': 'normal',
            textDecoration:isActive ? 'none':'none'
        }
    }
 
  return (
   <nav className='navigations'>
    <NavLink  style={navLinkStyle} to='/'>Home </NavLink>
    <NavLink  style={navLinkStyle} to='/contributions'>Contributions </NavLink>
    <NavLink style={navLinkStyle} to='/members' >Members </NavLink>
    {/* {!auth?.user && (<NavLink style={navLinkStyle} to='/login' >Login </NavLink> )} */}
   </nav>
  )
}

export default Navbar