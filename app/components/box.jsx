import Image from "next/image"
import Link from "next/link"

export default function Box () {
	return (
		<>
			<div className="flex flex-col md:flex-row items-center gap-4 mt-10">
			
				<Link className="rounded-md w-full md:w-1/2 h-20 border flex flex-row justify-between px-3 items-center group" href="https://instagram/creatif_ar">
				 
					 <div className="flex gap-2 items-center ">
						<div className="rounded-full w-16 h-16 border-2">
						
							<Image
							className={'rounded-full w-full h-full object-cover'}
							src={'/p1.jpg'}
							height={150}
							width={150}
							alt="Lemoll Qyuu"
							/>
						</div>
					
						<div className="flex flex-col">
							<p className="font-medium">@_nada12</p>
							<p className="font-light">11.100 followers</p>
						</div>
					 </div>
						
					<div className="text-neutral-700  transform transition-transform duration-300 group-hover:-rotate-12">
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
							</svg>
							
					</div>
					
				
				</Link>
					
					
				
				
				
				<Link className="rounded-md w-full md:w-1/2 h-20 border flex flex-row justify-between px-3 items-center group" href="https://www.instagram.com/creatif_ar/">
				  
					 <div className="flex gap-2 items-center ">
						<div className="rounded-full w-16 h-16 border-2">
						
							<Image
							className={'rounded-full w-full h-full object-cover'}
							src={'/p2.jpg'}
							height={150}
							width={150}
							alt="Lemoll Qyuu"
							/>
						</div>
					
						<div className="flex flex-col">
							<p className="font-medium">@creatif_ar</p>
							<p className="font-light">576 followers</p>
						</div>
					 </div>
						
					<div className="text-neutral-700  transform transition-transform duration-300 group-hover:-rotate-12">
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
							</svg>
							
					</div>
					
				 
				</Link>
			</div>
		
		</>
	)
}