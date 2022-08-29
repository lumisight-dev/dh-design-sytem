import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DHView from "./View";

export default {
  title: "Components/View",
  component: DHView,
  argTypes: {
    className: {
      control: "text",
      defaultValue: "some-class-1 some-class-2",
    },
    style: {
      control: "text",
    },
    renderIf: {
      control: "boolean",
      defaultValue: true,
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    isRow: {
      control: "boolean",
      defaultValue: true,
    },
    isRowWrap: {
      control: "boolean",
      defaultValue: false,
    },
    justify: {
      type: "string",
      control: "radio",
      options: [
        "center",
        "space-between",
        "flex-start",
        "flex-end",
        "space-around",
        "space-evenly",
      ],
      defaultValue: "flex-start",
    },
    align: {
      type: "string",
      control: "radio",
      options: ["flex-start", "center", "flex-end"],
      defaultValue: "flex-start",
    },
    flexGrow: {
      type: "number",
      defaultValue: 0,
    },
  },
} as ComponentMeta<typeof DHView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DHView> = (args) => <DHView {...args} />;

export const Props = Template.bind({});
Props.args = {
  children: (
    <>
      {[
        {
          label: "Item 1",
        },
        {
          label: "Item 2",
        },
        {
          label: "Item 3",
        },
      ].map((_, i) => (
        <div
          style={{
            margin: "16px",
            padding: "8px",
            border: "1px solid #ececec",
          }}
          key={i}
        >
          {_.label}
        </div>
      ))}
    </>
  ),
};
