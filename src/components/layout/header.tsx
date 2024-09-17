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
                        <img alt="social_icon" src="/assets/icons/insta.svg" className={styles.icon} />
                        <img alt="social_icon" src="/assets/icons/fb.svg" className={styles.icon} />
                        <img alt="social_icon" src="/assets/icons/dot.svg" className="h-[4px] w-[4px]" />
                    </div>
                    <p className={styles.contact_number}>
                        +1 (682) 222-2242
                    </p>
                </div>
                <div className={styles.buttons_wrapper}>
                    <button className={styles.button}>
                        ABOUT US
                    </button>
                    <button className={styles.button}>
                        CONTACT US
                    </button>
                    <button className={styles.button}>
                        FAQ
                    </button>
                </div>
            </div>
        </div >
    )
}
export default Header;