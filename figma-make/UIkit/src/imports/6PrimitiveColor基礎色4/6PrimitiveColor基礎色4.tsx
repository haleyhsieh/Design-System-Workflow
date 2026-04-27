import svgPaths from "./svg-7zeso6trrr";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.5px] items-start leading-[normal] min-w-px not-italic relative text-white" data-name="text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">1.Primitive Color 基礎色.原始色票</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full">1.4</p>
    </div>
  );
}

function Light() {
  return <div className="bg-[#f0fdf4] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark() {
  return <div className="bg-[#f0fdf4] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#F0FDF4</p>
    </div>
  );
}

function Dark1() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#F0FDF4</p>
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

function Green() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/50">
      <Swatches />
      <Infos />
    </div>
  );
}

function Light2() {
  return <div className="bg-[#dcfce7] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark2() {
  return <div className="bg-[#dcfce7] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#DCFCE7</p>
    </div>
  );
}

function Dark3() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#DCFCE7</p>
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

function Green1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/100">
      <Swatches1 />
      <Infos1 />
    </div>
  );
}

function Light4() {
  return <div className="bg-[#bbf7d0] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark4() {
  return <div className="bg-[#bbf7d0] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#BBF7D0</p>
    </div>
  );
}

function Dark5() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#BBF7D0</p>
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

function Green2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/200">
      <Swatches2 />
      <Infos2 />
    </div>
  );
}

function Light6() {
  return <div className="bg-[#86efac] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark6() {
  return <div className="bg-[#86efac] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#86EFAC</p>
    </div>
  );
}

function Dark7() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#86EFAC</p>
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

function Green3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/300">
      <Swatches3 />
      <Infos3 />
    </div>
  );
}

function Light8() {
  return <div className="bg-[#4ade80] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark8() {
  return <div className="bg-[#4ade80] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#4ADE80</p>
    </div>
  );
}

function Dark9() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#4ADE80</p>
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

function Green4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/400">
      <Swatches4 />
      <Infos4 />
    </div>
  );
}

function Light10() {
  return <div className="bg-[#22c55e] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark10() {
  return <div className="bg-[#22c55e] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#22C55E</p>
    </div>
  );
}

function Dark11() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#22C55E</p>
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

function Green5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/500">
      <Swatches5 />
      <Infos5 />
    </div>
  );
}

function Light12() {
  return <div className="bg-[#16a34a] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark12() {
  return <div className="bg-[#16a34a] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#16A34A</p>
    </div>
  );
}

function Dark13() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#16A34A</p>
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

function Green6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/600">
      <Swatches6 />
      <Infos6 />
    </div>
  );
}

function Light14() {
  return <div className="bg-[#15803d] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark14() {
  return <div className="bg-[#15803d] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#15803D</p>
    </div>
  );
}

function Dark15() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#15803D</p>
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

function Green7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/700">
      <Swatches7 />
      <Infos7 />
    </div>
  );
}

function Light16() {
  return <div className="bg-[#166534] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark16() {
  return <div className="bg-[#166534] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#166534</p>
    </div>
  );
}

function Dark17() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#166534</p>
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

function Green8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/800">
      <Swatches8 />
      <Infos8 />
    </div>
  );
}

function Light18() {
  return <div className="bg-[#14532d] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark18() {
  return <div className="bg-[#14532d] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#14532D</p>
    </div>
  );
}

function Dark19() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#14532D</p>
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

function Green9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/900">
      <Swatches9 />
      <Infos9 />
    </div>
  );
}

function Light20() {
  return <div className="bg-[#052e16] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark20() {
  return <div className="bg-[#052e16] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#052E16</p>
    </div>
  );
}

function Dark21() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#052E16</p>
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

function Green10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="green/950">
      <Swatches10 />
      <Infos10 />
    </div>
  );
}

function Colors() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[20px] items-start pb-[24px] relative shrink-0 w-[1312px]" data-name="Colors">
      <Green />
      <Green1 />
      <Green2 />
      <Green3 />
      <Green4 />
      <Green5 />
      <Green6 />
      <Green7 />
      <Green8 />
      <Green9 />
      <Green10 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="說明">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#fe701b] text-[20px] w-[642px]">Main Primitive Color - Main 主品牌基礎色</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[24px] text-black w-[642px]">Green</p>
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

export default function Component6PrimitiveColor() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[56px] relative size-full" data-name="#6.Primitive Color基礎色-4">
      <Frame />
    </div>
  );
}