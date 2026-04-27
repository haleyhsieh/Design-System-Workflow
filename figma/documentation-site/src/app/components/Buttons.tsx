import { Button } from '@make-kits/design-system-workflow-iiot/dist/app/components/Button';

export function Buttons() {
  return (
    <div>
      <h1 className="text-[36px] mb-2">Button</h1>
      <p className="text-[14px] mb-8" style={{ color: '#64748b' }}>
        Button component with multiple variants, sizes, and states for different use cases.
      </p>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">Variants</h2>

        <div className="rounded-lg p-6 mb-6" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
          <h3 className="text-[18px] mb-4">Primary</h3>

          <div className="mb-6">
            <h4 className="text-[14px] mb-3" style={{ color: '#334155' }}>Interactive Preview</h4>
            <p className="text-[13px] mb-4" style={{ color: '#64748b' }}>
              Interact with the button below to see state changes: hover for darker color, click for active state, and tab/click for focus ring.
            </p>

            <div className="flex flex-wrap gap-6 mb-4">
              <Button severity="primary" variant="filled" rounded="default">
                Primary Button
              </Button>

              <Button severity="primary" variant="filled" rounded="default" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-md" style={{ backgroundColor: '#f1f5f9' }}>
            <p className="text-[14px] mb-3" style={{ color: '#64748b', fontWeight: '500' }}>State Specifications:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px]">
              <div>
                <strong>Default:</strong> bg: #10b981 • text: #ffffff
              </div>
              <div>
                <strong>Hover:</strong> bg: #059669 • border: #059669
              </div>
              <div>
                <strong>Focus:</strong> ring: rgba(16,185,129,0.35)
              </div>
              <div>
                <strong>Active:</strong> bg: #047857 • border: #047857
              </div>
              <div>
                <strong>Disabled:</strong> opacity: 0.3 • cursor: not-allowed
              </div>
            </div>

            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
              <p className="text-[13px]" style={{ color: '#64748b' }}>
                <strong>Token Reference:</strong> var(--semantic-color/primary/primary)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-6 mb-6" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
          <h3 className="text-[18px] mb-4">Secondary</h3>

          <div className="mb-6">
            <h4 className="text-[14px] mb-3" style={{ color: '#334155' }}>Interactive Preview</h4>
            <p className="text-[13px] mb-4" style={{ color: '#64748b' }}>
              Interact with the button below to see state changes: hover for darker color, click for active state, and tab/click for focus ring.
            </p>

            <div className="flex flex-wrap gap-6 mb-4">
              <Button severity="secondary" variant="filled" rounded="default">
                Secondary Button
              </Button>

              <Button severity="secondary" variant="filled" rounded="default" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-md" style={{ backgroundColor: '#f1f5f9' }}>
            <p className="text-[14px] mb-3" style={{ color: '#64748b', fontWeight: '500' }}>State Specifications:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px]">
              <div>
                <strong>Default:</strong> bg: #94a3b8 • text: #ffffff
              </div>
              <div>
                <strong>Hover:</strong> bg: #64748b
              </div>
              <div>
                <strong>Focus:</strong> ring: rgba(100,116,139,0.35)
              </div>
              <div>
                <strong>Active:</strong> bg: #475569
              </div>
              <div>
                <strong>Disabled:</strong> opacity: 0.3 • cursor: not-allowed
              </div>
            </div>

            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
              <p className="text-[13px]" style={{ color: '#64748b' }}>
                <strong>Token Reference:</strong> var(--semantic-color/secondary/secondary)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-6 mb-6" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
          <h3 className="text-[18px] mb-4">Success</h3>

          <div className="mb-6">
            <h4 className="text-[14px] mb-3" style={{ color: '#334155' }}>Interactive Preview</h4>
            <p className="text-[13px] mb-4" style={{ color: '#64748b' }}>
              Interact with the button below to see state changes: hover for darker color, click for active state, and tab/click for focus ring.
            </p>

            <div className="flex flex-wrap gap-6 mb-4">
              <Button severity="success" variant="filled" rounded="default">
                Success Button
              </Button>

              <Button severity="success" variant="filled" rounded="default" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-md" style={{ backgroundColor: '#f1f5f9' }}>
            <p className="text-[14px] mb-3" style={{ color: '#64748b', fontWeight: '500' }}>State Specifications:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px]">
              <div>
                <strong>Default:</strong> bg: #22c55e • text: #ffffff
              </div>
              <div>
                <strong>Hover:</strong> bg: #16a34a • border: #16a34a
              </div>
              <div>
                <strong>Focus:</strong> ring: rgba(34,197,94,0.35)
              </div>
              <div>
                <strong>Active:</strong> bg: #15803d • border: #15803d
              </div>
              <div>
                <strong>Disabled:</strong> opacity: 0.3 • cursor: not-allowed
              </div>
            </div>

            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
              <p className="text-[13px]" style={{ color: '#64748b' }}>
                <strong>Token Reference:</strong> var(--semantic-color/success/success)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-6 mb-6" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
          <h3 className="text-[18px] mb-4">Warning</h3>

          <div className="mb-6">
            <h4 className="text-[14px] mb-3" style={{ color: '#334155' }}>Interactive Preview</h4>
            <p className="text-[13px] mb-4" style={{ color: '#64748b' }}>
              Interact with the button below to see state changes: hover for darker color, click for active state, and tab/click for focus ring.
            </p>

            <div className="flex flex-wrap gap-6 mb-4">
              <Button severity="warning" variant="filled" rounded="default">
                Warning Button
              </Button>

              <Button severity="warning" variant="filled" rounded="default" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-md" style={{ backgroundColor: '#f1f5f9' }}>
            <p className="text-[14px] mb-3" style={{ color: '#64748b', fontWeight: '500' }}>State Specifications:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px]">
              <div>
                <strong>Default:</strong> bg: #f97316 • text: #ffffff
              </div>
              <div>
                <strong>Hover:</strong> bg: #ea580c • border: #ea580c
              </div>
              <div>
                <strong>Focus:</strong> ring: rgba(249,115,22,0.35)
              </div>
              <div>
                <strong>Active:</strong> bg: #c2410c • border: #c2410c
              </div>
              <div>
                <strong>Disabled:</strong> opacity: 0.3 • cursor: not-allowed
              </div>
            </div>

            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
              <p className="text-[13px]" style={{ color: '#64748b' }}>
                <strong>Token Reference:</strong> var(--semantic-color/warning/warning)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-6 mb-6" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
          <h3 className="text-[18px] mb-4">Info</h3>

          <div className="mb-6">
            <h4 className="text-[14px] mb-3" style={{ color: '#334155' }}>Interactive Preview</h4>
            <p className="text-[13px] mb-4" style={{ color: '#64748b' }}>
              Interact with the button below to see state changes: hover for darker color, click for active state, and tab/click for focus ring.
            </p>

            <div className="flex flex-wrap gap-6 mb-4">
              <Button severity="info" variant="filled" rounded="default">
                Info Button
              </Button>

              <Button severity="info" variant="filled" rounded="default" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-md" style={{ backgroundColor: '#f1f5f9' }}>
            <p className="text-[14px] mb-3" style={{ color: '#64748b', fontWeight: '500' }}>State Specifications:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px]">
              <div>
                <strong>Default:</strong> bg: #3b82f6 • text: #ffffff
              </div>
              <div>
                <strong>Hover:</strong> bg: #2563eb • border: #2563eb
              </div>
              <div>
                <strong>Focus:</strong> ring: rgba(59,130,246,0.35)
              </div>
              <div>
                <strong>Active:</strong> bg: #1d4ed8 • border: #1d4ed8
              </div>
              <div>
                <strong>Disabled:</strong> opacity: 0.3 • cursor: not-allowed
              </div>
            </div>

            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
              <p className="text-[13px]" style={{ color: '#64748b' }}>
                <strong>Token Reference:</strong> var(--semantic-color/info/info)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-6 mb-6" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
          <h3 className="text-[18px] mb-4">Danger (Destructive)</h3>

          <div className="mb-6">
            <h4 className="text-[14px] mb-3" style={{ color: '#334155' }}>Interactive Preview</h4>
            <p className="text-[13px] mb-4" style={{ color: '#64748b' }}>
              Interact with the button below to see state changes: hover for darker color, click for active state, and tab/click for focus ring.
            </p>

            <div className="flex flex-wrap gap-6 mb-4">
              <Button severity="danger" variant="filled" rounded="default">
                Delete
              </Button>

              <Button severity="danger" variant="filled" rounded="default" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-md" style={{ backgroundColor: '#f1f5f9' }}>
            <p className="text-[14px] mb-3" style={{ color: '#64748b', fontWeight: '500' }}>State Specifications:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px]">
              <div>
                <strong>Default:</strong> bg: #ef4444 • text: #ffffff
              </div>
              <div>
                <strong>Hover:</strong> bg: #dc2626 • border: #dc2626
              </div>
              <div>
                <strong>Focus:</strong> ring: rgba(239,68,68,0.35)
              </div>
              <div>
                <strong>Active:</strong> bg: #b91c1c • border: #b91c1c
              </div>
              <div>
                <strong>Disabled:</strong> opacity: 0.3 • cursor: not-allowed
              </div>
            </div>

            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
              <p className="text-[13px]" style={{ color: '#64748b' }}>
                <strong>Token Reference:</strong> var(--semantic-color/danger/danger)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-6" style={{ border: '1px solid #e2e8f0' }}>
          <h3 className="text-[18px] mb-4">Outline Variants</h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button severity="primary" variant="outlined" rounded="default">
              Outline Primary
            </Button>
            <Button severity="success" variant="outlined" rounded="default">
              Outline Success
            </Button>
            <Button severity="danger" variant="outlined" rounded="default">
              Outline Danger
            </Button>
            <Button severity="secondary" variant="outlined" rounded="default" disabled>
              Disabled
            </Button>
          </div>
          <div className="p-4 rounded-md" style={{ backgroundColor: '#f1f5f9' }}>
            <p className="text-[14px] mb-2" style={{ color: '#64748b' }}>Use Case:</p>
            <p className="text-[12px]" style={{ color: '#64748b' }}>Secondary actions, less emphasis, ghost buttons. Pairs well with filled buttons.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">Rounded Variants</h2>
        <div className="rounded-lg p-6" style={{ border: '1px solid #e2e8f0' }}>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Button severity="primary" variant="filled" rounded="default">
              Default
            </Button>
            <Button severity="primary" variant="filled" rounded="pill">
              Pill Button 
            </Button>
            <Button severity="primary" variant="filled" rounded="square">
              Square
            </Button>
          </div>
          <div className="p-4 rounded-md" style={{ backgroundColor: '#f1f5f9' }}>
            <p className="text-[14px] mb-2" style={{ color: '#64748b' }}>Use Case:</p>
            <p className="text-[12px]" style={{ color: '#64748b' }}>Choose the border radius that matches your design system. Default provides balanced rounding, Pill for maximum rounding, and Square for sharp edges.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">States</h2>
        <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
          <table className="w-full text-[14px]">
            <thead style={{ backgroundColor: '#f8fafc' }}>
              <tr>
                <th className="text-left p-4" style={{ borderBottom: '1px solid #e2e8f0' }}>State</th>
                <th className="text-left p-4" style={{ borderBottom: '1px solid #e2e8f0' }}>Description</th>
                <th className="text-left p-4" style={{ borderBottom: '1px solid #e2e8f0' }}>Visual Change</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td className="p-4">Default</td>
                <td className="p-4" style={{ color: '#64748b' }}>Initial resting state</td>
                <td className="p-4">Full opacity, base color</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td className="p-4">Hover</td>
                <td className="p-4" style={{ color: '#64748b' }}>Mouse over interaction</td>
                <td className="p-4">Slightly darker (90% opacity or darken 10%)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td className="p-4">Focus</td>
                <td className="p-4" style={{ color: '#64748b' }}>Keyboard navigation</td>
                <td className="p-4">Ring outline, maintains hover state</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td className="p-4">Active</td>
                <td className="p-4" style={{ color: '#64748b' }}>Click/press state</td>
                <td className="p-4">Further darkened, slight scale transform</td>
              </tr>
              <tr>
                <td className="p-4">Disabled</td>
                <td className="p-4" style={{ color: '#64748b' }}>Non-interactive</td>
                <td className="p-4">30% opacity, cursor-not-allowed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg p-6" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
        <h3 className="text-[18px] mb-4">Design System Integration</h3>
        <div className="space-y-4 text-[14px]">
          <div>
            <h4 className="text-[14px] mb-2">Semantic Color Tokens</h4>
            <p style={{ color: '#64748b' }}>
              All button variants use semantic color tokens from the IIoT Design System. This ensures consistent theming and easy updates across the application.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] mb-2">Status Communication</h4>
            <p style={{ color: '#64748b' }}>
              Button colors communicate intent: Primary for main actions, Success for confirmations, Warning for caution, Danger for destructive actions, Info for neutral feedback.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] mb-2">Industrial UI Context</h4>
            <p style={{ color: '#64748b' }}>
              Designed for industrial IoT interfaces where clear status indication and operational clarity are critical. All states provide immediate visual feedback.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] mb-2">Accessibility</h4>
            <p style={{ color: '#64748b' }}>
              All color combinations meet WCAG AA contrast requirements. Include clear focus indicators and minimum 44×44px touch targets for mobile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}