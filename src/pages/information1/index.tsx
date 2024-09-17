import styles from "./styles";

const Information1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.stepper}>
                <div className={styles.step}>
                    <div className={`${styles.step_no} text-[#b8b6b6] bg-[#6c757d] bg-opacity-10`}>
                        1
                    </div>
                    <p className={`${styles.step_text} text-[#bcbcbc]`}>
                        Vehicle
                    </p>
                </div>
                <div className={styles.divider} />
                <div className={styles.step}>
                    <div className={`${styles.step_no} text-white bg-[#3155ff]`}>
                        2
                    </div>
                    <p className={`${styles.step_text} text-[#7b7b7b]`}>
                        Information
                    </p>
                </div>
                <div className={styles.divider} />
                <div className={styles.step}>
                    <div className={`${styles.step_no} text-[#b8b6b6] bg-[#6c757d] bg-opacity-10`}>
                        3
                    </div>
                    <p className={`${styles.step_text} text-[#bcbcbc]`}>
                        Offer
                    </p>
                </div>
            </div>

            <div className={styles.cards_wrapper}>
                <div className={styles.card}>
                    <p className={styles.card_title}>
                        Vehicle Information
                    </p>
                    <div className={`${styles.inputs_wrapper} xl:mt-[55px] 2xl:mt-[78px]`}>
                        <div className="w-[59%]">
                            <p className={styles.input_label}>
                                Year, Maker and Model
                            </p>
                            <input placeholder="2018 BMW Series 580i" className="xl:h-[34px] 2xl:h-[48px] xl:px-[11px] 2xl:px-[15px] shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px] xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#3155ff] font-[700] font-[Manrope] outline-none w-full" />
                        </div>
                        <div className="w-[35%]">
                            <p className={styles.input_label}>
                                Transmission
                            </p>
                            <div className="flex flex-row items-center justify-between xl:h-[34px] 2xl:h-[48px] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px]">
                                <input placeholder="Automatic" className="xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#3155ff] font-[700] font-[Manrope] outline-none w-full" />
                                <p className="xl:text-[8px] 2xl:text-[11px] font-[600] font-sf-pro text-[#cbbdbd] text-opacity-60">
                                    Type
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:mt-[14px] 2xl:mt-[20px] flex flex-row items-start justify-between">
                        <div className="w-[55%]">
                            <p className={styles.input_label}>
                                VIN Number
                            </p>
                            <div className="flex flex-row items-center justify-between xl:h-[34px] 2xl:h-[48px] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px]">
                                <input placeholder="2GNALCELK6H1588338" className="xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#3155ff] font-[700] font-[Manrope] outline-none h-full" />
                                <p className="xl:text-[8px] 2xl:text-[11px] font-[600] font-sf-pro text-[#cbbdbd] text-opacity-60">
                                    17 DIGIT VIN
                                </p>
                            </div>
                        </div>
                        <div className="w-[39%]">
                            <p className={styles.input_label}>
                                Mileage
                            </p>
                            <div className="flex flex-row items-center justify-between xl:h-[34px] 2xl:h-[48px] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px]">
                                <input placeholder="98,565" className="xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#3155ff] font-[700] font-[Manrope] outline-none w-[120px]" />
                                <p className="xl:text-[8px] 2xl:text-[11px] font-[600] font-sf-pro text-[#cbbdbd] text-opacity-60">
                                    miles
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <button className="xl:mt-[33px] 2xl:mt-[46px] xl:h-[43px] 2xl:h-[60px] xl:w-[187px] 2xl:w-[263px] bg-[#3155ff] xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-white xl:rounded-[9px] 2xl:rounded-[12px]">
                            Start With Another Car
                        </button>
                        <p className="xl:text-[9px] 2xl:text-[13px] font-[Manrope] font-[600] text-[#171717] text-opacity-30 xl:mt-[17px] 2xl:mt-[24px] text-center">
                            The VIN Number will help us identify the car details.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <p className={styles.card_title}>
                        Your Information
                    </p>
                    <div className="xl:mt-[55px] 2xl:mt-[78px]">
                        <p className={styles.input_label}>
                            Full Name
                        </p>
                        <input placeholder="Enter your full name" className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#171717] placeholder-opacity-25 font-[400] font-[Manrope] xl:px-[11px] 2xl:px-[15px] w-full border-[1px] border-[#171717] border-opacity-10 xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px] outline-none" />
                    </div>
                    <div className={`${styles.inputs_wrapper} xl:mt-[15px] 2xl:mt-[21px]`}>
                        <div className="w-full">
                            <p className={styles.input_label}>
                                Email Address
                            </p>
                            <input placeholder="Enter your E-mail" className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#171717] placeholder-opacity-25 font-[400] font-[Manrope] xl:px-[11px] 2xl:px-[15px] w-full border-[1px] border-[#171717] border-opacity-10 xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px] outline-none" />
                        </div>
                        <div className="w-full">
                            <p className={styles.input_label}>
                                Mobile Number
                            </p>
                            <input placeholder="Enter your Cell No." className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#171717] placeholder-opacity-25 font-[400] font-[Manrope] xl:px-[11px] 2xl:px-[15px] w-full border-[1px] border-[#171717] border-opacity-10 xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px] outline-none" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <button className="xl:mt-[33px] 2xl:mt-[46px] xl:h-[43px] 2xl:h-[60px] xl:w-[187px] 2xl:w-[263px] bg-[#3155ff] xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-white xl:rounded-[9px] 2xl:rounded-[12px]">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Information1;