"use client"

import {useRouter} from "next/navigation"

export default function Nav(){
	
	const router = useRouter()
	
	const handleBack = (event) => {
		event.preventDefault()
		router.back()
	}
	
	return(
		<>
			<button className="absolute top-0 border flex items-center justify-center rounded-md w-16 h-5 grup" onClick={handleBack}>
				<svg width="12" className="transform transition-transform duration-300 rotate-180 grup-hover:rotate-90" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
							</svg>
			</button>
		</>
		
	)
	
}