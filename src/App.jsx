import { useState } from "react";

import {
  HomeIcon,
  UsersIcon,
  BarChartIcon,
  CheckSquareIcon,
  FlagIcon,
  LayersIcon,
  SettingsIcon,
  NavBar,
  LifeBuoyIcon,
} from "./components";

import "./App.css";
import { Colors } from "./constants/ui";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="bg-brand-700 flex min-h-screen">
      <NavBar
        logo={<h3 className="text-display-sm font-semibold">W</h3>}
        account={{ name: "Emily Darson", email: "example@test.com" }}
        navItems={[
          {
            icon: <HomeIcon color={Colors.brand300} size="1.5rem" />,
            label: "home",
            onClick: () => {},
          },
          {
            icon: <UsersIcon color={Colors.brand300} size="1.5rem" />,
            label: "students",
            onClick: () => {},
          },
          {
            icon: <UsersIcon color={Colors.brand300} size="1.5rem" />,
            label: "teachers",
            onClick: () => {},
          },
          {
            icon: <BarChartIcon color={Colors.brand300} size="1.5rem" />,
            label: "dashboard",
            onClick: () => {},
          },
          {
            icon: <LayersIcon color={Colors.brand300} size="1.5rem" />,
            label: "projects",
            onClick: () => {},
          },
          {
            icon: <CheckSquareIcon color={Colors.brand300} size="1.5rem" />,
            label: "tasks",
            onClick: () => {},
          },
          {
            icon: <FlagIcon color={Colors.brand300} size="1.5rem" />,
            label: "reports",
            onClick: () => {},
          },
        ]}
        additionalItems={[
          {
            icon: <LifeBuoyIcon color={Colors.brand300} size="1.5rem" />,
            label: "support",
            onClick: () => {},
          },
          {
            icon: <SettingsIcon color={Colors.brand300} size="1.5rem" />,
            label: "settings",
            onClick: () => {},
          },
        ]}
        isExpanded={expanded}
      />
    </main>
  );
}

export default App;
