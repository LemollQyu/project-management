export { default } from 
"next-auth/middleware"

//proteksi route tertentu
export const config = { matcher: ["/users/:path*"] }

	
