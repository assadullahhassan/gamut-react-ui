import { type Meta } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const ArchiveIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="16" height="4" rx="1" />
    <path d="M4 7v9a2 2 0 002 2h8a2 2 0 002-2V7" />
    <path d="M8 11h4" />
  </svg>
);

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,

    parameters: {
    layout: "centered",
    },
    argTypes: {
      theme: {
        control: "select",
        options: [
        'dark',
        'white',
        'blue',
        'blue-light',
        'purple',
        'pink-light',
        'green',
        'green-light',
        ]
      },
        title: { control: 'text' },
        children: { control: 'text' },
        onClose: { action: 'closed' },
    }
} satisfies Meta<typeof Tooltip>;

export default meta

export const Default = {
   args: {
  theme: 'dark',
  title: 'Archive notes',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  },
}

const themes = [
    { name: 'dark' },
    { name: 'white' },
    { name: 'blue' },
    { name: 'blue-light' },
    { name: 'purple' },
    { name: 'pink-light' },
    { name: 'green' },
    { name: 'green-light' },
] as const;

export const Themes = {
    render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px 24px',
        maxWidth: '800px',
        padding: '20px',
        backgroundColor: '#f1f3f5',
        borderRadius: '12px',
      }}
    >
      {themes.map((t) => (
        <Tooltip
          key={t.name}
          theme={t.name}
          title="Archive notes"
          onClose={() => console.log(`Closed ${t.name}`)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
        </Tooltip>
      ))}
    </div>
  )
}