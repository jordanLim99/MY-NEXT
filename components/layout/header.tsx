import Link from "next/link";

export default function Header() {
    return(
        <>
            <header className="text-gray-600 body-font text-center">
                <div className="container mx-auto flex p-5 justify-center items-center">
                    <Link href="/pages">
                        <a className="flex title-font font-medium items-center justify-center text-gray-900 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2"
                                 className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">MY-NEXT</span>
                        </a>
                    </Link>

                    <nav className="ml-auto flex  items-center text-base justify-center">
                        <Link href="/">
                            <a className="mx-2 hover:text-gray-900">HOME</a>
                        </Link>
                        <Link href="/word">
                            <a className="mx-2 hover:text-gray-900">WORD</a>
                        </Link>
                        <Link href="/todolist">
                            <a className="mx-2 hover:text-gray-900">TODOLIST</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}