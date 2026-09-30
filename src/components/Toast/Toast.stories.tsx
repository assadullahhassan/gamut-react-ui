import { type Meta } from "@storybook/react";
import { Toast } from "./Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,

    parameters: {
    layout: "centered",
    },
    argTypes: {
      type: {
        control: "select",
        options: [
          "success",
          "error",
          "warning",
          "information"
        ]
      },
        title: { control: 'text' },
        children: { control: 'text' }
    },
    args: {
            type: "success",
            title:"Success!",
            children: "Your work has been saved"
        }
} satisfies Meta<typeof Toast>;

export default meta

export const Default = {}

export const Types = {
    render: () => (
        <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
      padding: '24px',
      backgroundColor: '#e5e7eb',
    }}
  >
        <div>
        <span style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'monospace' }}>
            popup-success
        </span>
        <Toast type="success" title="Success">
            Your work has been saved
        </Toast>
        </div>

        <div>
        <span style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'monospace' }}>
            popup-warning
        </span>
        <Toast type="warning" title="Warning">
            A network error was detected
        </Toast>
        </div>

        <div>
        <span style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'monospace' }}>
            popup-information
        </span>
        <Toast type="information" title="Information">
            Please read updated information
        </Toast>
        </div>

        <div>
        <span style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'monospace' }}>
            popup-error
        </span>
        <Toast type="error" title="Error">
            Please re-save your work again
        </Toast>
        </div>
    </div>
    )
}