import { navLinks, navIcons } from "#constants";
import dayjs from "dayjs";
function Navbar() {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Vijay's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id} className="cursor-pointer">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id} className="cursor-pointer icon-hover">
              <img src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar;
