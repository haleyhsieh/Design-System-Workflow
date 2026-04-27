export function ComponentStates() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-[36px]">Component States</h1>
        <span className="text-[12px] uppercase tracking-wider px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
          Coming Soon
        </span>
      </div>
      <p className="text-[14px] text-muted-foreground mb-8">
        This section will explore component interaction states such as hover, active, focus, disabled, loading, success, warning, and error conditions.
      </p>

      <div className="border-2 border-dashed border-border rounded-lg bg-muted/20 p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-muted/50 border border-border mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="text-[18px] mb-2">Documentation In Progress</h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            Component state documentation is currently being developed. This section will include comprehensive guides for interaction states including hover, active, focus, disabled, loading, error, success, and warning conditions across all components.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Interactive States</h4>
          <p className="text-[13px] text-muted-foreground">Hover, active, focus behaviors</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Status States</h4>
          <p className="text-[13px] text-muted-foreground">Loading, disabled, readonly</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Validation States</h4>
          <p className="text-[13px] text-muted-foreground">Success, warning, error feedback</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Accessibility</h4>
          <p className="text-[13px] text-muted-foreground">ARIA attributes and keyboard states</p>
        </div>
      </div>
    </div>
  );
}
