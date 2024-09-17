import { FC } from "react";
import styles from "./styles";

const Header: FC = () => {
    return (
        <div className={styles.header_container}>
            <p className={styles.logo}>
                PRIMEAUTOCASH
            </p>
            <div className={styles.right_side}>
                <div className={styles.contacts_wrapper}>
                    <div className={styles.icons_wrapper}>
                        <img src="/assets/icons/insta.svg" className={styles.icon} />
                        <img src="/assets/icons/fb.svg" className={styles.icon} />
                        <img src="/assets/icons/dot.svg" className="h-[4px] w-[4px]" />
                    </div>
                    <p className={styles.contact_number}>
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