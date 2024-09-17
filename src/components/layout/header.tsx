import { FC } from "react";
import styles from "./styles";

const Header: FC = () => {
    return (
        <div className={styles.header_container}>
            <p className={styles.header_logo}>
                PRIMEAUTOCASH
            </p>
            <div className="flex flex-row items-center justify-between xl:gap-x-[45px] 2xl:gap-x-[64px]">
                <div className="flex flex-row items-center justify-betweens xl:gap-x-[6.97px] 2xl:gap-x-[9.8px]">
                    <div className="flex flex-row items-center justify-between xl:gap-x-[8.39px] 2xl:gap-x-[11.8px]">
                        <img src="/assets/icons/insta.svg" className="xl:h-[14.22px] xl:w-[14.22px] 2xl:h-[20px] 2xl:w-[20px] cursor-pointer" />
                        <img src="/assets/icons/fb.svg" className="xl:h-[14.22px] xl:w-[14.22px] 2xl:h-[20px] 2xl:w-[20px] cursor-pointer" />
                        <img src="/assets/icons/dot.svg" className="h-[4px] w-[4px]" />
                    </div>
                    <p className="xl:text-[7.82px] 2xl:text-[11px] underline text-white font-[Poppins] font-[400]">
                        +1 (682) 222-2242
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between xl:gap-x-[19.92px] 2xl:gap-x-[28px]">
                    <button className="xl:text-[7.82px] 2xl:text-[11px] font-[400] font-[Poppins] text-white outline-none">
                        ABOUT US
                    </button>
                    <button className="xl:text-[7.82px] 2xl:text-[11px] font-[400] font-[Poppins] text-white outline-none">
                        CONTACT US
                    </button>
                    <button className="xl:text-[7.82px] 2xl:text-[11px] font-[400] font-[Poppins] text-white outline-none">
                        FAQ
                    </button>
                </div>
            </div>
        </div >
    )
}
export default Header;