// components/Navbar.js
"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
const navLinks = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/about", id: "about" },
  // { label: "Projects", href: "/projects", id: "projects" },
  { label: "Blogs", href: "/blog", id: "blogs" },
  { label: "Work", href: "/experience", id: "work" },
  // { label: "Contact", href: "/#contact", id: "contact" },
];
export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinkContainer}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              className={pathname === link.href ? styles.active : ""}
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
