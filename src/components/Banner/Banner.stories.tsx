import type { Meta, StoryObj } from "@storybook/react-vite";

import { Banner, type BannerType, type BannerVariant} from "./Banner";
import type { ReactNode } from "react";

const meta = {
  title: "Components/Banner",
  component: Banner,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        'multiline', 'singleline'
      ],
    },

    type: {
      control: "inline-radio",
      options: [
        'success', 'warning', 'error', 'neutral'
      ],
    },

    icon: {
      control: false,
    },
  },

  args: {
    children: "Banner",
    variant: "singleline",
    type: "success",
  },
} satisfies Meta<typeof Banner>;

export default meta;

// type Story = StoryObj<typeof meta>;


export const Default = {};

export const Types = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      <Banner title="Notification" type="neutral">
      </Banner>

      <Banner title="Notification" type="success">
      </Banner>

      <Banner title="Notification" type="warning">
      </Banner>

      <Banner title="Notification" type="error">
      </Banner>
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}
    >
      <Banner title="Notification" variant="singleline" type="success">
      </Banner>

      <Banner title="Notification" variant="multiline" type="success" >
        Congratulations! Your settings have been saved.
      </Banner>
    </div>
  ),
};
