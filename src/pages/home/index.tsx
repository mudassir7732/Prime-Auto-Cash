import { FC } from "react";

const Home: FC = () => {
    return (
        <div className="xl:bg-[auto_354px] 2xl:bg-[auto_497px] xl:min-h-[431px] 2xl:min-h-[607px] xl:mb-[57px] 2xl:mb-[80px] xl:mt-[95px] 2xl:mt-[134px] xl:pl-[46px] 2xl:pl-[64px] xl:pr-[124px] 2xl:pr-[174px] w-full bg-no-repeat flex flex-row items-center justify-between bg-center" style={{ backgroundImage: 'url(/assets/images/Rectangle130.png)' }}>
            <div className="flex flex-col items-start justify-start">
                <p className="text-white xl:text-[33px] 2xl:text-[46px] font-podium-sharp font-[800]">
                    FAST, FAIR CAR OFFERS
                </p>
                <p className="xl:text-[24px] 2xl:text-[34px] font-[800] text-white">
                    QUICK CASHOFF IN CONFIDENCE
                </p>
            </div>
            <div className="bg-white h-full w-fit xl:max-w-[467px] 2xl:max-w-[657px] xl:py-[30px] 2xl:py-[42px] xl:px-[26px] 2xl:px-[36px] xl:rounded-[21px] 2xl:rounded-[30px] border-[0.5px] border-[#f6f6f6] shadow-2xl">
                <p className="xl:text-[29px] 2xl:text-[41px] font-[700] text-center whitespace-nowrap font-[Manrope]">
                    Get an offer by just adding
                    <div className="flex flex-row items-center justify-center font-[Manrope]">
                        the
                        <p className="xl:ml-[9px] 2xl:ml-[12px] text-[#3155ff] font-[Manrope]">
                            VIN and Mileage
                        </p>
                    </div>
                </p>
                <p className="xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] xl:mt-[36px] 2xl:mt-[50px] xl:mb-[3px] 2xl:mb-[4px]">
                    VIN Number
                </p>
                <div className="flex flex-row items-center justify-between xl:h-[34px] 2xl:h-[48px] w-full xl:px-[11px] 2xl:px-[16px] xl:border-[1.4px] 2xl:border-[2px] border-[rgba(23, 23, 23, 0.1)] xl:rounded-[9px] 2xl:rounded-[12px]" >
                    <input placeholder="Enter the VIN Number Here" className="h-full w-full outline-none xl:rounded-[9px] 2xl:rounded-[13px] xl:text-[11px] 2xl:text-[15px] font-[400] text-[#171717] text-opacity-60" />
                    <p className="xl:text-[11px] 2xl:text-[15px] text-[#171717] font-[400] text-opacity-60 whitespace-nowrap font-sf-pro">
                        17 DIGIT VIN
                    </p>
                </div>
                <p className="xl:mt-[3px] 2xl:mt-[4px] xl:text-[9px] 2xl:text-[13px] font-[Manrope] font-[600] text-[#171717] text-opacity-60">
                    The VIN Number will help us identify the car details.
                </p>
                <div className="flex flex-row items-start xl:gap-x-[23px] 2xl:gap-x-[32px]">
                    <div className="w-full">
                        <p className="xl:mt-[15px] 2xl:mt-[21px] xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70 xl:mb-[3px] 2xl:mb-[4px]">
                            Mileage
                        </p>
                        <input placeholder="Enter Mileage" className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] font-[400] font-sf-pro text-[#171717] text-opacity-70 outline-none xl:px-[11px] 2xl:px-[16px] xl:rounded-[9px] 2xl:rounded-[12px] xl:border-[1.4px] 2xl:border-[2px] border-[#171717] border-opacity-10 w-full" />
                        <p className="xl:mt-[3px] 2xl:mt-[4px] xl:text-[9px] 2xl:text-[13px] font-[Manrope] font-[600] text-[#171717] text-opacity-60">
                            Will help us understand car travelled by far.
                        </p>
                    </div>
                    <div className="w-full">
                        <p className="xl:mt-[15px] 2xl:mt-[21px] xl:text-[13px] 2xl:text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70 xl:mb-[3px] 2xl:mb-[4px]">
                            ZIP Code
                        </p>
                        <input placeholder="Enter Area ZIP Code" className="xl:h-[34px] 2xl:h-[48px] xl:text-[11px] 2xl:text-[15px] font-[400] font-sf-pro text-[#171717] text-opacity-70 outline-none xl:px-[11px] 2xl:px-[16px] xl:rounded-[9px] 2xl:rounded-[12px] xl:border-[1.4px] 2xl:border-[2px] border-[#171717] border-opacity-10 w-full" />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <button className="xl:mt-[36px] 2xl:mt-[50px] xl:h-[43px] 2xl:h-[60px] xl:w-[187px] 2xl:w-[263px] bg-[#3155ff] xl:text-[11px] 2xl:text-[16px] font-[700] font-[Manrope] text-white xl:rounded-[9px] 2xl:rounded-[12px]">
                        Continue
                    </button>
                </div>
                <p className="xl:text-[9px] 2xl:text-[13px] font-[Manrope] font-[600] text-[#171717] text-opacity-30 xl:mt-[17px] 2xl:mt-[24px] text-center">
                    The VIN Number will help us identify the car details.
                </p>
            </div>
        </div>
    )
}
export default Home;