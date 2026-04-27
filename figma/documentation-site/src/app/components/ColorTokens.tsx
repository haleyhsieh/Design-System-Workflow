export function ColorTokens() {
  const semanticColors = [
    { name: 'Primary', var: '--turquoise-green-500', value: '#10b981', description: 'Main brand color, primary actions (Turquoise Green 500)' },
    { name: 'Secondary', var: '--surface-100', value: '#f1f5f9', description: 'Secondary actions, accents (Surface 100)' },
    { name: 'Success', var: '--green-500', value: '#22c55e', description: 'Success states, confirmations (Green 500)' },
    { name: 'Warning', var: 'orange-500', value: '#f97316', description: 'Warning states, alerts (Orange 500)' },
    { name: 'Danger', var: '--red-500', value: '#ef4444', description: 'Error states, delete actions (Red 500)' },
    { name: 'Info', var: '--blue-500', value: '#3b82f6', description: 'Informational states (Blue 500)' },
  ];

  const primitiveColors = [
    {
      name: 'Turquoise Green',
      shades: [
        { name: '50', var: '--primitive-color/turquoise-green/turquoise-green-50', value: '#ecfdf5' },
        { name: '100', var: '--primitive-color/turquoise-green/turquoise-green-100', value: '#d1fae5' },
        { name: '500', var: '--primitive-color/turquoise-green/turquoise-green-500', value: '#10b981' },
        { name: '700', var: '--primitive-color/turquoise-green/turquoise-green-700', value: '#047857' },
        { name: '900', var: '--primitive-color/turquoise-green/turquoise-green-900', value: '#064e3b' },
      ]
    },
    {
      name: 'Blue',
      shades: [
        { name: '50', var: '--primitive-color/blue/blue-50', value: '#eff6ff' },
        { name: '100', var: '--primitive-color/blue/blue-100', value: '#dbeafe' },
        { name: '500', var: '--primitive-color/blue/blue-500', value: '#3b82f6' },
        { name: '700', var: '--primitive-color/blue/blue-700', value: '#1d4ed8' },
        { name: '900', var: '--primitive-color/blue/blue-900', value: '#1e3a8a' },
      ]
    },
    {
      name: 'Green',
      shades: [
        { name: '50', var: '--primitive-color/green/green-50', value: '#f0fdf4' },
        { name: '100', var: '--primitive-color/green/green-100', value: '#dcfce7' },
        { name: '500', var: '--primitive-color/green/green-500', value: '#22c55e' },
        { name: '700', var: '--primitive-color/green/green-700', value: '#15803d' },
        { name: '900', var: '--primitive-color/green/green-900', value: '#14532d' },
      ]
    },
    {
      name: 'Orange',
      shades: [
        { name: '50', var: '--primitive-color/orange/orange-50', value: '#fff7ed' },
        { name: '100', var: '--primitive-color/orange/orange-100', value: '#ffedd5' },
        { name: '500', var: '--primitive-color/orange/orange-500', value: '#f97316' },
        { name: '700', var: '--primitive-color/orange/orange-700', value: '#c2410c' },
        { name: '900', var: '--primitive-color/orange/orange-900', value: '#7c2d12' },
      ]
    },
    {
      name: 'Red',
      shades: [
        { name: '50', var: '--primitive-color/red/red-50', value: '#fef2f2' },
        { name: '100', var: '--primitive-color/red/red-100', value: '#fee2e2' },
        { name: '500', var: '--primitive-color/red/red-500', value: '#ef4444' },
        { name: '700', var: '--primitive-color/red/red-700', value: '#b91c1c' },
        { name: '900', var: '--primitive-color/red/red-900', value: '#7f1d1d' },
      ]
    },
    {
      name: 'Surface',
      shades: [
        { name: '0', var: '--primitive-color/surface/surface-0', value: '#ffffff' },
        { name: '50', var: '--primitive-color/surface/surface-50', value: '#fafafa' },
        { name: '100', var: '--primitive-color/surface/surface-100', value: '#f1f5f9' },
        { name: '500', var: '--primitive-color/surface/surface-500', value: '#64748b' },
        { name: '700', var: '--primitive-color/surface/surface-700', value: '#334155' },
        { name: '900', var: '--primitive-color/surface/surface-900', value: '#0f172a' },
      ]
    },
  ];

  return (
    <div>
      <h1 className="text-[36px] mb-2">Color Tokens</h1>
      <p className="text-[14px] text-muted-foreground mb-8">
        Design System color tokens from the Workflow IIoT package. Semantic tokens map to primitive color scales for consistent theming.
      </p>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">Semantic Colors</h2>
        <p className="text-[14px] text-muted-foreground mb-4 ">
          High-level semantic tokens that map to primitive color values. Use these for component development.
        </p>
        <div className="grid grid-cols-1 gap-4">
         {semanticColors.map((color) => (
    <div key={color.name} className="bg-white border rounded-lg p-4 flex items-center gap-4">
      <div
        className="w-16 h-16 rounded-md border flex-shrink-0"
        style={{ backgroundColor: color.value }}
      />

              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-[16px]">{color.name}</h3>
                  <code className="text-[12px] text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    var({color.var})
                  </code>
                </div>
                <p className="text-[14px] text-muted-foreground mb-1">{color.description}</p>
                <code className="text-[12px] text-muted-foreground">{color.value}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">Primitive Color Scales</h2>
        <p className="text-[14px] text-muted-foreground mb-4">
          Base color palettes with multiple shades. Each scale ranges from 50 (lightest) to 950 (darkest).
        </p>
        <div className="space-y-6">
          {primitiveColors.map((group) => (
    <div key={group.name} className="bg-white border rounded-lg p-4">
      <h3 className="text-[18px] mb-4">{group.name}</h3>

      <div className="grid grid-cols-5 gap-3">
        {group.shades.map((shade) => (
          <div key={shade.name}>
            <div
              className="h-16 rounded-md border mb-2"
              style={{ backgroundColor: shade.value }}
            />

            <div className="text-[12px]">{shade.name}</div>
            <code className="text-[11px] text-gray-500 break-all">
              {shade.var}
            </code>
            <div className="text-[11px] text-gray-500">
              {shade.value}
            </div>
          </div>
        ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <h3 className="text-[18px] mb-4">Usage Guidelines</h3>
        <div className="space-y-4 text-[14px]">
          <div>
            <h4 className="text-[14px] mb-2">Semantic Tokens</h4>
            <p className="text-muted-foreground">
              Always use semantic tokens (primary, success, warning, danger) for component styling. These map to primitive scales and ensure consistent theming.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] mb-2">Primitive Scales</h4>
            <p className="text-muted-foreground">
              Primitive colors provide full shade ranges (50-950). Use lighter shades for backgrounds and darker shades for text and borders.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] mb-2">IIoT Context</h4>
            <p className="text-muted-foreground">
              This color system is designed for industrial IoT applications, prioritizing clarity, accessibility, and status communication in operational interfaces.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-border rounded-lg overflow-hidden">
        <table className="w-full text-[14px]">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 border-b border-border">Semantic Token</th>
              <th className="text-left p-4 border-b border-border">Maps To</th>
              <th className="text-left p-4 border-b border-border">Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-4">primary</td>
              <td className="p-4"><code className="text-[12px] bg-muted px-2 py-1 rounded">turquoise-green-500</code></td>
              <td className="p-4 text-muted-foreground">Primary actions, brand color, active states</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">success</td>
              <td className="p-4"><code className="text-[12px] bg-muted px-2 py-1 rounded">green-500</code></td>
              <td className="p-4 text-muted-foreground">Success states, confirmations, positive feedback</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">warning</td>
              <td className="p-4"><code className="text-[12px] bg-muted px-2 py-1 rounded">orange-500</code></td>
              <td className="p-4 text-muted-foreground">Warning states, alerts, caution messages</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">danger</td>
              <td className="p-4"><code className="text-[12px] bg-muted px-2 py-1 rounded">red-500</code></td>
              <td className="p-4 text-muted-foreground">Error states, delete actions, critical alerts</td>
            </tr>
            <tr>
              <td className="p-4">info</td>
              <td className="p-4"><code className="text-[12px] bg-muted px-2 py-1 rounded">blue-500</code></td>
              <td className="p-4 text-muted-foreground">Informational messages, neutral feedback</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
