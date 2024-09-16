import { FC } from "react";

const Header: FC = () => {
    return (
        <div className="bg-black w-full header pt-[35px] pb-[25px] px-[78px] flex flex-row items-center justify-between">
            <p className="font-podium-sharp font-[800] text-white header-logo">
                PRIMEAUTOCASH
            </p>
            <div className="flex flex-row items-center justify-between header-buttons-container">
                <div className="flex flex-row items-center justify-betweens header-icons-wrapper">
                    <div className="flex flex-row items-center justify-between header-icons">
                        <img src="/assets/icons/insta.svg" className="header-icon cursor-pointer" />
                        <img src="/assets/icons/fb.svg" className="header-icon cursor-pointer" />
                        <img src="/assets/icons/dot.svg" className="h-[4px] w-[4px]" />
                    </div>
                    <p className="header-button underline text-white font-[Poppins] font-[400]">
                        +1 (682) 222-2242
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between header-buttons-wrapper">
                    <button className="header-button font-[400] font-[Poppins] text-white outline-none">
                        ABOUT US
                    </button>
                    <button className="header-button font-[400] font-[Poppins] text-white outline-none">
                        CONTACT US
                    </button>
                    <button className="header-button font-[400] font-[Poppins] text-white outline-none">
                        FAQ
                    </button>
                </div>
            </div>
        </div >
    )
}
export default Header;