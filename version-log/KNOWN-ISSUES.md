
# Known Issues

## v0.2 - Figma Make Component Prop Mapping
####  Date: 2026-04-27
#### Issue
Generated UI Kit components may require manual prop alignment when naming conventions differ from expected API structure.<br>
當命名約定與預期 API 結構不同時，產生的 UI Kit 元件可能需要手動調整屬性對齊方式。<br>

#### Impact
Some components may fail to bind correctly after import.<br>
導入後，某些元件可能無法正確綁定。<br>

#### Status
部分解決－仍需手動驗證。<br>

#### 說明
- 原始ColorTokens.tsx :
  ```
  export function ColorTokens() {
  const colors = [
    { name: 'Primary', var: '--primary', value: '#030213', description: 'Main brand color, primary actions' },
    { name: 'Primary Foreground', var: '--primary-foreground', value: 'oklch(1 0 0)', description: 'Text on primary backgrounds' },
    { name: 'Secondary', var: '--secondary', value: 'oklch(0.95 0.0058 264.53)', description: 'Secondary actions, accents' },
    { name: 'Secondary Foreground', var: '--secondary-foreground', value: '#030213', description: 'Text on secondary backgrounds' },
    { name: 'Accent', var: '--accent', value: '#e9ebef', description: 'Highlighted UI elements' },
    { name: 'Accent Foreground', var: '--accent-foreground', value: '#030213', description: 'Text on accent backgrounds' },
    { name: 'Destructive', var: '--destructive', value: '#d4183d', description: 'Error states, delete actions' },
    { name: 'Destructive Foreground', var: '--destructive-foreground', value: '#ffffff', description: 'Text on destructive backgrounds' },
    { name: 'Muted', var: '--muted', value: '#ececf0', description: 'Disabled states, subtle backgrounds' },
    { name: 'Muted Foreground', var: '--muted-foreground', value: '#717182', description: 'Secondary text, placeholders' },
    { name: 'Border', var: '--border', value: 'rgba(0, 0, 0, 0.1)', description: 'Default border color' },
    { name: 'Background', var: '--background', value: '#ffffff', description: 'Main background color' },
    { name: 'Foreground', var: '--foreground', value: 'oklch(0.145 0 0)', description: 'Main text color' },
  ];

  ```
   - map 方式
     
     ```
     <div className="grid grid-cols-1 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="border border-border rounded-lg p-4 flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-md border border-border flex-shrink-0"
                style={{ backgroundColor: `var(${color.var})` }}
              />
     ```
- 導入後 ColorTokens.tsx :
   ```
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
   .
   .
   .]

   
  ```
   
   - 因為多了semanticColors 和 primitiveColors 必須修正map方式

     
  ```<div className="grid grid-cols-1 gap-4">
         {semanticColors.map((color) => (
    <div key={color.name} className="bg-white border rounded-lg p-4 flex items-center gap-4">
      <div
        className="w-16 h-16 rounded-md border flex-shrink-0"
        style={{ backgroundColor: color.value }}
      />

        
      <div className="space-y-6">
          {primitiveColors.map((group) => (
    <div key={group.name} className="bg-white border rounded-lg p-4">
  
  ```
---

## v0.1 - Variant Token Binding Limitation 綁定限制
#### Date: 2026-04-27
#### Issue
Default class naming does not always align with token-driven variant structure.<br>
預設class名稱並是與基於標記的variant結構<br>

#### Impact
Component styling may not auto-map correctly.<br>
元件樣式可能無法正確自動對應。

#### Status
Workaround exists through API object adjustment.<br>
可以透過調整 API 物件來解決此問題。

#### 說明
- 預設語法標記方式
```
 <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Primary Button
</button>
```
- Figma UI Kit 沒有 classname - 儘管figma design sysytem 參考了 Tailwindcss 但在轉換上無法直接對應生成class name 
  ```
  <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                variant="outlined"
                iconLeft={<HeartIcon className="w-4 h-4" />}
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
  </div>
  ```


 - 解決方式，請figma make 改成 inline style 在Design system Documentation上顯示，這樣瀏覽吃到的css就是正確的figma檔案樣式




```
Please follow the same structure and interaction pattern as the Primary Button section.

Create the same single-button interactive demo for:
- Secondary
- Success
- Warning
- Info
- Danger

Important:
- Each variant should use only ONE interactive button.
- Do not create separate buttons for Default, Hover, Active, Focus.
- The button should naturally show hover, active, and focus states through real interaction.
- Disabled can be shown as one static disabled example if needed.
- Keep the same layout, spacing, documentation style, and token reference format as the Primary Button section.

Use these token values:

Secondary:
Default bg #f1f5f9
Text #0f172a
Border #f1f5f9
Hover bg #e2e8f0
Active bg #cbd5e1
Focus ring rgba(100,116,139,0.35)

Success:
Default bg #22c55e
Text #ffffff
Border #22c55e
Hover bg #16a34a
Active bg #15803d
Focus ring rgba(34,197,94,0.35)

Warning:
Default bg #f97316
Text #ffffff
Border #f97316
Hover bg #ea580c
Active bg #c2410c
Focus ring rgba(249,115,22,0.35)

Info:
Default bg #3b82f6
Text #ffffff
Border #3b82f6
Hover bg #2563eb
Active bg #1d4ed8
Focus ring rgba(59,130,246,0.35)

Danger:
Default bg #ef4444
Text #ffffff
Border #ef4444
Hover bg #dc2626
Active bg #b91c1c
Focus ring rgba(239,68,68,0.35)

Keep token names visible as documentation references, but use inline styles or CSS variables that work correctly in Figma Make preview.
Do not modify other pages.
```
