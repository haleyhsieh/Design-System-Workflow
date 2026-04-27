interface SemanticColorCardProps {
  name: string;
  lightColor: string;
  lightReference: string;
  darkReference?: string;
}

export function SemanticColorCard({ name, lightColor, lightReference, darkReference }: SemanticColorCardProps) {
  const darkStatus = darkReference || '設計中';

  return (
    <div className="bg-white flex flex-col items-start overflow-clip rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0 w-[202px]">
      {/* Color Swatch */}
      <div className="bg-white h-[80px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
        <div className="flex items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-1 h-full" style={{ backgroundColor: lightColor }} />
          <div className="flex-1 h-full bg-white" />
        </div>
        <div className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      </div>

      {/* Color Info */}
      <div className="bg-white relative shrink-0 w-full">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="flex flex-col gap-[8px] items-start pb-[16px] pt-[12px] px-[12px] relative size-full">
            <p className="font-medium relative shrink-0 text-[14px] text-black w-full">{name}</p>

            {/* Light Mode */}
            <div className="bg-white flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[12px] w-full">
              <p className="relative shrink-0 text-[#6d6d6d] w-[55px]">Light</p>
              <p className="flex-1 min-w-0 relative text-black">{lightReference}</p>
            </div>

            {/* Dark Mode */}
            <div className="bg-white flex font-normal gap-[10px] items-start overflow-clip relative shrink-0 text-[#6d6d6d] text-[12px] w-full">
              <p className="relative shrink-0 w-[55px]">Dark</p>
              <p className="flex-1 min-w-0 relative">{darkStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
