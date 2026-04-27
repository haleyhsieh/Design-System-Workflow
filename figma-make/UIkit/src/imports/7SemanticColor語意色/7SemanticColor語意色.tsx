import svgPaths from "./svg-jylouij74j";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.5px] items-start leading-[normal] min-w-px not-italic relative text-white" data-name="text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">1.Semantic Color 語意色</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full">1.1</p>
    </div>
  );
}

function Light() {
  return <div className="bg-[#10b981] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark() {
  return <div className="bg-white flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light />
        <Dark />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light1() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[48px]">Light</p>
      <p className="relative shrink-0 text-black w-[123px]">turquoise-green-500</p>
    </div>
  );
}

function Dark1() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[48px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] text-black w-full">primary</p>
          <Light1 />
          <Dark1 />
        </div>
      </div>
    </div>
  );
}

function BadgePrimaryBackground() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[201px] items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="badge/primary/background">
      <Swatches />
      <Infos />
    </div>
  );
}

function Light2() {
  return <div className="bg-[#94a3b8] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark2() {
  return <div className="bg-white flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches1() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light2 />
        <Dark2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light3() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">surface-300</p>
    </div>
  );
}

function Dark3() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#27272a] text-[14px] w-full">secondary</p>
          <Light3 />
          <Dark3 />
        </div>
      </div>
    </div>
  );
}

function BadgeSecondaryBackground() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] self-stretch shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="badge/secondary/background">
      <Swatches1 />
      <Infos1 />
    </div>
  );
}

function Light4() {
  return <div className="bg-[#22c55e] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark4() {
  return <div className="bg-white flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches2() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light4 />
        <Dark4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light5() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">green-500</p>
    </div>
  );
}

function Dark5() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#27272a] text-[14px] w-full">success</p>
          <Light5 />
          <Dark5 />
        </div>
      </div>
    </div>
  );
}

function BadgeSuccessBackground() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] self-stretch shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="badge/success/background">
      <Swatches2 />
      <Infos2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[10px] relative size-full">
          <BadgePrimaryBackground />
          <BadgeSecondaryBackground />
          <BadgeSuccessBackground />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white h-[285px] relative shrink-0 w-full" data-name="說明">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#fe701b] text-[20px] w-[642px]">Main Primitive Color - Main 主品牌基礎色</p>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Light6() {
  return <div className="bg-[#f97316] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark6() {
  return <div className="bg-white flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches3() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light6 />
        <Dark6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light7() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">orange-400</p>
    </div>
  );
}

function Dark7() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] text-black w-full">warning</p>
          <Light7 />
          <Dark7 />
        </div>
      </div>
    </div>
  );
}

function BadgeWarnBackground() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] self-stretch shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="badge/warn/background">
      <Swatches3 />
      <Infos3 />
    </div>
  );
}

function Light8() {
  return <div className="bg-[#ef4444] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark8() {
  return <div className="bg-white flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches4() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light8 />
        <Dark8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light9() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">red-500</p>
    </div>
  );
}

function Dark9() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Dark10() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Dark">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6d6d6d] text-[12px] w-[55px]">註</p>
    </div>
  );
}

function Infos4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium','Noto_Sans:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">{`danger `}</p>
          <Light9 />
          <Dark9 />
          <Dark10 />
        </div>
      </div>
    </div>
  );
}

function BadgeDangerBackground() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] self-stretch shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="badge/danger/background">
      <Swatches4 />
      <Infos4 />
    </div>
  );
}

function Light10() {
  return <div className="bg-[#0ea5e9] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark11() {
  return <div className="bg-white flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches5() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light10 />
        <Dark11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light11() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">sky-500</p>
    </div>
  );
}

function Dark12() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] text-black w-full">info</p>
          <Light11 />
          <Dark12 />
        </div>
      </div>
    </div>
  );
}

function BadgeInfoBackground() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] self-stretch shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="badge/info/background">
      <Swatches5 />
      <Infos5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[214px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[10px] relative size-full">
          <BadgeWarnBackground />
          <BadgeDangerBackground />
          <BadgeInfoBackground />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white h-[229px] relative shrink-0 w-full" data-name="說明">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip py-[56px] relative shrink-0 w-[674px]">
      <div className="bg-[#fe701b] relative rounded-[6px] shrink-0 w-full" data-name="_Section Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <div className="bg-white content-stretch flex items-center p-[10px] relative rounded-[24px] shrink-0" data-name="_section-header-icon">
              <div className="overflow-clip relative shrink-0 size-[28px]" data-name="copy">
                <div className="absolute inset-[0_10.26%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2564 28">
                    <path clipRule="evenodd" d={svgPaths.p31f14a00} fill="var(--fill-0, #FE701B)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <Text />
          </div>
        </div>
      </div>
      <Component />
      <Component1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.5px] items-start leading-[normal] min-w-px not-italic relative text-white" data-name="text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">色彩主題管理（Color Theme Management）- 繁體中文</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full">1.2</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="說明">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="font-['Inter:Regular','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[642px]">
            <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] font-semibold leading-[18px] mb-0 text-[#fe701b] text-[20px] whitespace-pre-wrap">實際應用方式</p>
            <p className="leading-[18px] mb-0 text-[20px] whitespace-pre-wrap">​</p>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">系統先以 Main Theme 完成基礎設計稿。</p>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">當需要展示給不同醫院時，可直接切換 Theme Variable。</p>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">例如：</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                <span className="leading-[18px] text-[14px]">Green Hospital Theme</span>
              </li>
              <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                <span className="leading-[18px] text-[14px]">Dark Blue Hospital Theme</span>
              </li>
            </ul>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">在不修改元件結構與版面的前提下，畫面即可自動套用不同品牌色彩。</p>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">​</p>
            <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] font-semibold leading-[18px] mb-0 text-[#fe701b] text-[16px] whitespace-pre-wrap">Token 架構示意</p>
            <p className="leading-[18px] mb-0 text-[16px] whitespace-pre-wrap">​</p>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">
              Primitive Color
              <br aria-hidden="true" />↓<br aria-hidden="true" />
              Semantic Color
              <br aria-hidden="true" />↓<br aria-hidden="true" />
              Theme Mode
              <br aria-hidden="true" />↓<br aria-hidden="true" />
              Component Usage
              <br aria-hidden="true" />↓<br aria-hidden="true" />
              Hospital Brand Preview
            </p>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">​</p>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">此結構能讓設計系統具備更好的可維護性與多品牌延伸能力，適合應用於多租戶（Multi-tenant）與醫療 SaaS 系統情境</p>
            <p className="leading-[18px] mb-0 text-[14px] whitespace-pre-wrap">​</p>
            <p className="leading-[18px] text-[14px] whitespace-pre-wrap">​</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] h-[902px] items-start overflow-clip py-[56px] relative shrink-0 w-[674px]">
      <div className="bg-[#fe701b] relative rounded-[6px] shrink-0 w-full" data-name="_Section Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <div className="bg-white content-stretch flex items-center p-[10px] relative rounded-[24px] shrink-0" data-name="_section-header-icon">
              <div className="overflow-clip relative shrink-0 size-[28px]" data-name="copy">
                <div className="absolute inset-[0_10.26%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2564 28">
                    <path clipRule="evenodd" d={svgPaths.p31f14a00} fill="var(--fill-0, #FE701B)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <Text1 />
          </div>
        </div>
      </div>
      <Component2 />
    </div>
  );
}

export default function Component7SemanticColor() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start justify-center p-[28px] relative size-full" data-name="#7.Semantic Color語意色">
      <Frame />
      <Frame1 />
    </div>
  );
}