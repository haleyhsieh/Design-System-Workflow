import { ColorCard } from './ColorCard';
import { SemanticColorCard } from './SemanticColorCard';
import { CopyIcon } from './icons';

const turquoiseGreenColors = [
  { shade: '50', light: '#ecfdf5' },
  { shade: '100', light: '#d1fae5' },
  { shade: '200', light: '#a7f3d0' },
  { shade: '300', light: '#6ee7b7' },
  { shade: '400', light: '#34d399' },
  { shade: '500', light: '#10b981' },
  { shade: '600', light: '#059669' },
  { shade: '700', light: '#047857' },
  { shade: '800', light: '#065f46' },
  { shade: '900', light: '#064e3b' },
  { shade: '950', light: '#022c22' },
];

const blueColors = [
  { shade: '50', light: '#eff6ff' },
  { shade: '100', light: '#dbeafe' },
  { shade: '200', light: '#bfdbfe' },
  { shade: '300', light: '#93c5fd', dark: '#93c5fd' },
  { shade: '400', light: '#60a5fa' },
  { shade: '500', light: '#3b82f6' },
  { shade: '600', light: '#2563eb' },
  { shade: '700', light: '#1d4ed8' },
  { shade: '800', light: '#1e40af' },
  { shade: '900', light: '#1e3a8a' },
  { shade: '950', light: '#172554' },
];

const redColors = [
  { shade: '50', light: '#fef2f2', dark: '#fef2f2' },
  { shade: '100', light: '#fee2e2', dark: '#fee2e2' },
  { shade: '200', light: '#fecaca' },
  { shade: '300', light: '#fca5a5' },
  { shade: '400', light: '#f87171' },
  { shade: '500', light: '#ef4444' },
  { shade: '600', light: '#dc2626', dark: '#dc2626' },
  { shade: '700', light: '#b91c1c', dark: '#b91c1c' },
  { shade: '800', light: '#991b1b', dark: '#991b1b' },
  { shade: '900', light: '#7f1d1d', dark: '#7f1d1d' },
  { shade: '950', light: '#450a0a' },
];

const orangeColors = [
  { shade: '50', light: '#fff7ed', dark: '#fff7ed' },
  { shade: '100', light: '#ffedd5', dark: '#ffedd5' },
  { shade: '200', light: '#fed7aa', dark: '#fed7aa' },
  { shade: '300', light: '#fdba74', dark: '#fdba74' },
  { shade: '400', light: '#fb923c', dark: '#fb923c' },
  { shade: '500', light: '#f97316', dark: '#f97316' },
  { shade: '600', light: '#ea580c', dark: '#ea580c' },
  { shade: '700', light: '#c2410c', dark: '#c2410c' },
  { shade: '800', light: '#9a3412', dark: '#9a3412' },
  { shade: '900', light: '#7c2d12', dark: '#7c2d12' },
  { shade: '950', light: '#431407', dark: '#431407' },
];

const skyColors = [
  { shade: '50', light: '#f0f9ff', dark: '#f0f9ff' },
  { shade: '100', light: '#e0f2fe', dark: '#e0f2fe' },
  { shade: '200', light: '#bae6fd', dark: '#bae6fd' },
  { shade: '300', light: '#7dd3fc', dark: '#7dd3fc' },
  { shade: '400', light: '#38bdf8', dark: '#38bdf8' },
  { shade: '500', light: '#0ea5e9', dark: '#0ea5e9' },
  { shade: '600', light: '#0284c7', dark: '#0284c7' },
  { shade: '700', light: '#0369a1', dark: '#0369a1' },
  { shade: '800', light: '#075985', dark: '#075985' },
  { shade: '900', light: '#0c4a6e', dark: '#0c4a6e' },
  { shade: '950', light: '#082f49', dark: '#082f49' },
];

const greenColors = [
  { shade: '50', light: '#f0fdf4', dark: '#f0fdf4' },
  { shade: '100', light: '#dcfce7', dark: '#dcfce7' },
  { shade: '200', light: '#bbf7d0', dark: '#bbf7d0' },
  { shade: '300', light: '#86efac', dark: '#86efac' },
  { shade: '400', light: '#4ade80', dark: '#4ade80' },
  { shade: '500', light: '#22c55e', dark: '#22c55e' },
  { shade: '600', light: '#16a34a', dark: '#16a34a' },
  { shade: '700', light: '#15803d', dark: '#15803d' },
  { shade: '800', light: '#166534', dark: '#166534' },
  { shade: '900', light: '#14532d', dark: '#14532d' },
  { shade: '950', light: '#052e16', dark: '#052e16' },
];

const surfaceColors = [
  { shade: '0', light: '#ffffff', dark: '#fafafa' },
  { shade: '50', light: '#f8fafc' },
  { shade: '100', light: '#f1f5f9' },
  { shade: '200', light: '#e2e8f0' },
  { shade: '300', light: '#cbd5e1' },
  { shade: '400', light: '#94a3b8' },
  { shade: '500', light: '#64748b' },
  { shade: '600', light: '#475569' },
  { shade: '700', light: '#334155' },
  { shade: '800', light: '#1e293b' },
  { shade: '900', light: '#0f172a' },
  { shade: '950', light: '#020617', dark: '#09090b' },
];

const semanticColors = [
  { name: 'primary', color: '#10b981', reference: 'turquoise-green-500' },
  { name: 'secondary', color: '#94a3b8', reference: 'surface-400' },
  { name: 'success', color: '#22c55e', reference: 'green-500' },
  { name: 'warning', color: '#f97316', reference: 'orange-500' },
  { name: 'danger', color: '#ef4444', reference: 'red-500' },
  { name: 'info', color: '#0ea5e9', reference: 'sky-500' },
];

export function ColorPalette() {
  return (
    <div className="size-full bg-white overflow-auto">
      <div className="max-w-[1400px] mx-auto px-[28px] py-[56px]">
        {/* Header */}
        <div className="bg-[#fe701b] rounded-[6px] mb-8">
          <div className="flex items-center p-[14px] gap-[14px]">
            <div className="bg-white flex items-center p-[10px] rounded-[24px] shrink-0">
              <CopyIcon className="w-[28px] h-[28px]" fill="#fe701b" />
            </div>
            <div className="flex-1 flex flex-col gap-[3.5px] text-white">
              <p className="font-bold text-[21px]">1.Primitive Color 基礎色.原始色票</p>
              <p className="font-normal text-[20px]">1.1</p>
            </div>
          </div>
        </div>

        {/* Semantic Color Section */}
        <div className="mb-12">
          <h2 className="text-[#f97316] text-[20px] font-semibold mb-6">
            Semantic Color - 語意色
          </h2>
          <div className="flex flex-wrap gap-4">
            {semanticColors.map((color) => (
              <SemanticColorCard
                key={color.name}
                name={color.name}
                lightColor={color.color}
                lightReference={color.reference}
              />
            ))}
          </div>
        </div>

        {/* Main Primitive Color Section */}
        <div className="mb-8">
          <h2 className="text-[#f97316] text-[24px] font-semibold mb-6">
            Main Primitive Color - Main 主品牌基礎色
          </h2>

          {/* Turquoise-green */}
          <div className="mb-8">
            <h3 className="text-[20px] font-semibold mb-4">Turquoise-green</h3>
            <div className="flex flex-wrap gap-4">
              {turquoiseGreenColors.map((color) => (
                <ColorCard
                  key={color.shade}
                  shade={color.shade}
                  lightColor={color.light}
                  darkColor={color.dark}
                />
              ))}
            </div>
          </div>

          {/* Blue */}
          <div className="mb-8">
            <h3 className="text-[20px] font-semibold mb-4">Blue</h3>
            <div className="flex flex-wrap gap-4">
              {blueColors.map((color) => (
                <ColorCard
                  key={color.shade}
                  shade={color.shade}
                  lightColor={color.light}
                  darkColor={color.dark}
                />
              ))}
            </div>
          </div>

          {/* Red */}
          <div className="mb-8">
            <h3 className="text-[20px] font-semibold mb-4">Red</h3>
            <div className="flex flex-wrap gap-4">
              {redColors.map((color) => (
                <ColorCard
                  key={color.shade}
                  shade={color.shade}
                  lightColor={color.light}
                  darkColor={color.dark}
                />
              ))}
            </div>
          </div>

          {/* Orange */}
          <div className="mb-8">
            <h3 className="text-[20px] font-semibold mb-4">Orange</h3>
            <div className="flex flex-wrap gap-4">
              {orangeColors.map((color) => (
                <ColorCard
                  key={color.shade}
                  shade={color.shade}
                  lightColor={color.light}
                  darkColor={color.dark}
                />
              ))}
            </div>
          </div>

          {/* Sky */}
          <div className="mb-8">
            <h3 className="text-[20px] font-semibold mb-4">Sky</h3>
            <div className="flex flex-wrap gap-4">
              {skyColors.map((color) => (
                <ColorCard
                  key={color.shade}
                  shade={color.shade}
                  lightColor={color.light}
                  darkColor={color.dark}
                />
              ))}
            </div>
          </div>

          {/* Green */}
          <div className="mb-8">
            <h3 className="text-[20px] font-semibold mb-4">Green</h3>
            <div className="flex flex-wrap gap-4">
              {greenColors.map((color) => (
                <ColorCard
                  key={color.shade}
                  shade={color.shade}
                  lightColor={color.light}
                  darkColor={color.dark}
                />
              ))}
            </div>
          </div>

          {/* Surface */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4">surface</h3>
            <div className="flex flex-wrap gap-4">
              {surfaceColors.map((color) => (
                <ColorCard
                  key={color.shade}
                  shade={color.shade}
                  lightColor={color.light}
                  darkColor={color.dark}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
