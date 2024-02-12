

import Image from "next/image"
import Link from 'next/link'
import Auth  from './auth'

const LoginAuth = async() => {
	const user = await Auth()
	
	
	const actionLabel = user ? "Sign Out" : "Sign In";
	
	const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
	

	
	
	
	return (
		<>
		<div className="flex items-center gap-3">
			
			
			<Link href={actionURL} className="font-light">{actionLabel}</Link>
			
		
			
			{
				user ? 
				<Link href="/users">
					<div className="rounded-full w-8 h-8">
						
						<Image
							className={'w-full h-full object-cover rounded-full'}
							src={user.image}
							height={150}
							width={150}
							alt="Lemoll Qyuu"
						/>
						
					</div>
				</Link>
				
				: 
				null
			}
			
			
		</div>
		
		
		</>
	)
}

export default LoginAuth;


