import { configure, setAddon } from "@storybook/react";
import withPropsCombinations, { setDefaults } from "react-storybook-addon-props-combinations";

import infoAddon from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";

function loadStories() {
  require("../modules/index.js");

  // You can require as many stories as you need.
}

setOptions({
  name: "Stubhub",
  url: "https://www.stubhub.com",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true
});

setAddon(infoAddon);
setAddon(withPropsCombinations);

setDefaults({
  // overwrite global defaults here
});

configure(loadStories, module);
