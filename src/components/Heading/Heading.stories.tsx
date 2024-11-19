import { Meta, StoryObj } from "@storybook/react";

import { Heading } from ".";

const meta: Meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};
