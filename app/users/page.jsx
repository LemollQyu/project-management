import Auth from "../components/auth"
import Link from "next/link"


 const Users = async () => {
	const user = await Auth()

	return (
		<>
			<div className="mx-auto w-1/2  flex flex-col items-center gap-2 rounded-md p-5" >
				<h1 className="text-2xl text-light font-myFont">{user.name} </h1>
				<p className="text-l text-light font-myFont">Creatif Developer</p>
				
				<Link href="users/dashboard" className="h-[54px] w-[240px] border text-neutral-700 bg-white  flex items-center justify-between px-3 rounded-xl group">
					Dashboard
							<svg width="12" className="transform transition-transform duration-300 group-hover:-rotate-12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
							</svg>
				
				</Link>
		
			</div>
		</>
	)
} 	

export default Users