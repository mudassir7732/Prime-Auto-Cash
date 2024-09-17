import { FC } from "react";
import styles from "./styles";

const Home: FC = () => {
    return (
        <div className={styles.container}
            style={{ backgroundImage: 'url(/assets/images/Rectangle130.png)', backgroundSize: '100% 80%', }}
        >
            <div className={styles.title_wrapper}>
                <p className={styles.title}>
                    FAST, FAIR CAR OFFERS
                </p>
                <p className={styles.sub_title}>
                    QUICK CASHOFF IN CONFIDENCE
                </p>
            </div>
            <div className={styles.card}>
                <p className={styles.card_title}>
                    Get an offer by just adding
                    <div className={styles.card_title1}>
                        the
                        <p className={styles.card_title2}>
                            VIN and Mileage
                        </p>
                    </div>
                </p>
                <p className={`${styles.input_label} xl:mt-[36px] 2xl:mt-[50px]`}>
                    VIN Number
                </p>
                <div className={styles.input_wrapper} >
                    <input placeholder="Enter the VIN Number Here" className={styles.wrapped_input} />
                    <p className={styles.placeholder}>
                        17 DIGIT VIN
                    </p>
                </div>
                <p className={styles.helper_text}>
                    The VIN Number will help us identify the car details.
                </p>
                <div className={styles.inputs_container}>
                    <div className="w-full">
                        <p className={`${styles.input_label} xl:mt-[15px] 2xl:mt-[21px]`}>
                            Mileage
                        </p>
                        <input placeholder="Enter Mileage" className={styles.simple_input} />
                        <p className={styles.helper_text}>
                            Will help us understand car travelled by far.
                        </p>
                    </div>
                    <div className="w-full">
                        <p className={`${styles.input_label} xl:mt-[15px] 2xl:mt-[21px]`}>
                            ZIP Code
                        </p>
                        <input placeholder="Enter Area ZIP Code" className={styles.simple_input} />
                    </div>
                </div>
                <div className={styles.button_wrapper}>
                    <button className={styles.button}>
                        Continue
                    </button>
                </div>
                <p className={styles.button_helper_text}>
                    The VIN Number will help us identify the car details.
                </p>
            </div>
        </div>
    )
}
export default Home;