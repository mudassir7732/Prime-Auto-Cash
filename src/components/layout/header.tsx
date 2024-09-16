import { FC } from "react";

const Header: FC = () => {
    return (
        <div className="bg-black w-full header pt-[35px] pb-[25px] px-[78px] flex flex-row items-center justify-between">
            <p className="font-podium-sharp font-[800] text-white text-[24px] ">
                PRIMEAUTOCASH
            </p>
            <div className="flex flex-row items-center justify-between gap-x-[64px]">
                <div className="flex flex-row items-center justify-betweens gap-x-[9.8px]">
                    <div className="flex flex-row items-center justify-between gap-x-[11.8px]">
                        <img src="/assets/icons/insta.svg" className="h-[20px] w-[20px] cursor-pointer" />
                        <img src="/assets/icons/fb.svg" className="h-[20px] w-[20px] cursor-pointer" />
                        <img src="/assets/icons/dot.svg" className="h-[4px] w-[4px]" />
                    </div>
                    <p className="text-[11px] text-white font-[Poppins] font-[400]">
                        +1 (682) 222-2242
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between gap-x-[28px]">
                    <button className="text-[11px] font-[400] font-[Poppins] text-white outline-none">
                        ABOUT US
                    </button>
                    <button className="text-[11px] font-[400] font-[Poppins] text-white outline-none">
                        CONTACT US
                    </button>
                    <button className="text-[11px] font-[400] font-[Poppins] text-white outline-none">
                        FAQ
                    </button>
                </div>
            </div>
        </div >
    )
}
export default Header;