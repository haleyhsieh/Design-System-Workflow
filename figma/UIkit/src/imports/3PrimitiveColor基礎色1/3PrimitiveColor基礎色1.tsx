import svgPaths from "./svg-x8dq4dx7o3";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.5px] items-start leading-[normal] min-w-px not-italic relative text-white" data-name="text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">1.Primitive Color 基礎色.原始色票</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full">1.1</p>
    </div>
  );
}

function Light() {
  return <div className="bg-[#ecfdf5] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark() {
  return <div className="bg-[#ecfdf5] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black"># ECFDF5</p>
    </div>
  );
}

function Dark1() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">50</p>
          <Light1 />
          <Dark1 />
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/50">
      <Swatches />
      <Infos />
    </div>
  );
}

function Light2() {
  return <div className="bg-[#d1fae5] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark2() {
  return <div className="bg-[#d1fae5] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black"># D1FAE5</p>
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
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">100</p>
          <Light3 />
          <Dark3 />
        </div>
      </div>
    </div>
  );
}

function Primary1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/100">
      <Swatches1 />
      <Infos1 />
    </div>
  );
}

function Light4() {
  return <div className="bg-[#a7f3d0] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark4() {
  return <div className="bg-[#a7f3d0] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#A7F3D0</p>
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
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">200</p>
          <Light5 />
          <Dark5 />
        </div>
      </div>
    </div>
  );
}

function Primary2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/200">
      <Swatches2 />
      <Infos2 />
    </div>
  );
}

function Light6() {
  return <div className="bg-[#6ee7b7] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark6() {
  return <div className="bg-[#6ee7b7] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#6EE7B7</p>
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
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">300</p>
          <Light7 />
          <Dark7 />
        </div>
      </div>
    </div>
  );
}

function Primary3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/300">
      <Swatches3 />
      <Infos3 />
    </div>
  );
}

function Light8() {
  return <div className="bg-[#34d399] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark8() {
  return <div className="bg-[#34d399] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#34D399</p>
    </div>
  );
}

function Dark9() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">400</p>
          <Light9 />
          <Dark9 />
        </div>
      </div>
    </div>
  );
}

function Primary4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/400">
      <Swatches4 />
      <Infos4 />
    </div>
  );
}

function Light10() {
  return <div className="bg-[#10b981] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark10() {
  return <div className="bg-[#10b981] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches5() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light10 />
        <Dark10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light11() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#10B981</p>
    </div>
  );
}

function Dark11() {
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
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">500</p>
          <Light11 />
          <Dark11 />
        </div>
      </div>
    </div>
  );
}

function Primary5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/500">
      <Swatches5 />
      <Infos5 />
    </div>
  );
}

function Light12() {
  return <div className="bg-[#059669] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark12() {
  return <div className="bg-[#059669] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches6() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light12 />
        <Dark12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light13() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#059669</p>
    </div>
  );
}

function Dark13() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">600</p>
          <Light13 />
          <Dark13 />
        </div>
      </div>
    </div>
  );
}

function Primary6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/600">
      <Swatches6 />
      <Infos6 />
    </div>
  );
}

function Light14() {
  return <div className="bg-[#047857] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark14() {
  return <div className="bg-[#047857] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches7() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light14 />
        <Dark14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light15() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#047857</p>
    </div>
  );
}

function Dark15() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">700</p>
          <Light15 />
          <Dark15 />
        </div>
      </div>
    </div>
  );
}

function Primary7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/700">
      <Swatches7 />
      <Infos7 />
    </div>
  );
}

function Light16() {
  return <div className="bg-[#065f46] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark16() {
  return <div className="bg-[#065f46] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches8() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light16 />
        <Dark16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light17() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#065F46</p>
    </div>
  );
}

function Dark17() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">800</p>
          <Light17 />
          <Dark17 />
        </div>
      </div>
    </div>
  );
}

function Primary8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/800">
      <Swatches8 />
      <Infos8 />
    </div>
  );
}

function Light18() {
  return <div className="bg-[#064e3b] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark18() {
  return <div className="bg-[#064e3b] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches9() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light18 />
        <Dark18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light19() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#064E3B</p>
    </div>
  );
}

function Dark19() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">900</p>
          <Light19 />
          <Dark19 />
        </div>
      </div>
    </div>
  );
}

function Primary9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/900">
      <Swatches9 />
      <Infos9 />
    </div>
  );
}

function Light20() {
  return <div className="bg-[#022c22] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark20() {
  return <div className="bg-[#022c22] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches10() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light20 />
        <Dark20 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light21() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#022C22</p>
    </div>
  );
}

function Dark21() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">950</p>
          <Light21 />
          <Dark21 />
        </div>
      </div>
    </div>
  );
}

function Primary10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="primary/950">
      <Swatches10 />
      <Infos10 />
    </div>
  );
}

function Green() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-[1312px]" data-name="green">
      <Primary />
      <Primary1 />
      <Primary2 />
      <Primary3 />
      <Primary4 />
      <Primary5 />
      <Primary6 />
      <Primary7 />
      <Primary8 />
      <Primary9 />
      <Primary10 />
    </div>
  );
}

function Light22() {
  return <div className="bg-white flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark22() {
  return <div className="bg-white flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches11() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light22 />
        <Dark22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light23() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#FFFFFF</p>
    </div>
  );
}

function Dark23() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">0</p>
          <Light23 />
          <Dark23 />
        </div>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/0">
      <Swatches11 />
      <Infos11 />
    </div>
  );
}

function Light24() {
  return <div className="bg-[#f8fafc] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark24() {
  return <div className="bg-[#fafafa] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches12() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light24 />
        <Dark24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light25() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#F8FAFC</p>
    </div>
  );
}

function Dark25() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">50</p>
          <Light25 />
          <Dark25 />
        </div>
      </div>
    </div>
  );
}

function Surface1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/50">
      <Swatches12 />
      <Infos12 />
    </div>
  );
}

function Light26() {
  return <div className="bg-[#f1f5f9] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark26() {
  return <div className="bg-[#f1f5f9] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches13() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light26 />
        <Dark26 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light27() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#F4F4F5</p>
    </div>
  );
}

function Dark27() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">100</p>
          <Light27 />
          <Dark27 />
        </div>
      </div>
    </div>
  );
}

function Surface2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/100">
      <Swatches13 />
      <Infos13 />
    </div>
  );
}

function Light28() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark28() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches14() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light28 />
        <Dark28 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light29() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#E4E4E7</p>
    </div>
  );
}

function Dark29() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">200</p>
          <Light29 />
          <Dark29 />
        </div>
      </div>
    </div>
  );
}

function Surface3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/200">
      <Swatches14 />
      <Infos14 />
    </div>
  );
}

function Light30() {
  return <div className="bg-[#cbd5e1] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark30() {
  return <div className="bg-[#cbd5e1] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches15() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light30 />
        <Dark30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light31() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#CBD5E1</p>
    </div>
  );
}

function Dark31() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">300</p>
          <Light31 />
          <Dark31 />
        </div>
      </div>
    </div>
  );
}

function Surface4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/300">
      <Swatches15 />
      <Infos15 />
    </div>
  );
}

function Light32() {
  return <div className="bg-[#94a3b8] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark32() {
  return <div className="bg-[#94a3b8] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches16() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light32 />
        <Dark32 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light33() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#94A3B8</p>
    </div>
  );
}

function Dark33() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos16() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">400</p>
          <Light33 />
          <Dark33 />
        </div>
      </div>
    </div>
  );
}

function Surface5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/400">
      <Swatches16 />
      <Infos16 />
    </div>
  );
}

function Light34() {
  return <div className="bg-[#64748b] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark34() {
  return <div className="bg-[#64748b] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches17() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light34 />
        <Dark34 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light35() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">slate/500</p>
    </div>
  );
}

function Dark35() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos17() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">500</p>
          <Light35 />
          <Dark35 />
        </div>
      </div>
    </div>
  );
}

function Surface6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/500">
      <Swatches17 />
      <Infos17 />
    </div>
  );
}

function Light36() {
  return <div className="bg-[#475569] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark36() {
  return <div className="bg-[#475569] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches18() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light36 />
        <Dark36 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light37() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">slate/600</p>
    </div>
  );
}

function Dark37() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos18() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">600</p>
          <Light37 />
          <Dark37 />
        </div>
      </div>
    </div>
  );
}

function Surface7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/600">
      <Swatches18 />
      <Infos18 />
    </div>
  );
}

function Light38() {
  return <div className="bg-[#334155] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark38() {
  return <div className="bg-[#334155] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches19() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light38 />
        <Dark38 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light39() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">slate/700</p>
    </div>
  );
}

function Dark39() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos19() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">700</p>
          <Light39 />
          <Dark39 />
        </div>
      </div>
    </div>
  );
}

function Surface8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/700">
      <Swatches19 />
      <Infos19 />
    </div>
  );
}

function Light40() {
  return <div className="bg-[#1e293b] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark40() {
  return <div className="bg-[#1e293b] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches20() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light40 />
        <Dark40 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light41() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">slate/800</p>
    </div>
  );
}

function Dark41() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">800</p>
          <Light41 />
          <Dark41 />
        </div>
      </div>
    </div>
  );
}

function Surface9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/800">
      <Swatches20 />
      <Infos20 />
    </div>
  );
}

function Light42() {
  return <div className="bg-[#0f172a] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark42() {
  return <div className="bg-[#0f172a] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches21() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light42 />
        <Dark42 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light43() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">slate/900</p>
    </div>
  );
}

function Dark43() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos21() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">900</p>
          <Light43 />
          <Dark43 />
        </div>
      </div>
    </div>
  );
}

function Surface10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/900">
      <Swatches21 />
      <Infos21 />
    </div>
  );
}

function Light44() {
  return <div className="bg-[#020617] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark44() {
  return <div className="bg-[#09090b] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches22() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light44 />
        <Dark44 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light45() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">slate/950</p>
    </div>
  );
}

function Dark45() {
  return (
    <div className="bg-white content-stretch flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full" data-name="Dark">
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 w-[55px]">Dark</p>
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] min-w-px relative">設計中</p>
    </div>
  );
}

function Infos22() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">950</p>
          <Light45 />
          <Dark45 />
        </div>
      </div>
    </div>
  );
}

function Surface11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="surface/950">
      <Swatches22 />
      <Infos22 />
    </div>
  );
}

function Colors() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-full" data-name="Colors">
      <Surface />
      <Surface1 />
      <Surface2 />
      <Surface3 />
      <Surface4 />
      <Surface5 />
      <Surface6 />
      <Surface7 />
      <Surface8 />
      <Surface9 />
      <Surface10 />
      <Surface11 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="說明">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#fe701b] text-[20px] w-[642px]">Main Primitive Color - Main 主品牌基礎色</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[24px] text-black w-[642px]">Turquoise-green</p>
          <Green />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[24px] text-black w-[642px]">surface</p>
          <Colors />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[1332px]">
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
    </div>
  );
}

export default function Component3PrimitiveColor() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[56px] relative size-full" data-name="#3.Primitive Color基礎色-1">
      <Frame />
    </div>
  );
}