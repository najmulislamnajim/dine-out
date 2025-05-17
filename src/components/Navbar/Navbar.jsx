import logo from '../../assets/logo/logo.svg';
import user_icon from '../../assets/logo/user-icon.svg';
export default function Navbar(){
    return(
        <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
            <div className="flex items-center ">
                <div className="text-primary mr-2">
                    <img src={logo} />
                </div>
                <h1 className="text-2xl font-bold"><span className="text-primary">Dine</span>Out</h1>
            </div>
            <div className="flex items-center">
                <img src={user_icon} className="h-10" />
            </div>
        </nav>
    )
}