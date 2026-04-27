import { useState } from 'react';

export function ColorDocumentation() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  return (
    <div className="size-full bg-white overflow-auto">
      <div className="max-w-[1400px] mx-auto px-[28px] py-[56px]">
        {/* Language Toggle */}
        <div className="mb-8">
          <div className="inline-flex rounded-[6px] border border-[#cbd5e1] overflow-hidden">
            <button
              onClick={() => setLanguage('zh')}
              className={`px-6 py-2 text-[14px] font-medium transition-colors ${
                language === 'zh'
                  ? 'bg-[#f97316] text-white'
                  : 'bg-white text-[#64748b] hover:bg-[#f8fafc]'
              }`}
            >
              繁體中文
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-6 py-2 text-[14px] font-medium transition-colors ${
                language === 'en'
                  ? 'bg-[#f97316] text-white'
                  : 'bg-white text-[#64748b] hover:bg-[#f8fafc]'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {language === 'zh' ? (
          // Chinese Content
          <div className="flex flex-col gap-[40px]">
            {/* First Section */}
            <div className="bg-white flex flex-col gap-[20px]">
              {/* Title 0.1 */}
              <h1 className="text-[#fe701b] text-[21px] font-bold">
                0.色彩主題管理（Color Theme Management）- 繁體中文 0.1
              </h1>

              {/* Content 0.1 */}
              <div className="text-[14px] leading-[18px] text-black">
                <p className="mb-3">此 Design System 支援多品牌（Multi-brand）色彩架構，適用於 B2B SaaS 醫療行政系統。</p>

                <p className="mb-3">系統主要提供醫療行政與管理流程使用，但不同醫院可能具有各自的品牌識別與主色需求。</p>
                <p className="mb-4">為了支援多組織導入與後續擴充，系統將共用 UI 結構與主題色彩管理分離，透過 Design Token 與 Theme 機制進行管理。</p>

                <h2 className="text-[#fe701b] text-[20px] font-semibold mb-4">Theme 架構說明</h2>

                <p className="mb-2">系統以 <span className="font-semibold">Main</span> 作為核心品牌主題（Default Theme）。</p>
                <p className="mb-4">不同醫院的品牌色彩則透過 Theme Token 切換，而不需重新建立元件或重畫畫面。</p>

                <h3 className="text-[#fe701b] text-[16px] font-semibold mb-4">Theme 範例</h3>

                <ul className="list-disc ml-6 mb-4">
                  <li>Main（系統預設品牌）</li>
                  <li>Green Hospital</li>
                  <li>Dark Blue Hospital</li>
                </ul>

                <p className="mb-4">所有 Theme 皆沿用同一套元件結構，只透過語意化色彩 Token（Semantic Color Token）進行色彩替換。</p>

                <h3 className="text-[#fe701b] text-[16px] font-semibold mb-4">設計邏輯</h3>

                <p className="mb-2">系統不會因不同醫院而重新設計整套介面。</p>
                <p className="mb-4">而是透過共享元件與 Theme 色彩覆寫（Theme Override）方式，讓相同 UI 能快速套用不同品牌格。</p>

                <p className="mb-2">此方式可協助：</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>維持產品一致性</li>
                  <li>降低重複設計成本</li>
                  <li>支援 White-label SaaS 架構</li>
                  <li>提高後續 Theme 擴充彈性</li>
                </ul>

                <h3 className="text-[#fe701b] text-[16px] font-semibold mb-3">Workflow 流程</h3>

                <p className="whitespace-pre-line">
                  Main Theme 建立
                  <br />↓
                  <br />Semantic Color Token Mapping
                  <br />↓
                  <br />Theme Override
                  <br />↓
                  <br />不同醫院品牌展示
                </p>
              </div>
            </div>

            {/* Second Section */}
            <div className="bg-white flex flex-col gap-[20px]">
              {/* Title 0.2 */}
              <h1 className="text-[#fe701b] text-[21px] font-bold">
                0.色彩主題管理（Color Theme Management）- 繁體中文 0.2
              </h1>

              {/* Content 0.2 */}
              <div className="text-[14px] leading-[18px] text-black">
                <h2 className="text-[#fe701b] text-[20px] font-semibold mb-4">實際應用方式</h2>

                <p className="mb-2">系統先以 Main Theme 完成基礎設計稿。</p>
                <p className="mb-2">當需要展示給不同醫院時，可直接切換 Theme Variable。</p>
                <p className="mb-2">例如：</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Green Hospital Theme</li>
                  <li>Dark Blue Hospital Theme</li>
                </ul>
                <p className="mb-4">在不修改元件結構與版面的前提下，畫面即可自動套用不同品牌色彩。</p>

                <h3 className="text-[#fe701b] text-[16px] font-semibold mb-4">Token 架構示意</h3>

                <p className="whitespace-pre-line mb-4">
                  Primitive Color
                  <br />↓
                  <br />Semantic Color
                  <br />↓
                  <br />Theme Mode
                  <br />↓
                  <br />Component Usage
                  <br />↓
                  <br />Hospital Brand Preview
                </p>

                <p className="mb-4">此結構能讓設計系統具備更好的可維護性與多品牌延伸能力，適合應用於多租戶（Multi-tenant）與醫療 SaaS 系統情境</p>
              </div>
            </div>
          </div>
        ) : (
          // English Content
          <div className="flex flex-col gap-[40px]">
            {/* First Section */}
            <div className="bg-white flex flex-col gap-[20px]">
              {/* Title 0.1 */}
              <h1 className="text-[#fe701b] text-[21px] font-bold">
                0.Color Theme Management - ENGLISH 0.1
              </h1>

              {/* Content 0.1 */}
              <div className="text-[14px] leading-[18px] text-black">
                <p className="mb-3">This Design System supports a multi-brand color architecture for B2B SaaS healthcare platforms.</p>

                <p className="mb-3">The product is designed for medical administration workflows, while different hospitals may require their own brand identity and visual styling.</p>

                <p className="mb-4">To support scalability across multiple organizations, the system separates shared UI structure from theme-level color management.</p>

                <h2 className="text-[#fe701b] text-[20px] font-semibold mb-4">Theme Structure</h2>

                <p className="mb-2">A base theme called <span className="font-semibold">Main</span> is used as the core system foundation.</p>

                <p className="mb-4">Additional hospital themes are applied through token-based color replacement without rebuilding components.</p>

                <h3 className="text-[#fe701b] text-[16px] font-semibold mb-4">Theme Examples</h3>

                <ul className="list-disc ml-6 mb-4">
                  <li>Main (Default SaaS Brand)</li>
                  <li>Green Hospital</li>
                  <li>Dark Blue Hospital</li>
                </ul>

                <p className="mb-4">Each theme inherits the same component structure while applying different semantic color mappings.</p>

                <h3 className="text-[#fe701b] text-[16px] font-semibold mb-4">Design Logic</h3>

                <p className="mb-2">Instead of redesigning each interface for every hospital, the system uses a shared component framework.</p>

                <p className="mb-4">Color variables are mapped through Design Tokens, allowing the same UI layout to switch between themes efficiently.</p>

                <p className="mb-2">This approach helps:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>maintain consistency across products</li>
                  <li>reduce duplicated design work</li>
                  <li>support white-label SaaS implementation</li>
                  <li>simplify future theme expansion</li>
                </ul>

                <h3 className="text-[#fe701b] text-[16px] font-semibold mb-3">Workflow</h3>

                <p className="whitespace-pre-line">
                  Main Theme Design
                  <br />↓
                  <br />Semantic Color Token Mapping
                  <br />↓
                  <br />Theme Override
                  <br />↓
                  <br />Hospital-specific Preview
                </p>
              </div>
            </div>

            {/* Second Section */}
            <div className="bg-white flex flex-col gap-[20px]">
              {/* Title 0.2 */}
              <h1 className="text-[#fe701b] text-[21px] font-bold">
                Color Theme Management - ENGLISH 0.2
              </h1>

              {/* Content 0.2 */}
              <div className="text-[14px] leading-[18px] text-black">
                <h2 className="text-[#fe701b] text-[20px] font-semibold mb-4">Example Usage</h2>

                <p className="mb-2">The Main design system is first created using default semantic tokens.</p>
                <p className="mb-2">When presenting to different hospitals, theme variables are switched to display:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Green Hospital theme</li>
                  <li>Dark Blue Hospital theme</li>
                </ul>
                <p className="mb-4">Without rebuilding components or modifying layouts, the interface automatically adapts to the selected brand color system.</p>

                <h3 className="text-[#fe701b] text-[20px] font-semibold mb-4">Token Structure Example</h3>

                <p className="whitespace-pre-line mb-4">
                  Primitive Color
                  <br />↓
                  <br />Semantic Color
                  <br />↓
                  <br />Theme Mode
                  <br />↓
                  <br />Component Usage
                  <br />↓
                  <br />Hospital Brand Preview
                </p>

                <p className="mb-4">This structure creates a scalable and reusable design workflow for multi-client healthcare SaaS products.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
