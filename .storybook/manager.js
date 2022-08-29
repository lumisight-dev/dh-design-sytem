import { addons } from "@storybook/addons";
import customTheme from "./customTheme";
import favicon from "./public/favicon.png";
import "./titleAddon";
addons.setConfig({
  theme: customTheme,
});

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);
