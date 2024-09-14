
const Information1 = () => {
    return (
        <div className="bg-[#fafafa] pt-[100px] pb-[96px] flex flex-col items-center">
            <div className="min-w-[535px] flex flex-row items-center justify-between gap-x-[23px] mb-[50px]">
                <div className="flex flex-col items-center gap-y-[4px]">
                    <div className="w-[60px] h-[28px] rounded-[13px] bg-[#6c757d] bg-opacity-10 flex flex-col items-center justify-center text-[16px] font-[700] font-[Manrope] text-[#b8b6b6]">
                        1
                    </div>
                    <p className="text-[16px] font-[700] font-[Manrope] text-[#bcbcbc]">
                        Vehicle
                    </p>
                </div>
                <div className="w-[115px] h-[1px] bg-[#bfbfbf]" />
                <div className="flex flex-col items-center gap-y-[4px]">
                    <div className="w-[60px] h-[28px] rounded-[13px] bg-[#3155ff] flex flex-col items-center justify-center text-[16px] font-[700] font-[Manrope] text-white">
                        2
                    </div>
                    <p className="text-[16px] font-[700] font-[Manrope] text-[#7b7b7b]">
                        Information
                    </p>
                </div>
                <div className="w-[115px] h-[1px] bg-[#bfbfbf]" />
                <div className="flex flex-col items-center gap-y-[4px]">
                    <div className="w-[60px] h-[28px] rounded-[13px] bg-[#6c757d] bg-opacity-10 flex flex-col items-center justify-center text-[16px] font-[700] font-[Manrope] text-[#b8b6b6]">
                        3
                    </div>
                    <p className="text-[16px] font-[700] font-[Manrope] text-[#bcbcbc]">
                        Offer
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-start w-fit gap-x-[4%]">

                <div className="bg-white py-[8%] px-[5%] rounded-[30px] shadow-lg min-w-[34%]">
                    <p className="text-[40px] font-[700] font-[Manrope] text-black">
                        Vehicle Information
                    </p>
                    <div className="mt-[11%] flex flex-row items-start gap-x-[5%]">
                        <div className="w-[60%] border">
                            <p className="text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                                Year, Maker and Model
                            </p>
                            <input className="h-[48px] w-full shadow-md border-[1px] border-[#f8f8f8] rounded-[12px] mt-[8px]" />
                        </div>
                        <div className="w-[35%] border-2">
                            <p className="text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                                Transmission
                            </p>
                            <input className="h-[48px] w-full shadow-md border-[1px] border-[#f8f8f8] rounded-[12px] mt-[8px]" />
                        </div>
                    </div>
                </div>

                <div className="bg-white py-[68px] px-[36px] rounded-[30px] shadow-lg w-[34%]">
                    <p className="text-[40px] font-[700] font-[Manrope] text-black">
                        Vehicle Information
                    </p>
                    <div className="mt-[78px] flex flex-row items-start justify-between">
                        <div>
                            <p className="text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70">
                                Year, Maker and Model
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Information1;