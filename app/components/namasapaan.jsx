import Auth from "./auth"

const NamaSapaan = async () => {
	const user = await Auth();
	const nama = user ? `${user.name}` : "Unknown";
	
	return (
		<>
			<h1 className="text-xl font-medium">Hey I'am   {nama} 👋</h1>
		</>
	)

}

export default NamaSapaan;