import { useState } from 'react';
import { Button, ButtonSeverity } from './components/Button';
import { HeartIcon, CopyIcon } from './components/icons';
import { ColorPalette } from './components/ColorPalette';
import { ColorDocumentation } from './components/ColorDocumentation';

type Tab = 'buttons' | 'colors';
type ColorView = 'palette' | 'documentation';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('buttons');
  const [colorView, setColorView] = useState<ColorView>('palette');
  const severities: ButtonSeverity[] = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

  return (
    <div className="size-full bg-[#f5f5f5] overflow-auto">
      {/* Tab Navigation */}
      <div className="bg-white border-b border-[#e2e8f0] sticky top-0 z-10">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('colors')}
              className={`px-6 py-4 font-medium text-[16px] border-b-2 transition-colors ${
                activeTab === 'colors'
                  ? 'border-[#f97316] text-[#f97316]'
                  : 'border-transparent text-[#64748b] hover:text-[#334155]'
              }`}
            >
              色彩計劃
            </button>
            <button
              onClick={() => setActiveTab('buttons')}
              className={`px-6 py-4 font-medium text-[16px] border-b-2 transition-colors ${
                activeTab === 'buttons'
                  ? 'border-[#f97316] text-[#f97316]'
                  : 'border-transparent text-[#64748b] hover:text-[#334155]'
              }`}
            >
              按鈕元件
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'colors' ? (
        <div className="size-full flex flex-col">
          {/* Color View Selector */}
          <div className="bg-white border-b border-[#e2e8f0] px-8 py-4">
            <div className="max-w-[1200px] mx-auto">
              <select
                value={colorView}
                onChange={(e) => setColorView(e.target.value as ColorView)}
                className="px-4 py-2 border border-[#cbd5e1] rounded-[6px] text-[14px] font-medium text-[#334155] bg-white cursor-pointer hover:border-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
              >
                <option value="palette">色彩系統</option>
                <option value="documentation">色彩說明</option>
              </select>
            </div>
          </div>

          {/* Color Content */}
          <div className="flex-1 overflow-auto">
            {colorView === 'documentation' ? <ColorDocumentation /> : <ColorPalette />}
          </div>
        </div>
      ) : (
        <div className="max-w-[1200px] mx-auto p-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-lg p-6 mb-8 text-white">
            <div className="flex items-center gap-4">
              <CopyIcon className="w-8 h-8" />
              <div>
                <h1 className="font-bold text-[28px]">UI KIT - 按鈕元件</h1>
                <p className="text-[16px] opacity-90">完整的按鈕設計系統</p>
              </div>
            </div>
          </div>

        {/* Basic */}
        <Section title="Basic">
          <div className="flex flex-wrap gap-3">
            <Button severity="primary">Primary</Button>
          </div>
        </Section>

        {/* Severities */}
        <Section title="Severities">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity}>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities - Disabled */}
        <Section title="Severities - Disabled">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity} disabled>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities - Hover State */}
        <Section title="Severities - Hover" subtitle="(滑鼠移到按鈕上查看效果)">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity}>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities - Focus State */}
        <Section title="Severities - Focus" subtitle="(點擊按鈕查看聚焦效果)">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity}>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities - Active State */}
        <Section title="Severities - Active" subtitle="(按住按鈕查看激活效果)">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity}>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined */}
        <Section title="Outlined">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity} variant="outlined">
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined - Hover */}
        <Section title="Outlined - Hover" subtitle="(滑鼠移到按鈕上查看效果)">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity} variant="outlined">
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined - Focus */}
        <Section title="Outlined - Focus" subtitle="(點擊按鈕查看聚焦效果)">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity} variant="outlined">
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined - Active */}
        <Section title="Outlined - Active" subtitle="(按住按鈕查看激活效果)">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity} variant="outlined">
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined Icon Left */}
        <Section title="Outlined Icon Left">
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
        </Section>

        {/* Severities Icon Left */}
        <Section title="Severities Icon Left">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                iconLeft={<HeartIcon className="w-4 h-4" />}
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities Icon Right */}
        <Section title="Severities Icon Right">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                iconRight={<HeartIcon className="w-4 h-4" />}
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities Icon Both */}
        <Section title="Severities Icon Both">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                iconLeft={<HeartIcon className="w-4 h-4" />}
                iconRight={<HeartIcon className="w-4 h-4" />}
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities Icon Only */}
        <Section title="Severities Icon Only">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button key={severity} severity={severity} className="!px-[10px]">
                <HeartIcon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined Icon Right */}
        <Section title="Outlined Icon Right">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                variant="outlined"
                iconRight={<HeartIcon className="w-4 h-4" />}
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined Icon Both */}
        <Section title="Outlined Icon Both">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                variant="outlined"
                iconLeft={<HeartIcon className="w-4 h-4" />}
                iconRight={<HeartIcon className="w-4 h-4" />}
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined Icon Only */}
        <Section title="Outlined Icon Only">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                variant="outlined"
                className="!px-[13px]"
              >
                <HeartIcon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities Pill Buttons */}
        <Section title="Severities Pill Buttons">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                rounded="pill"
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Severities No Rounding Buttons */}
        <Section title="Severities No Rounding Buttons">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                rounded="square"
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

        {/* Outlined Pill Buttons */}
        <Section title="Outlined Pill Buttons">
          <div className="flex flex-wrap gap-3">
            {severities.map((severity) => (
              <Button
                key={severity}
                severity={severity}
                variant="outlined"
                rounded="pill"
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </Button>
            ))}
          </div>
        </Section>

          {/* Usage Example */}
          <Section title="使用範例">
            <div className="bg-[#1e293b] text-white p-6 rounded-lg font-mono text-sm">
              <pre>{`import { Button } from './components/Button';
import { HeartIcon } from './components/icons';

// 基本按鈕
<Button severity="primary">Primary</Button>

// 描邊按鈕
<Button severity="success" variant="outlined">Success</Button>

// 藥丸形狀按鈕
<Button severity="info" rounded="pill">Pill Button</Button>

// 無圓角按鈕
<Button severity="warning" rounded="square">Square Button</Button>

// 禁用狀態
<Button severity="danger" disabled>Disabled</Button>

// 帶圖標的按鈕
<Button severity="info" iconLeft={<HeartIcon />}>
  With Icon
</Button>

// 只有圖標的按鈕
<Button severity="primary" variant="outlined">
  <HeartIcon />
</Button>`}</pre>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
      <div className="mb-4">
        <h2 className="font-semibold text-[24px] text-black">{title}</h2>
        {subtitle && <p className="text-[14px] text-[#64748b] mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}