
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
