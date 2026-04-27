export function TokenMapping() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-[36px]">Token Mapping</h1>
        <span className="text-[12px] uppercase tracking-wider px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
          Coming Soon
        </span>
      </div>
      <p className="text-[14px] text-muted-foreground mb-8">
        This section will explain how design tokens are mapped between Figma Variables, JSON Tokens, SCSS variables, utility classes, and frontend implementation.
      </p>

      <div className="border-2 border-dashed border-border rounded-lg bg-muted/20 p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-muted/50 border border-border mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-[18px] mb-2">Documentation In Progress</h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            Token mapping documentation is currently being developed. This section will explain the complete flow of design tokens from Figma Variables through JSON exports, SCSS variables, Tailwind utilities, and final frontend implementation.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Figma Variables</h4>
          <p className="text-[13px] text-muted-foreground">Design token definitions in Figma</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Token Architecture</h4>
          <p className="text-[13px] text-muted-foreground">Primitive, semantic, and component layers</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Frontend Integration</h4>
          <p className="text-[13px] text-muted-foreground">CSS variables and utility class mapping</p>
        </div>
      </div>
    </div>
  );
}
