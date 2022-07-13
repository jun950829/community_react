import Link from "next/link";

export default function Header () {
    return (    
        <nav>
            <Link href="/">
                <a>home</a>
            </Link>
            <Link href="/login/loginMain">
                <a>login</a>
            </Link> 
        </nav>
        // <nav>
        //     <a href="/">home</a>
        //     <a href="/about">about</a>
        // </nav>
    )
}