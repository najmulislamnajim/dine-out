import logo from '../../assets/logo/logo.svg';
import user_icon from '../../assets/logo/user-icon.svg';
export default function Navbar(){
    return(
        <nav class="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
            <div class="flex items-center ">
                <div class="text-primary mr-2">
                    <img src={logo} />
                </div>
                <h1 class="text-2xl font-bold"><span class="text-primary">Dine</span>Out</h1>
            </div>
            <div class="flex items-center">
                <img src={user_icon} class="h-10" />
            </div>
        </nav>
    )
}