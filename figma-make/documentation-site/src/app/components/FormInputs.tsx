export function FormInputs() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-[36px]">Form Inputs</h1>
        <span className="text-[12px] uppercase tracking-wider px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
          Coming Soon
        </span>
      </div>
      <p className="text-[14px] text-muted-foreground mb-8">
        This section will document form-related components including input fields, validation states, labels, helper text, error handling, and interaction behaviors.
      </p>

      <div className="border-2 border-dashed border-border rounded-lg bg-muted/20 p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-muted/50 border border-border mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-[18px] mb-2">Documentation In Progress</h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            Form input component guidelines are currently being developed. This section will include comprehensive documentation for text inputs, textareas, selects, checkboxes, radio buttons, and form validation patterns.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Text Inputs</h4>
          <p className="text-[13px] text-muted-foreground">Input fields, textarea, and text-based form controls</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Selection Controls</h4>
          <p className="text-[13px] text-muted-foreground">Checkboxes, radio buttons, and select dropdowns</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card/50">
          <h4 className="text-[14px] mb-2">Validation States</h4>
          <p className="text-[13px] text-muted-foreground">Error handling, success states, and inline validation</p>
        </div>
      </div>
    </div>
  );
}
