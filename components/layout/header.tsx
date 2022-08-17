import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font text-center">
                <div className="container mx-auto flex p-5 justify-center items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center justify-center text-gray-900 md:mb-0">
                            <img src="/favicon.ico" className="w-8"/>
                            <span className="ml-3 text-xl">MY-NEXT</span>
                        </a>
                    </Link>

                    <nav className="ml-auto flex items-center justify-center">
                        <Link href="/word">
                            <a className="mx-2 hover:text-gray-900">WORD</a>
                        </Link>
                        <Link href="/todolist">
                            <a className="mx-2 hover:text-gray-900">TODOLIST</a>
                        </Link>
                        <Link href="/login">
                            <a className="mx-2 hover:text-gray-900">MY</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}