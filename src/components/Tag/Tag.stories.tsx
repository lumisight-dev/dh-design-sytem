import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DHTag from "./Tag";

export default {
  title: "Components/Tag",
  component: DHTag,
  argTypes: {
    variant: {
      type: "string",
      control: "radio",
      options: [
        "is-primary",
        "is-info",
        "is-success",
        "is-warning",
        "is-link",
        "is-danger",
        "is-black",
        "is-dark",
        "is-light",
        "is-white",
        "is-customize",
      ],
      defaultValue: "is-primary",
    },
    size: {
      type: "string",
      control: "radio",
      options: ["is-normal", "is-medium", "is-large"],
      defaultValue: "is-normal",
    },
    isLight: {
      control: "boolean",
      defaultValue: false,
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    backgroundColor: {
      control: "text",
      defaultValue: "#e0f9ea, need to select variant: is-customize",
    },
    color: {
      control: "text",
      defaultValue: "#369d66, need to select variant: is-customize",
    },
    id: {
      control: "text",
      defaultValue: "",
    },
    className: {
      control: "text",
      defaultValue: "some-class-1 some-class-2",
    },
  },
} as ComponentMeta<typeof DHTag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DHTag> = (args) => <DHTag {...args} />;

export const Props = Template.bind({});
Props.args = {
  children: "Status",
};
