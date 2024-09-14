import { FC } from "react";

const Footer: FC = () => {
    return (
        <div className=" bg-[#f7f7f7] flex flex-col items-center pt-[58px] mt-0">
            <p className="font-podium-sharp font-[800] text-black text-[43px] mb-[40px]">
                PRIMEAUTOCASH
            </p>
            <div className="flex flex-row items-center gap-x-[68px] mb-[63px]">
                <button className="text-[22.5px] text-black font-[400] font-sf-pro">
                    Home
                </button>
                <button className="text-[22.5px] text-black font-[400] font-sf-pro">
                    FAQ
                </button>
                <button className="text-[22.5px] text-black font-[400] font-sf-pro">
                    Terms & Condition
                </button>
                <button className="text-[22.5px] text-black font-[400] font-sf-pro">
                    Privacy Policy
                </button>
            </div>
            <div className="h-[52px] w-full flex flex-row items-center">
                <div className="w-full bg-black h-full rounded-tr-full" />
                <div className="min-w-[266px] flex flex-row items-center justify-center text-[14px] font-[400] font-sf-pro text-black">
                    © 2024
                    <p className="ml-1 underline">
                        MK AUTOS
                    </p>
                </div>
                <div className="w-full bg-black h-full rounded-tl-full" />
            </div>
        </div>
    )
}
export default Footer;