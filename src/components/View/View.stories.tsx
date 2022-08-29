import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DHView from "./View";

export default {
  title: "Components/View",
  component: DHView,
} as ComponentMeta<typeof DHView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DHView> = (args) => <DHView {...args} />;

export const Direction = Template.bind({});
Direction.args = {
  isRow: true,
  children: (
    <>
      <div
        style={{
          marginRight: "16px",
          paddingRight: "8px",
          borderRight: "1px solid #ececec",
        }}
      >
        Row 1
      </div>
      <div
        style={{
          marginRight: "16px",
          paddingRight: "8px",
          borderRight: "1px solid #ececec",
        }}
      >
        Row 2
      </div>
      <div style={{ marginRight: "16px", borderRight: "1px solid #ececec" }}>
        Row 3
      </div>
    </>
  ),
};
