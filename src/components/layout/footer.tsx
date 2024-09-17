import { FC } from "react";
import styles from "./styles";

const Footer: FC = () => {
    return (
        <div className={styles.footer_container}>
            <p className={styles.footer_logo}>
                PRIMEAUTOCASH
            </p>
            <div className={styles.footer_buttons_wrapper}>
                <button className={styles.footer_button}>
                    Home
                </button>
                <button className={styles.footer_button}>
                    FAQ
                </button>
                <button className={styles.footer_button}>
                    Terms & Condition
                </button>
                <button className={styles.footer_button}>
                    Privacy Policy
                </button>
            </div>
            <div className={styles.bottom_bar}>
                <div className="w-full bg-black h-full rounded-tr-full" />
                <div className={styles.text}>
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