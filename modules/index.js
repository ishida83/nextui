import {Badge, Button as Button2} from "./Form/src";
import {MultiSelect, Popover, SingleSelect} from "./Dropdown/src";
import { Tab, TabList, TabPanel, Tabs } from "./Styles/src/tabs";
import {boolean, number, text, withKnobs} from "@storybook/addon-knobs";

import {Button} from "./Button/lib";
import { Header } from "./Header/src";
import React from "react";
import { Table } from "./Styles/src/";
import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories.addWithInfo("Default", `This is the basic usage with the button with providing a label to show the text.`, () => (
    <Button onClick={()=>{action("clicked"); alert(Button.alpha);}} bgcolor={text("BackgroundColor", "orange")}>
        Hello Button
    </Button>
));

stories.addWithInfo("Button2", `This is the basic usage with the button with providing a label to show the text.`, () => (
  <div>
    <Button2 onClick={action("clicked")} type={"primary"} size={"full-width"}>
        Hello Button2
    </Button2>
    <Button2 onClick={action("clicked")} type={"secondary"} size={""}>
        Hello Button2-full
    </Button2>
  </div>
));
  
stories.addWithPropsCombinations("Button", Button2, {
    onClick: [action("clicked")],
    type: ["primary"],
    size: [
        "", "full-width"
    ],
    children: ["Click"]
});

stories.addWithPropsCombinations("Badge", Badge, {children: ["123"]});

storiesOf("Header", module).addWithPropsCombinations("Header", Header, {
    title: ["IKEA"],
    children: [ <h1> content </h1>]
});

var dropdownOptions = "123456789".split("").map(i => {
  return { name: "name" + i, value: "value" + i };
});

storiesOf("Dropdown", module)
  .addWithPropsCombinations("Popover", Popover, {
    children: [
      <ul>
        <li><a href="">test</a></li>
      </ul>
    ],
    float: ["", "right"]
  })
  .addWithPropsCombinations("SingleSelect", SingleSelect, {
    width: [40],
    onClick: [action("clicked")],
    options: [dropdownOptions]
  })
  .addWithPropsCombinations("MultiSelect", MultiSelect, {
    width: [30],
    onBlur: [action("clicked")],
    options: [dropdownOptions]
  });



stories.addWithInfo("Table", "React Componont for Table", () => (
  <Table>
    <thead>
      <tr>
        <th>Site Name</th>
        <th>Business Name</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Yahoo</td>
        <td>Not Found</td>
        <td className="error">Business Not Found</td>
      </tr>
    </tbody>
  </Table>
));



storiesOf("Tabs", module).addWithInfo("Default", "Default", () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
));
