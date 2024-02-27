import Image from "next/image"
export default function gridImage(){
	return (
		<>
		
		
		
		
		<div className="columns-2 sm:columns-3 gap-4 my-8">
		
			<div className="border relative h-40 mb-4">
			 

				 <Image
					className={'w-full h-full object-cover'}
                    src={'/ha.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
				 
			</div>
			
			<div className="border relative h-80 mb-4 sm:mb-0">
			
				<Image
					className={'w-full h-full object-cover'}
                    src={'/va.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
			
			</div>
			
			<div className="border relative h-40 sm:h-80 sm:mb-4">
			
				<Image
					className={'w-full h-full object-cover'}
                    src={'/vb.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
		
			</div>
			
			<div className="border relative h-40 mb-4">
			 

				 <Image
					className={'w-full h-full object-cover'}
                    src={'/hb.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
				 
			</div>
			
			<div className="border relative h-40 mb-4">
			
				<Image
					className={'w-full h-full object-cover'}
                    src={'/hc.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
			
			</div>
			
			<div className="border relative h-80">
			
				<Image
					className={'w-full h-full object-cover'}
                    src={'/vb.jpg'}
                    height={150}
                    width={150}
                    alt="Lemoll Qyuu"
                    />
					
			</div>
			
			</div>
		
		
		
		
		
		
		
		
		
		
		
			
		</>		
	)
}