import svgPaths from "./svg-9wewpeexpx";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.5px] items-start leading-[normal] min-w-px not-italic relative text-white" data-name="text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">1.Primitive Color 基礎色.原始色票</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full">1.3</p>
    </div>
  );
}

function Light() {
  return <div className="bg-[#fff7ed] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark() {
  return <div className="bg-[#fff7ed] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#FFF7ED</p>
    </div>
  );
}

function Dark1() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#FFF7ED</p>
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

function Orange() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/50">
      <Swatches />
      <Infos />
    </div>
  );
}

function Light2() {
  return <div className="bg-[#ffedd5] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark2() {
  return <div className="bg-[#ffedd5] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#FFEDD5</p>
    </div>
  );
}

function Dark3() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#FFEDD5</p>
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

function Orange1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/100">
      <Swatches1 />
      <Infos1 />
    </div>
  );
}

function Light4() {
  return <div className="bg-[#fed7aa] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark4() {
  return <div className="bg-[#fed7aa] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#FED7AA</p>
    </div>
  );
}

function Dark5() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#FED7AA</p>
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

function Orange2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/200">
      <Swatches2 />
      <Infos2 />
    </div>
  );
}

function Light6() {
  return <div className="bg-[#fdba74] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark6() {
  return <div className="bg-[#fdba74] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#FDBA74</p>
    </div>
  );
}

function Dark7() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#FDBA74</p>
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

function Orange3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/300">
      <Swatches3 />
      <Infos3 />
    </div>
  );
}

function Light8() {
  return <div className="bg-[#fb923c] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark8() {
  return <div className="bg-[#fb923c] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#FB923C</p>
    </div>
  );
}

function Dark9() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#FB923C</p>
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

function Orange4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/400">
      <Swatches4 />
      <Infos4 />
    </div>
  );
}

function Light10() {
  return <div className="bg-[#f97316] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark10() {
  return <div className="bg-[#f97316] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#F97316</p>
    </div>
  );
}

function Dark11() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#F97316</p>
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

function Orange5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/500">
      <Swatches5 />
      <Infos5 />
    </div>
  );
}

function Light12() {
  return <div className="bg-[#ea580c] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark12() {
  return <div className="bg-[#ea580c] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#EA580C</p>
    </div>
  );
}

function Dark13() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#EA580C</p>
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

function Orange6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/600">
      <Swatches6 />
      <Infos6 />
    </div>
  );
}

function Light14() {
  return <div className="bg-[#c2410c] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark14() {
  return <div className="bg-[#c2410c] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#C2410C</p>
    </div>
  );
}

function Dark15() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#C2410C</p>
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

function Orange7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/700">
      <Swatches7 />
      <Infos7 />
    </div>
  );
}

function Light16() {
  return <div className="bg-[#9a3412] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark16() {
  return <div className="bg-[#9a3412] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#9A3412</p>
    </div>
  );
}

function Dark17() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#9A3412</p>
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

function Orange8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/800">
      <Swatches8 />
      <Infos8 />
    </div>
  );
}

function Light18() {
  return <div className="bg-[#7c2d12] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark18() {
  return <div className="bg-[#7c2d12] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#7C2D12</p>
    </div>
  );
}

function Dark19() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#7C2D12</p>
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

function Orange9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/900">
      <Swatches9 />
      <Infos9 />
    </div>
  );
}

function Light20() {
  return <div className="bg-[#431407] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark20() {
  return <div className="bg-[#431407] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#431407</p>
    </div>
  );
}

function Dark21() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#431407</p>
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

function Orange10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="orange/950">
      <Swatches10 />
      <Infos10 />
    </div>
  );
}

function Colors() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[0px_20px] items-start pb-[24px] relative shrink-0 w-full" data-name="Colors">
      <Orange />
      <Orange1 />
      <Orange2 />
      <Orange3 />
      <Orange4 />
      <Orange5 />
      <Orange6 />
      <Orange7 />
      <Orange8 />
      <Orange9 />
      <Orange10 />
    </div>
  );
}

function Light22() {
  return <div className="bg-[#f0f9ff] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark22() {
  return <div className="bg-[#f0f9ff] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#F0F9FF</p>
    </div>
  );
}

function Dark23() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#F0F9FF</p>
    </div>
  );
}

function Infos11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">50</p>
          <Light23 />
          <Dark23 />
        </div>
      </div>
    </div>
  );
}

function Sky() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/50">
      <Swatches11 />
      <Infos11 />
    </div>
  );
}

function Light24() {
  return <div className="bg-[#e0f2fe] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark24() {
  return <div className="bg-[#e0f2fe] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#E0F2FE</p>
    </div>
  );
}

function Dark25() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#E0F2FE</p>
    </div>
  );
}

function Infos12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">100</p>
          <Light25 />
          <Dark25 />
        </div>
      </div>
    </div>
  );
}

function Sky1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/100">
      <Swatches12 />
      <Infos12 />
    </div>
  );
}

function Light26() {
  return <div className="bg-[#bae6fd] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark26() {
  return <div className="bg-[#bae6fd] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#BAE6FD</p>
    </div>
  );
}

function Dark27() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#BAE6FD</p>
    </div>
  );
}

function Infos13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">200</p>
          <Light27 />
          <Dark27 />
        </div>
      </div>
    </div>
  );
}

function Sky2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/200">
      <Swatches13 />
      <Infos13 />
    </div>
  );
}

function Light28() {
  return <div className="bg-[#7dd3fc] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark28() {
  return <div className="bg-[#7dd3fc] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#7DD3FC</p>
    </div>
  );
}

function Dark29() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#7DD3FC</p>
    </div>
  );
}

function Infos14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">300</p>
          <Light29 />
          <Dark29 />
        </div>
      </div>
    </div>
  );
}

function Sky3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/300">
      <Swatches14 />
      <Infos14 />
    </div>
  );
}

function Light30() {
  return <div className="bg-[#38bdf8] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark30() {
  return <div className="bg-[#38bdf8] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
}

function Swatches15() {
  return (
    <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[202px]" data-name="Swatches">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Light30 />
        <Dark30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Light31() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Light">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#38BDF8</p>
    </div>
  );
}

function Dark31() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#38BDF8</p>
    </div>
  );
}

function Infos15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">400</p>
          <Light31 />
          <Dark31 />
        </div>
      </div>
    </div>
  );
}

function Sky4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/400">
      <Swatches15 />
      <Infos15 />
    </div>
  );
}

function Light32() {
  return <div className="bg-[#0ea5e9] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark32() {
  return <div className="bg-[#0ea5e9] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#0EA5E9</p>
    </div>
  );
}

function Dark33() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#0EA5E9</p>
    </div>
  );
}

function Infos16() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">500</p>
          <Light33 />
          <Dark33 />
        </div>
      </div>
    </div>
  );
}

function Sky5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/500">
      <Swatches16 />
      <Infos16 />
    </div>
  );
}

function Light34() {
  return <div className="bg-[#0284c7] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark34() {
  return <div className="bg-[#0284c7] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#0284C7</p>
    </div>
  );
}

function Dark35() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#0284C7</p>
    </div>
  );
}

function Infos17() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">600</p>
          <Light35 />
          <Dark35 />
        </div>
      </div>
    </div>
  );
}

function Sky6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/600">
      <Swatches17 />
      <Infos17 />
    </div>
  );
}

function Light36() {
  return <div className="bg-[#0369a1] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark36() {
  return <div className="bg-[#0369a1] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#0369A1</p>
    </div>
  );
}

function Dark37() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#0369A1</p>
    </div>
  );
}

function Infos18() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">700</p>
          <Light37 />
          <Dark37 />
        </div>
      </div>
    </div>
  );
}

function Sky7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/700">
      <Swatches18 />
      <Infos18 />
    </div>
  );
}

function Light38() {
  return <div className="bg-[#075985] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark38() {
  return <div className="bg-[#075985] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#075985</p>
    </div>
  );
}

function Dark39() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#075985</p>
    </div>
  );
}

function Infos19() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">800</p>
          <Light39 />
          <Dark39 />
        </div>
      </div>
    </div>
  );
}

function Sky8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/800">
      <Swatches19 />
      <Infos19 />
    </div>
  );
}

function Light40() {
  return <div className="bg-[#0c4a6e] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark40() {
  return <div className="bg-[#0c4a6e] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#0C4A6E</p>
    </div>
  );
}

function Dark41() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#0C4A6E</p>
    </div>
  );
}

function Infos20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">900</p>
          <Light41 />
          <Dark41 />
        </div>
      </div>
    </div>
  );
}

function Sky9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/900">
      <Swatches20 />
      <Infos20 />
    </div>
  );
}

function Light42() {
  return <div className="bg-[#082f49] flex-[1_0_0] h-full min-w-px" data-name="Light" />;
}

function Dark42() {
  return <div className="bg-[#082f49] flex-[1_0_0] h-full min-w-px" data-name="Dark" />;
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
      <p className="flex-[1_0_0] min-w-px relative text-black">#082F49</p>
    </div>
  );
}

function Dark43() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full" data-name="Dark">
      <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Dark</p>
      <p className="flex-[1_0_0] min-w-px relative text-black">#082F49</p>
    </div>
  );
}

function Infos21() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Infos">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic pb-[16px] pt-[12px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6929c4] text-[14px] w-full">950</p>
          <Light43 />
          <Dark43 />
        </div>
      </div>
    </div>
  );
}

function Sky10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]" data-name="sky/950">
      <Swatches21 />
      <Infos21 />
    </div>
  );
}

function Colors1() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-[1312px]" data-name="Colors">
      <Sky />
      <Sky1 />
      <Sky2 />
      <Sky3 />
      <Sky4 />
      <Sky5 />
      <Sky6 />
      <Sky7 />
      <Sky8 />
      <Sky9 />
      <Sky10 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="說明">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#fe701b] text-[20px] w-[642px]">Main Primitive Color - Main 主品牌基礎色</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[24px] text-black w-[642px]">Orange</p>
          <Colors />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[24px] text-black w-[642px]">Sky</p>
          <Colors1 />
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

export default function Component5PrimitiveColor() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[56px] relative size-full" data-name="#5.Primitive Color基礎色-3">
      <Frame />
    </div>
  );
}