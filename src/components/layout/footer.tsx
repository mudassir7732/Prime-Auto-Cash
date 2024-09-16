import { FC } from "react";

const Footer: FC = () => {
    return (
        <div className=" bg-[#f7f7f7] flex flex-col items-center xl:pt-[41px] 2xl:pt-[58px] mt-0">
            <p className="font-podium-sharp font-[800] text-black footer-logo">
                PRIMEAUTOCASH
            </p>
            <div className="flex flex-row items-center footer-buttons">
                <button className="footer-button text-black font-[400] font-sf-pro">
                    Home
                </button>
                <button className="footer-button text-black font-[400] font-sf-pro">
                    FAQ
                </button>
                <button className="footer-button text-black font-[400] font-sf-pro">
                    Terms & Condition
                </button>
                <button className="footer-button text-black font-[400] font-sf-pro">
                    Privacy Policy
                </button>
            </div>
            <div className="footer-bottom-bar w-full flex flex-row items-center">
                <div className="w-full bg-black h-full rounded-tr-full" />
                <div className="footer-bottom-text flex flex-row items-center justify-center font-[400] font-sf-pro text-black">
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