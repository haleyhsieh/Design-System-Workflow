export function Typography() {
  return (
    <div>
      <h1 className="text-[36px] mb-2">Typography</h1>
      <p className="text-[14px] text-muted-foreground mb-8">
        Type scale and hierarchy system for consistent text rendering across all components.
      </p>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">Type Scale</h2>
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6">
            <h1 className="mb-2">Heading 1</h1>
            <p className="text-[14px] text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded mr-2">h1</code>
              36px / Medium / 1.5 line-height
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h2 className="mb-2">Heading 2</h2>
            <p className="text-[14px] text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded mr-2">h2</code>
              24px / Medium / 1.5 line-height
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="mb-2">Heading 3</h3>
            <p className="text-[14px] text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded mr-2">h3</code>
              20px / Medium / 1.5 line-height
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h4 className="mb-2">Heading 4</h4>
            <p className="text-[14px] text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded mr-2">h4</code>
              16px / Medium / 1.5 line-height
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <p className="mb-2">Body Text</p>
            <p className="text-[14px] text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded mr-2">p</code>
              16px / Regular / 1.5 line-height
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <p className="text-[14px] mb-2">Small Text</p>
            <p className="text-[14px] text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded mr-2">.text-sm</code>
              14px / Regular / 1.5 line-height
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <p className="text-[12px] mb-2">Caption Text</p>
            <p className="text-[14px] text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded mr-2">.text-xs</code>
              12px / Regular / 1.5 line-height
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-[24px] mb-4">Font Weights</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full text-[14px]">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 border-b border-border">Token</th>
                <th className="text-left p-4 border-b border-border">Value</th>
                <th className="text-left p-4 border-b border-border">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4"><code className="bg-muted px-2 py-1 rounded">--font-weight-normal</code></td>
                <td className="p-4">400</td>
                <td className="p-4" style={{ fontWeight: 400 }}>The quick brown fox jumps over the lazy dog</td>
              </tr>
              <tr>
                <td className="p-4"><code className="bg-muted px-2 py-1 rounded">--font-weight-medium</code></td>
                <td className="p-4">500</td>
                <td className="p-4" style={{ fontWeight: 500 }}>The quick brown fox jumps over the lazy dog</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-[18px] mb-4">Usage Guidelines</h3>
        <div className="space-y-4 text-[14px]">
          <div>
            <h4 className="text-[14px] mb-2">Hierarchy</h4>
            <p className="text-muted-foreground">
              Use heading levels semantically. h1 for page titles, h2 for major sections, h3 for subsections, h4 for small groupings.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] mb-2">Readability</h4>
            <p className="text-muted-foreground">
              Line length should not exceed 75 characters for optimal readability. Use 1.5 line-height for body text.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] mb-2">Responsive Scaling</h4>
            <p className="text-muted-foreground">
              Font sizes use px units for precision. Consider reducing heading sizes on mobile viewports for better fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
