import Links from "./links/Links";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>Logo</div>
      <div className="flex justify-center items-center">
        <Links />
      </div>
    </nav>
  );
};
export default Navbar;
