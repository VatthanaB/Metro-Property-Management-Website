import { Link, NavLink } from "react-router-dom";

export default function MainNavigation() {
  const links = [
    { href: "/", label: "Homepage" },
    { href: "/issues", label: "Tab2" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">Mission 5</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <NavLink key={link.href} to={link.href}>
            {link.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
