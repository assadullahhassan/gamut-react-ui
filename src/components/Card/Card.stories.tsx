import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card, type CardProps} from "./Card";
import type { ReactNode } from "react";
import { render } from "@testing-library/react";

const meta = {
  title: "Components/Card",
  component: Card,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    isHovered: { control: 'boolean' },
  },

} satisfies Meta<typeof Card>;

export default meta;

// type Story = StoryObj<typeof meta>;


export const Default = {
  render:() => (
      <div 
      style={{
      display:'flex',
      gap:'32px',
      padding:'40px',
      backgroundColor:'#e2e8f0',
      minHeight:'300px',
      alignItems:'center',
      }}>
     <Card title="Easy Deployment">
      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
      sit morbi lobortis.
     </Card>
      </div>
  )
};

export const AllCards = {
  render: () => (
    <div
    style={{
      display: 'flex',
      gap: '32px',
      padding: '40px',
      backgroundColor: '#e2e8f0',
      minHeight: '300px',
      alignItems: 'center',
    }}
  >
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
        Card (Default)
      </p>
      <Card title="Easy Deployment">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </Card>
    </div>

    <div style={{ flex: 1 }}>
      <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
        Card (Hover)
      </p>
      <Card title="Easy Deployment" isHovered={true}>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </Card>
    </div>
  </div>
  ),
};

