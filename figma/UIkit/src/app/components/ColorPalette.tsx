import { ColorCard } from './ColorCard';
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
