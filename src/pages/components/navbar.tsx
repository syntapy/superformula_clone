import * as React from "react"
import { NavButton } from "./buttons"

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavButton href="/" text="Home" />
        </li>
        <li>
          <NavButton href="/about" text="About" />
        </li>
        <li>
          <NavButton href="/contact" text="Contact" />
        </li>
      </ul>
    </nav>
  );
}
