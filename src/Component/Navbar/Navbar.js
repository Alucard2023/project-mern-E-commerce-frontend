import React, { useEffect } from "react";
import "./Navbar.css";

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../Navbar/NavbarElements';
import {useDispatch,useSelector } from "react-redux";
import { logout,current } from '../../Js/Actions/user';
import { currentAdmin } from "../../Js/Actions/Admin";




const Navbar = () => {
	const dispatch = useDispatch(); // Initialisez dispatch
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	const user = useSelector((state) => state.userReducer.user);
	//const isAuthAdmin = useSelector((state) => state.AdminReducer.isAuthAdmin);
	//const admin = useSelector((state) => state.AdminReducer.admin);
  //const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
 const allowedAdminId = "6500ad79f959769b7043502a"; 



    
	useEffect(() => {
		if (localStorage.getItem("token")) {
		dispatch(current());
		}
	}, [dispatch]);

	useEffect(() => {
		if (localStorage.getItem("token")) {
		dispatch(currentAdmin());
		}
	}, [dispatch]);

	console.log("user:", user);
	console.log("allowedAdminId:", allowedAdminId);
	

return (

	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/'  activeclassname="active">
			Home
		</NavLink>
		<NavLink to='/about'  activeclassname="active">
			About
		</NavLink>
		<NavLink to='/products'  activeclassname="active">
			Products
		</NavLink>
		
		
		
		{user?._id=== allowedAdminId ? <NavLink to='AllOrders'  activeclassname="active">
			Order
		</NavLink> : null }
 
		

		
		</NavMenu>

		<NavBtn className='btn'>
		</NavBtn>


		
		{isAuth ? <NavBtnLink to={`/profile/${user._id}`}>Profile</NavBtnLink> : null}

		



		{ isAuth?
( 	<NavBtnLink to="/" onClick={()=>dispatch(logout())}>logout </NavBtnLink>
)
:
( <div>
		<NavBtnLink to='/signin'>SignIn </NavBtnLink>
	<NavBtnLink to='/Register'>Register</NavBtnLink>
</div>

	
	
	)
}


</Nav>

	</>

);
};

export default Navbar;