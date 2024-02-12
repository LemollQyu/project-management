import BackNav from "./comp/navigasi"

export default function Layout({ children }) {
  return (
    <>
		
			<BackNav />
		
		
		
			{children}
		
	 </>
  );
}
