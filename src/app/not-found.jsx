import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
};
export default NotFound;
