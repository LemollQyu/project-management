import Link from 'next/link'
import LoginAuth from "../components/loginAuth"
import NavDashboard from "../components/navdashboard"
import Auth from "../components/auth"


const Layout = async () => {
	
	const user = await Auth();
	
	return (
		<>
		{ user ? <NavDashboard /> : null }
			
			
			<div className="px-6 md:px-0 md:w-3/4 lg:w-1/2 w-full md:h-10 h-5 flex justify-between items-center flex-row-reverse md:flex gap-4 items-center mx-auto mt-10"> 
			
				<LoginAuth />
				
				<div className="flex gap-3">
					<Link href="/">
						<p>Home</p>
					</Link>
					<Link href="/blog">
						<p>Blog</p>
					</Link>
					<Link href="/foto/hobby">
						<p>Foto</p>
					</Link>
					<Link href="/word">
						<p>Word</p>
					</Link>
				</div>

				
				
				
						
				
			</div>
			
			
		</>
	)
}

export default Layout;
