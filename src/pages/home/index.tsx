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
                <div className="bg-white h-full min-w-[33%] max-w-[657px] py-[42px] px-[36px] border-[0.5px] rounded-[30px] border-[#f8f8f8] shadow-2xl">
                    <p className="text-[41px] font-[700] text-center">
                        Get an offer by just adding
                        <div className="flex flex-row items-center justify-center">
                            the
                            <p className="ml-[12px] text-[#3155ff]">
                                VIN and Mileage
                            </p>
                        </div>
                    </p>
                </div>
            </div>

        </div >
    )
}
export default Home;