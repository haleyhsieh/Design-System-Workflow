export function Spacing() {
  const spacingScale = [
    { name: 'xs', value: '0.25rem', px: '4px' },
    { name: 'sm', value: '0.5rem', px: '8px' },
    { name: 'md', value: '1rem', px: '16px' },
    { name: 'lg', value: '1.5rem', px: '24px' },
    { name: 'xl', value: '2rem', px: '32px' },
    { name: '2xl', value: '3rem', px: '48px' },
    { name: '3xl', value: '4rem', px: '64px' },
  ];

  return (
    <div>
      <h1 className="text-[36px] mb-2">Spacing</h1>
      <p className="text-[14px] text-muted-foreground mb-8">
        Consistent spacing scale for margins, padding, and layout gaps. Based on an 8px grid system.
      </p>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">Spacing Scale</h2>
        <div className="space-y-4">
          {spacingScale.map((space) => (
            <div key={space.name} className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-4 mb-3">
                <code className="bg-muted px-3 py-1 rounded text-[14px] min-w-[60px]">{space.name}</code>
                <span className="text-[14px] text-muted-foreground">{space.value} ({space.px})</span>
              </div>
              <div className="flex items-center">
                <div
                  className="bg-primary h-8"
                  style={{ width: space.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">Usage Examples</h2>

        <div className="border border-border rounded-lg p-6 mb-4">
          <h3 className="text-[18px] mb-4">Component Padding</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-border p-2">
              <div className="bg-accent p-2">
                <p className="text-[14px]">Padding: sm (8px)</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-border p-2">
              <div className="bg-accent p-4">
                <p className="text-[14px]">Padding: md (16px)</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-border p-2">
              <div className="bg-accent p-6">
                <p className="text-[14px]">Padding: lg (24px)</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-border p-2">
              <div className="bg-accent p-8">
                <p className="text-[14px]">Padding: xl (32px)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h3 className="text-[18px] mb-4">Stack Spacing</h3>
          <div className="space-y-4">
            <div className="bg-accent p-4 rounded">
              <p className="text-[14px]">Item 1</p>
            </div>
            <div className="bg-accent p-4 rounded">
              <p className="text-[14px]">Item 2</p>
            </div>
            <div className="bg-accent p-4 rounded">
              <p className="text-[14px]">Item 3</p>
            </div>
          </div>
          <p className="text-[14px] text-muted-foreground mt-4">
            Gap: md (16px) between stack items
          </p>
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full text-[14px]">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 border-b border-border">Token</th>
              <th className="text-left p-4 border-b border-border">Value</th>
              <th className="text-left p-4 border-b border-border">Common Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-4"><code className="bg-muted px-2 py-1 rounded">xs</code></td>
              <td className="p-4">4px</td>
              <td className="p-4 text-muted-foreground">Icon gaps, tight layouts</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><code className="bg-muted px-2 py-1 rounded">sm</code></td>
              <td className="p-4">8px</td>
              <td className="p-4 text-muted-foreground">Button padding, small gaps</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><code className="bg-muted px-2 py-1 rounded">md</code></td>
              <td className="p-4">16px</td>
              <td className="p-4 text-muted-foreground">Default spacing, card padding</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><code className="bg-muted px-2 py-1 rounded">lg</code></td>
              <td className="p-4">24px</td>
              <td className="p-4 text-muted-foreground">Section spacing, large cards</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4"><code className="bg-muted px-2 py-1 rounded">xl</code></td>
              <td className="p-4">32px</td>
              <td className="p-4 text-muted-foreground">Page margins, major sections</td>
            </tr>
            <tr>
              <td className="p-4"><code className="bg-muted px-2 py-1 rounded">2xl - 3xl</code></td>
              <td className="p-4">48px - 64px</td>
              <td className="p-4 text-muted-foreground">Hero sections, large breakpoints</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
