import Link from "next/link"

export default function Navigasi (){

	return (
		<>
		 <div className="flex items-center gap-3 justify-around">
			<Link href={"/foto/hobby"}>Hobby</Link>
			<Link href={"/foto/activity"}>Activity</Link>
		</div>
		</>
	)
}

