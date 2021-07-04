import Link from "next/link";
import Image from 'next/image';
const Navbar = () => {
    return ( 
        <nav>
        <div className = "logo">
            <Image src = "/friends.png" width = {110} height = {70} className = "friends-image"/>
        </div>
        <Link href = "/"><a>Home</a></Link>
        <Link href = "/about"><a>About</a></Link>
        <Link href = "/friends"><a>Friend List</a></Link>
        </nav>
        );
}
 
export default Navbar;