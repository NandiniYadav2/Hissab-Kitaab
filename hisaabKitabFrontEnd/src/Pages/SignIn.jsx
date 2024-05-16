import { Logo } from "../Components/Logo"
import {Login} from "../Components/Login"

export const SignIn = () => {
    return<div>
        <div className="grid grid-cols-1">
            <div>
                <Login />
            </div>
            {/* <div className="hidden lg:block">
                <Logo />
            </div> */}
        </div>
    </div>
}