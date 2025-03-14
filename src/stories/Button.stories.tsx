import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button } from "../form/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<any> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
