import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="relative">
                <footer className="text-gray-600 body-font fixed bottom-0  w-full">
                    <div className="bg-gray-100">
                        <div className="container px-5 py-2 mx-auto flex items-center justify-center">
                            <Link href="/">
                                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                    <span className="ml-3 text-md">made by jordanlim</span>
                                </a>
                            </Link>
                            <span className="inline-flex ml-auto sm:mt-0 justify-center items-center">
                                <a href="https://www.facebook.com/profile.php?id=100083310399364" className="text-gray-500">
                                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                       className="w-5 h-5"
                                       viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                  </svg>
                                </a>

                                <a href="https://www.instagram.com/jordan_limkk/" className="ml-3 text-gray-500">
                                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                       strokeWidth="2"
                                       className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                  </svg>
                                </a>
                                <a href="https://github.com/jordanLim99/MY-NEXT/tree/main" className="ml-3 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                     strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                     className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                </a>
                              </span>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    );
}