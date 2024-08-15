import NavItem from "./NavItem";
import { Spacer } from "../wrappers";
import { Divider, ProfileImage } from "../../ui";
import { Colors } from "../../../constants/ui";

function NavBar({
  logo,
  navItems = [{ label: "unknown", icon, onClick: () => {} }],
  additionalItems = [{ label: "unknown", icon, onClick: () => {} }],
  account = { photo, name: "", email: "" },
  isExpanded = false,
}) {
  return (
    <nav
      className="overflow-hidden bg-brand-700 max-h-[60rem] h-full flex flex-col items-center gap-2 px-4"
      style={{ width: isExpanded ? "19.5rem" : "5.125rem" }}
    >
      {logo}
      {/* for additional gap */}
      <div></div>
      {navItems.map((item, index) => (
        <NavItem
          key={`main-nav-${index}`}
          index={index}
          icon={item.icon}
          label={item.label}
          onClick={item.onClick}
          isExpanded={isExpanded}
        />
      ))}
      {!isExpanded ? <Spacer /> : null}
      {additionalItems.map((item, index) => (
        <NavItem
          key={`additional-nav-${index}`}
          index={navItems.length + index}
          icon={item.icon}
          label={item.label}
          onClick={item.onClick}
          isExpanded={isExpanded}
        />
      ))}
      <div></div>
      <Divider color={Colors.brand600} />
      <div></div>
      <ProfileImage size="3rem" account={account} />
    </nav>
  );
}

export default NavBar;
