import { FC } from "react";

const Footer: FC = () => {
    return (
        <div className=" bg-[#f7f7f7] flex flex-col items-center xl:pt-[41px] 2xl:pt-[58px] mt-0">
            <p className="font-podium-sharp font-[800] text-black xl:text-[30.59px] 2xl:text-[43px] xl:mb-[28.45px] 2xl:mb-[40px]">
                PRIMEAUTOCASH
            </p>
            <div className="flex flex-row items-center xl:mb-[44px] xl:gap-x-[48px] xl:text-[16px] 2xl:mb-[63px] 2xl:gap-x-[68px] 2xl:text-[22.5px]">
                <button className="xl:text-[16px] 2xl:text-[22.5px] text-black font-[400] font-sf-pro">
                    Home
                </button>
                <button className="xl:text-[16px] 2xl:text-[22.5px] text-black font-[400] font-sf-pro">
                    FAQ
                </button>
                <button className="xl:text-[16px] 2xl:text-[22.5px] text-black font-[400] font-sf-pro">
                    Terms & Condition
                </button>
                <button className="xl:text-[16px] 2xl:text-[22.5px] text-black font-[400] font-sf-pro">
                    Privacy Policy
                </button>
            </div>
            <div className="xl:h-[37px] 2xl:h-[52px] w-full flex flex-row items-center">
                <div className="w-full bg-black h-full rounded-tr-full" />
                <div className="xl:min-w-[189px] 2xl:min-w-[266px] xl:text-[9.96px] 2xl:text-[14px] flex flex-row items-center justify-center font-[400] font-sf-pro text-black">
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