import { getServerSession } from "next-auth"
import {authOption} from "@/app/api/auth/[...nextauth]/route";

const Auth = async () => {
    const Session = await getServerSession(authOption);
    return Session?.user;
}

export default Auth;

