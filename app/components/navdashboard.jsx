import Link from "next/link"
export default function NavDashboard () {
	return (
		<>
			<Link href="/users/dashboard" className="w-[130px] h-[50px] rounded-xl absolute top-2 left-2 border lg:flex items-center justify-between px-2 hidden">
					<p className="font-light text-md">Dashboard</p>
					
					<div className="w-4 h-4 flex flex-col justify-around">
						<div className="w-full h-[2px] bg-black rounded-l"></div>
						<div className="w-full h-[2px] bg-black rounded-l"></div>
						<div className="w-full h-[2px] bg-black rounded-l"></div>
					</div>
			</Link>
		
		</>
	)
	
}