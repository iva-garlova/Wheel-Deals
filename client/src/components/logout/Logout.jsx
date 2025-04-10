import { Navigate } from "react-router";
import { useLogout } from "../../api/authenticationApi";

export default function Logout() {
const { isLoggedOut } = useLogout();

return isLoggedOut
     ? <Navigate to={"/"}/>
     : null;


}