import Bookmark from "../../components/bookmark"
import Link from 'next/link'
import Auth from "../../components/auth"

const ButtonBlog = async ({linkHref, views, kata}) => {
	const user = await Auth();
	
	return(
		<>
			<Link className=" flex justify-between items-center space-y-1 mb-4" href={linkHref}>
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
			  {kata}
              </p>
              <p className="text-neutral-600 ">
                {views} Views
              </p>
			 
            </div>
		   <Bookmark link={linkHref} email={user?.email} kata={kata}/>
          </Link>
		
		</>
	
	)
	
}

export default ButtonBlog;