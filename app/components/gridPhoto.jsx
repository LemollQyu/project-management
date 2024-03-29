import Image from "next/image"
export default function gridImage(){
	return (
		<>
		
		
		
		
		<div className="columns-2 sm:columns-3 gap-4 my-8">
		
			<div className="border relative h-40 mb-4">
			 

				 <Image
					className={'w-full h-full object-cover'}
                    src={'/h1.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
				 
			</div>
			
			<div className="border relative h-80 mb-4 sm:mb-0">
			
				<Image
					className={'w-full h-full object-cover'}
                    src={'/v11.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
			
			</div>
			
			<div className="border relative h-40 sm:h-80 sm:mb-4">
			
				<Image
					className={'w-full h-full object-cover'}
                    src={'/v22.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
		
			</div>
			
			<div className="border relative h-40 mb-4">
			 

				 <Image
					className={'w-full h-full object-cover'}
                    src={'/h2.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
				 
			</div>
			
			<div className="border relative h-40 mb-4">
			
				<Image
					className={'w-full h-full object-cover'}
                    src={'/h3.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
			
			</div>
			
			<div className="border relative h-80">
			
				<Image
					className={'w-full h-full object-cover'}
                    src={'/v3.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
					
			</div>
			
			</div>
		
		
		
		
		
		
		
		
		
		
		
			
		</>		
	)
}