export function Overview() {
  return (
    <div>
      {/* Hero Banner */}
      <div
        className="border rounded-[32px] p-12 mb-16"
        style={{
          background: `
            radial-gradient(
              circle at top left,
              rgba(255,255,255,0.9) 0%,
              rgba(245,247,250,0.95) 35%,
              rgba(236,240,245,1) 100%
            ),
            linear-gradient(
              135deg,
              #f6f8fb 0%,
              #eef2f6 100%
            )
          `,
          borderColor: 'rgba(220,225,232,0.7)',
          boxShadow: `
            0 4px 12px rgba(15,23,42,0.03),
            inset 0 1px 0 rgba(255,255,255,0.7)
          `
        }}
      >
        <div className="max-w-4xl">
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-[0.1em] text-primary font-medium">
              PORTFOLIO DEMO
            </span>
          </div>

          <h1 className="text-[42px] leading-tight mb-6">
            Design System Documentation |<br />
            Figma × Token × Git Workflow
          </h1>

          <p className="text-[16px] text-muted-foreground leading-relaxed max-w-3xl">
            This demo documents a system-oriented UI workflow. The goal is not to create every component from scratch, but to show how components, design tokens, states, and usage rules can be organized for frontend collaboration.
          </p>
        </div>
      </div>

      {/* 專案目的 */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h2 className="text-[28px] mb-4">專案目的</h2>
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            此專案為一個設計文件展示範例，旨在探索如何將以 Figma 為基礎的 Design System，轉化為可瀏覽、可維護且具版本控制機制的設計規範網站。
          </p>
          <p className="text-[15px] text-foreground leading-relaxed">
            並嘗試將 Figma Make、Design System、Design Token 與 Git 版本管理方式結合一起做有效的版本控管，讓設計規範不只停留於設計稿，而能以可瀏覽、可維護的方式支援前端開發與跨部門協作。
          </p>
        </div>
      </section>

      {/* 為什麼我建立這個專案 */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h2 className="text-[28px] mb-4">為什麼我建立這個專案</h2>
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            在實際產品團隊中，Figma 設計稿與前端實作之間，經常存在落差與溝通成本，例如：
          </p>
          <ul className="space-y-2 text-[15px] text-muted-foreground ml-6">
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>設計稿與實際前端瀏覽效果落差</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>元件規範不易查詢</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>工程師需頻繁切換 Figma 與程式碼比對</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>設計變更缺乏可追溯版本紀錄</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 因此，我嘗試建立... */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            因此，我嘗試建立一個介於 Design Guideline 與輕量版 Storybook 之間的流程。
          </p>
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            此專案旨在探索一套能夠串聯以下元素的協作流程：
          </p>
          <ul className="space-y-2 text-[15px] text-muted-foreground ml-6">
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Figma Design System</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Design Tokens / Variables</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>元件規範（Component Guidelines）</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>類似 Storybook 的文件化展示方式（Documentation）</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Git 版本控制機制</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 方法與設計思路 */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h2 className="text-[28px] mb-4">方法與設計思路</h2>
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            此示範專案以 PrimeReact 為基礎的 Design System 作為 UI 架構基底。
          </p>
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            重點並非從零開始建立每一個元件，而是透過文件化方式，整理元件、Design Token、狀態規則與使用方式，讓設計規範能更有效支援前端協作與系統化管理。
          </p>
          <p className="text-[15px] text-foreground leading-relaxed">
            整體流程是以「系統導向的 UI 工作流程」為核心，而非僅停留在視覺設計層面。
          </p>
        </div>
      </section>

      {/* 我的做法結合過往經驗 */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            我的做法結合過往在 SCSS 元件架構、工具化樣式思維，以及前端友善文件整理上的經驗。
          </p>
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            整體架構主要受到以下方向影響：
          </p>
          <ul className="space-y-2 text-[15px] text-muted-foreground ml-6 mb-4">
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>SCSS 元件組織方式（variables、mixins、可重複使用樣式）</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>受 Tailwind CSS 啟發的 utility-first 思維</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>類似 Bootstrap 與 Storybook 的元件文件化模式</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Figma Variables 與前端實作之間進行 Design Token 對應管理</span>
            </li>
          </ul>
          <p className="text-[15px] text-foreground leading-relaxed">
            不同於將 Design System 視為靜態的 Figma 元件庫，此專案更著重探索如何讓設計規範轉化為可瀏覽、可維護，並具備版本管理概念的文件系統，以支援前端開發與跨部門協作。
          </p>
        </div>
      </section>

      {/* 為什麼採用這樣的結構 */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h2 className="text-[28px] mb-4">為什麼採用這樣的結構</h2>
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            在許多專案中，隨著系統規模擴大，Figma 設計檔往往會變得越來越難維護。
          </p>
          <p className="text-[15px] text-foreground leading-relaxed mb-4">
            此工作流程旨在探索一種方式，以達成以下目標：
          </p>
          <ul className="space-y-2 text-[15px] text-muted-foreground ml-6">
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>讓設計決策具備可追溯性</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>提升前端閱讀與理解的效率</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>降低 UI 設計稿與實際實作之間的不一致性</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>支援可擴充、可持續維護的 Design System 管理機制</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Token 與樣式邏輯 - Visual Hierarchy */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h2 className="text-[28px] mb-6">Token 與樣式邏輯</h2>
          <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
            {/* Primitive Token */}
            <div className="w-full">
              <div className="bg-primary/5 border-2 border-primary/20 rounded-lg px-6 py-4 text-center">
                <h3 className="text-[16px] text-primary mb-1">Primitive Token</h3>
                <p className="text-[13px] text-muted-foreground">原始設計值（#030213, 16px, 500）</p>
              </div>
            </div>

            <div className="text-primary text-[24px]">↓</div>

            {/* Semantic Token */}
            <div className="w-full">
              <div className="bg-primary/5 border-2 border-primary/20 rounded-lg px-6 py-4 text-center">
                <h3 className="text-[16px] text-primary mb-1">Semantic Token</h3>
                <p className="text-[13px] text-muted-foreground">語意化命名（color-brand-primary）</p>
              </div>
            </div>

            <div className="text-primary text-[24px]">↓</div>

            {/* SCSS Variable Mapping */}
            <div className="w-full">
              <div className="bg-primary/5 border-2 border-primary/20 rounded-lg px-6 py-4 text-center">
                <h3 className="text-[16px] text-primary mb-1">SCSS Variable Mapping</h3>
                <p className="text-[13px] text-muted-foreground">SCSS 變數對應（$color-primary）</p>
              </div>
            </div>

            <div className="text-primary text-[24px]">↓</div>

            {/* Tailwind Utility Mapping */}
            <div className="w-full">
              <div className="bg-primary/5 border-2 border-primary/20 rounded-lg px-6 py-4 text-center">
                <h3 className="text-[16px] text-primary mb-1">Tailwind Utility Mapping</h3>
                <p className="text-[13px] text-muted-foreground">Tailwind 工具類（bg-primary, text-primary）</p>
              </div>
            </div>

            <div className="text-primary text-[24px]">↓</div>

            {/* Component Usage */}
            <div className="w-full">
              <div className="bg-accent border-2 border-primary rounded-lg px-6 py-4 text-center">
                <h3 className="text-[16px] text-primary mb-1">Component Usage</h3>
                <p className="text-[13px] text-muted-foreground">元件應用（Button, Card, Input）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工作流程 - Horizontal Timeline */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h2 className="text-[28px] mb-6">工作流程</h2>
          <div className="overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px] gap-3">
            <div className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-center">
              <h3 className="text-[14px] mb-1">Figma Design System</h3>
              <p className="text-[12px] text-muted-foreground">設計系統</p>
            </div>

            <div className="text-muted-foreground text-[20px]">→</div>

            <div className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-center">
              <h3 className="text-[14px] mb-1">Figma Variables</h3>
              <p className="text-[12px] text-muted-foreground">設計變數</p>
            </div>

            <div className="text-muted-foreground text-[20px]">→</div>

            <div className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-center">
              <h3 className="text-[14px] mb-1">Tokens Studio</h3>
              <p className="text-[12px] text-muted-foreground">JSON Tokens</p>
            </div>

            <div className="text-muted-foreground text-[20px]">→</div>

            <div className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-center">
              <h3 className="text-[14px] mb-1">Figma Make</h3>
              <p className="text-[12px] text-muted-foreground">文件網站</p>
            </div>

            <div className="text-muted-foreground text-[20px]">→</div>

            <div className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-center">
              <h3 className="text-[14px] mb-1">React Export</h3>
              <p className="text-[12px] text-muted-foreground">元件匯出</p>
            </div>

            <div className="text-muted-foreground text-[20px]">→</div>

            <div className="flex-1 bg-accent border-2 border-primary rounded-lg px-4 py-3 text-center">
              <h3 className="text-[14px] mb-1">Git Version Control</h3>
              <p className="text-[12px] text-muted-foreground">版本控制</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 範圍 - Documentation Cards */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h2 className="text-[28px] mb-4">範圍</h2>
          <p className="text-[15px] text-muted-foreground mb-6">目前演示包括：</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="text-[16px] mb-2">Color / Typography / Spacing</h3>
            <p className="text-[13px] text-muted-foreground">基礎設計規範</p>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="text-[16px] mb-2">Button Component</h3>
            <p className="text-[13px] text-muted-foreground">按鈕元件規範</p>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="text-[16px] mb-2">Form Input</h3>
            <p className="text-[13px] text-muted-foreground">表單輸入規範</p>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="text-[16px] mb-2">Component States</h3>
            <p className="text-[13px] text-muted-foreground">元件狀態管理</p>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="text-[16px] mb-2">Token Mapping</h3>
            <p className="text-[13px] text-muted-foreground">Token 對應邏輯</p>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="text-[16px] mb-2">Version Log</h3>
            <p className="text-[13px] text-muted-foreground">版本更新紀錄</p>
          </div>
        </div>
        </div>
      </section>

      {/* 持續更新中 */}
      <section className="mb-8">
        <div
          className="rounded-[24px] p-10 border"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(220,225,232,0.7)',
            boxShadow: '0 4px 10px rgba(15,23,42,0.03), 0 12px 32px rgba(15,23,42,0.04)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <h2 className="text-[24px] mb-3">持續更新中</h2>
          <p className="text-[15px] text-foreground leading-relaxed">
            此專案為持續建置中的示範作品，後續將逐步補充更多元件規範、Token 對應邏輯與設計文件化範例。
          </p>
        </div>
      </section>
    </div>
  );
}
