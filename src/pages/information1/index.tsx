
const Information1 = () => {
    return (
        <div className="bg-[#fafafa] pt-[100px] pb-[96px] flex flex-col items-center">
            <div className="xl:min-w-[381px] 2xl:min-w-[535px] flex flex-row items-center justify-between xl:gap-x-[16px] 2xl:gap-x-[23px] xl:mb-[36px] 2xl:mb-[50px]">
                <div className="flex flex-col items-center gap-y-[4px]">
                    <div className="xl:w-[43px] 2xl:w-[61px] xl:h-[20px] 2xl:h-[28px] xl:rounded-[9px] 2xl:rounded-[13px] bg-[#6c757d] bg-opacity-10 flex flex-col items-center justify-center xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-[#b8b6b6]">
                        1
                    </div>
                    <p className="xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-[#bcbcbc]">
                        Vehicle
                    </p>
                </div>
                <div className="w-[115px] h-[1px] bg-[#bfbfbf]" />
                <div className="flex flex-col items-center gap-y-[4px]">
                    <div className="xl:w-[43px] 2xl:w-[61px] xl:h-[20px] 2xl:h-[28px] xl:rounded-[9px] 2xl:rounded-[13px] bg-[#3155ff] flex flex-col items-center justify-center xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-white">
                        2
                    </div>
                    <p className="xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-[#7b7b7b]">
                        Information
                    </p>
                </div>
                <div className="w-[115px] h-[1px] bg-[#bfbfbf]" />
                <div className="flex flex-col items-center gap-y-[4px]">
                    <div className="xl:w-[43px] 2xl:w-[61px] xl:h-[20px] 2xl:h-[28px] xl:rounded-[9px] 2xl:rounded-[13px] bg-[#6c757d] bg-opacity-10 flex flex-col items-center justify-center xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-[#b8b6b6]">
                        3
                    </div>
                    <p className="xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-[#bcbcbc]">
                        Offer
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-start w-fit xl:gap-x-[53px] 2xl:gap-x-[75px]">
                <div className="bg-white xl:py-[48px] 2xl:py-[68px] xl:px-[26px] 2xl:px-[36px] xl:rounded-[21px] 2xl:rounded-[30px] shadow-lg xl:w-[470px] 2xl:w-[660px]">
                    <p className="xl:text-[28px] 2xl:text-[40px] text-center font-[700] font-[Manrope] text-black">
                        Vehicle Information
                    </p>
                    <div className="xl:mt-[55px] 2xl:mt-[78px] flex flex-row items-start justify-between xl:w-[418px] 2xl:w-[588px]">
                        <div className="xl:w-[247px] 2xl:w-[347px]">
                            <p className="xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                                Year, Maker and Model
                            </p>
                            <input placeholder="2018 BMW Series 580i" className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#3155ff] font-[700] font-[Manrope] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px] outline-none" />
                        </div>
                        <div className="xl:w-[148px] 2xl:w-[208px]">
                            <p className="xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                                Transmission
                            </p>
                            <div className="flex flex-row items-center justify-between xl:h-[34px] 2xl:h-[48px] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px]">
                                <input placeholder="Automatic" className="xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#3155ff] font-[700] font-[Manrope] outline-none w-[80px]" />
                                <p className="xl:text-[8px] 2xl:text-[11px] font-[600] font-sf-pro text-[#cbbdbd] text-opacity-60">
                                    Type
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:mt-[14px] 2xl:mt-[20px] flex flex-row items-start justify-between xl:w-[418px] 2xl:w-[588px]">
                        <div className="xl:w-[232px] 2xl:w-[326px]">
                            <p className="xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                                VIN Number
                            </p>
                            <div className="flex flex-row items-center justify-between xl:h-[34px] 2xl:h-[48px] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px]">
                                <input placeholder="2GNALCELK6H1588338" className="xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#3155ff] font-[700] font-[Manrope] h-full outline-none" />
                                <p className="xl:text-[8px] 2xl:text-[11px] font-[600] font-sf-pro text-[#cbbdbd] text-opacity-60">
                                    17 DIGIT VIN
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-[163px] 2xl:w-[229px]">
                            <p className="xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
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

                <div className="bg-white xl:py-[48px] 2xl:py-[68px] xl:px-[26px] 2xl:px-[36px] xl:rounded-[21px] 2xl:rounded-[30px] shadow-lg xl:w-[470px] 2xl:w-[660px]">
                    <p className="xl:text-[28px] 2xl:text-[40px] text-center font-[700] font-[Manrope] text-black">
                        Your Information
                    </p>
                    <div>
                        <p className="xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                            Full Name
                        </p>
                        <input placeholder="Enter your full name" className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#171717] placeholder-opacity-25 font-[400] font-[Manrope] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px] outline-none" />
                    </div>
                    <div className="flex flex-row items-center gap-x-[27px] mt-[21px]">
                        <div className="w-full">
                            <p className="xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                                Email Address
                            </p>
                            <input placeholder="Enter your E-maik" className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#171717] placeholder-opacity-25 font-[400] font-[Manrope] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px] outline-none" />
                        </div>
                        <div className="w-full">
                            <p className="xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                                Mobile Number
                            </p>
                            <input placeholder="Enter your Cell No." className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] text-[#3155ff] placeholder-[#171717] placeholder-opacity-25 font-[400] font-[Manrope] xl:px-[11px] 2xl:px-[15px] w-full shadow-md border-[1px] border-[#f6f6f6] xl:rounded-[9px] 2xl:rounded-[12px] xl:mt-[6px] 2xl:mt-[8px] outline-none" />

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