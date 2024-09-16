import { FC } from "react";

const Home: FC = () => {
    return (
        <div className="min-h-[607px] mb-[80px] w-full mt-[134px] bg-no-repeat pl-[64px] pr-[174px] flex flex-row items-center justify-between" style={{
            backgroundImage: 'url(/assets/images/Rectangle130.png)',
            backgroundSize: 'auto 497px',
            backgroundPosition: 'center center'
        }}>
            <div className="flex flex-col items-start">
                <p className="text-white text-[46px] font-podium-sharp font-[800]">
                    FAST, FAIR CAR OFFERS
                </p>
                <p className="text-[34px] font-[800] text-white">
                    QUICK CASHOFF IN CONFIDENCE
                </p>
            </div>
            <div className="bg-white h-full w-fit max-w-[467px] home-card py-[42px] px-[36px] border-[0.5px] rounded-[30px] border-[#f8f8f8] shadow-2xl">
                <p className="text-[41px] font-[700] text-center whitespace-nowrap font-[Manrope]">
                    Get an offer by just adding
                    <div className="flex flex-row items-center justify-center font-[Manrope]">
                        the
                        <p className="ml-[12px] text-[#3155ff] font-[Manrope]">
                            VIN and Mileage
                        </p>
                    </div>
                </p>
                <p className="text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70 mt-[50px] mb-[4px]">
                    VIN Number
                </p>
                <div className="flex flex-row items-center justify-between h-[48px] w-full px-[16px] border-[2px] border-[rgba(23, 23, 23, 0.1)] rounded-[12px] " >
                    <input placeholder="Enter the VIN Number Here" className="h-full w-full outline-none rounded-[13px] text-[15px] font-[400] text-[#171717] text-opacity-60" />
                    <p className="text-[15px] text-[#171717] font-[400] text-opacity-60 whitespace-nowrap font-sf-pro">
                        17 DIGIT VIN
                    </p>
                </div>
                <p className="mt-[4px] text-[13px] font-[Manrope] font-[600] text-[#171717] text-opacity-60">
                    The VIN Number will help us identify the car details.
                </p>
                <div className="flex flex-row items-start gap-x-[32px]">
                    <div className="w-full">
                        <p className="mt-[21px] text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70 mb-[4px]">
                            Mileage
                        </p>
                        <input placeholder="Enter Mileage" className="h-[48px] text-[15px] font-[400] font-sf-pro text-[#171717] text-opacity-70 outline-none px-[16px] rounded-[12px] border-[2px] border-[#171717] border-opacity-10 w-full" />
                        <p className="mt-[4px] text-[13px] font-[Manrope] font-[600] text-[#171717] text-opacity-60">
                            Will help us understand car travelled by far.
                        </p>
                    </div>
                    <div className="w-full">
                        <p className="mt-[21px] text-[18px] font-[600] font-[Manrope] text-[#171717] text-opacity-70 mb-[4px]">
                            ZIP Code
                        </p>
                        <input placeholder="Enter Area ZIP Code" className="h-[48px] text-[15px] font-[400] font-sf-pro text-[#171717] text-opacity-70 outline-none px-[16px] rounded-[12px] border-[2px] border-[#171717] border-opacity-10 w-full" />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <button className="mt-[50px] h-[60px] w-[263px] bg-[#3155ff] text-[16px] font-[700] font-[Manrope] text-white rounded-[12px]">
                        Continue
                    </button>
                </div>
                <p className="text-[13px] font-[Manrope] font-[600] text-[#171717] text-opacity-30 mt-[24px] text-center">
                    The VIN Number will help us identify the car details.
                </p>
            </div>
        </div>
    )
}
export default Home;