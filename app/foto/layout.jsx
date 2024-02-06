import NavImage from "./comp/navigasi"
const Layout = ({children}) => {
	return(
		<>
		<div className="">
	
		<NavImage />

		{children}

		</div>
		</>
	)	
}

export default Layout;
