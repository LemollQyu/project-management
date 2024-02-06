import Link from "next/link"

export default function boxHeadline(){
	return (
		<>
			<div className="my-8 flex flex-col space-y-4 w-full">
				<div className="group">
					<Link href="/blog/developer-experience-examples" className="border border-neutral-200 bg-neutral-50 rounded flex items-center justify-between px-3 py-4 w-full">
					<div className="flex flex-col">
						<p className="font-medium text-neutral-900">What Makes A Great Developer Experience?</p>
						
						<p className="text-neutral-600 ">37,642 views</p>
					</div>
					
					<div className="text-neutral-700  transform transition-transform duration-300 group-hover:-rotate-12">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
						</svg>
						
					</div>
					</Link>
					</div>
					
					<div className="group">
						<Link href="/blog/devrel-at-vercel" className="border border-neutral-200  bg-neutral-50  rounded flex items-center justify-between px-3 py-4 w-full">
							<div className="flex flex-col">
								<p className="font-medium text-neutral-900 ">What is Developer Relations?</p>
								<p className="text-neutral-600">10,442 views</p>
							</div>
							<div className="text-neutral-700  transform transition-transform duration-300 group-hover:-rotate-12">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
								</svg>
							</div>
							</Link>
							</div>
							
							<div className="group">
								<Link href="/blog/heroku" className="border border-neutral-200  bg-neutral-50 rounded flex items-center justify-between px-3 py-4 w-full">
									<div className="flex flex-col">
										<p className="font-medium text-neutral-900 ">The Story of Heroku</p>
										
										<p className="text-neutral-600">40,767 views</p>
									</div>
									
									<div className="text-neutral-700  transform transition-transform duration-300 group-hover:-rotate-12">
									
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
									</svg>
								</div>
							</Link>
						</div>
					</div>
		</>
	)
}