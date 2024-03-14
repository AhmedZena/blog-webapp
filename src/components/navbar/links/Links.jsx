"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];
const Links = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const session = true;
  const isAdmin = true;
  //   const adminLinks = [
  //     { title: "Dashboard", path: "/admin/dashboard" },
  //     { title: "Posts", path: "/admin/posts" },
  //     { title: "Users", path: "/admin/users" },
  //   ];

  return (
    <>
      <button className="mr-2" onClick={() => setIsMenuOpen(true)}>
        Menu
      </button>
      {isMenuOpen ? (
        <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 text-gray-900 p-4">
          <button onClick={() => setIsMenuOpen(false)}>Close</button>
          <ul className="flex flex-col items-center justify-center">
            {links.map((link, index) => (
              <li key={index} className="p-4">
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              // active
              className={`${
                pathname === link.path
                  ? "bg-gray-200 text-gray-700"
                  : "text-gray-500 hover:text-gray-700"
              } mr-4 px-2 py-1 rounded-2xl`}
            >
              <span className="">{link.title}</span>
            </Link>
          ))}

          {session ? (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  className={`${
                    pathname === "/admin"
                      ? "bg-gray-200 text-gray-700"
                      : "text-gray-500 hover:text-gray-700"
                  } mr-4 px-2 py-1 rounded-2xl`}
                >
                  {isAdmin ? "Admin" : ""}
                </Link>
              )}

              <button className="font-medium p-2 rounded-md text-gray-900 bg-gray-200 hover:bg-gray-300">
                <span className="">Logout</span>
              </button>
            </>
          ) : (
            <Link href="/login" className="text-gray-500 hover:text-gray-700">
              <span className="mr-4 px-2 py-1 rounded-2xl">Login</span>
            </Link>
          )}
        </>
      )}
    </>
  );
};
export default Links;
