import { FC } from "react";

const Home: FC = () => {
    return (
        <div className="min-h-screen">
            <div className="h-[607px] w-full mt-[134px] bg-no-repeat pl-[64px] pr-[174px] flex flex-row items-center justify-between" style={{
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
                <div className="bg-white h-full w-fit max-w-[657px] py-[42px] px-[36px] border-[0.5px] rounded-[30px] border-[#f8f8f8] shadow-2xl">
                    <p className="text-[41px] font-[700] text-center whitespace-nowrap font-[Manrope]">
                        Get an offer by just adding
                        <div className="flex flex-row items-center justify-center font-[Manrope]">
                            the
                            <p className="ml-[12px] text-[#3155ff] font-[Manrope]">
                                VIN and Mileage
                            </p>
                        </div>
                    </p>
                    <p className="text-[18px] font-[600] font-[Manrope] text-[#171717] my-[50px]">
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
                </div>
            </div>

        </div >
    )
}
export default Home;