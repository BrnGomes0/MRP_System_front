import React from "react";
import imageBosch from "../../assets/login_bosch.png"
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import SubTitleBold from "../../components/SubTitle/SubTitleBold";
import Button from "../../components/Button/Button";


const Login: React.FC = () => {
    return(
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: "100vh",
                backgroundImage: `url(${imageBosch})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div className="flex flex-col justify-center text-center p-4">
                <div className="bg-white w-[360px] h-[280px] rounded-xl p-4 flex flex-col">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="flex flex-col p-2">
                            <TitleBig
                                title="MRP System"
                            />
                            <SubTitle
                                subTitle="Login in the Simulator:"
                            />
                        </div>
                        <div className="flex flex-col p-2 justify-center items-center gap-2">
                            <Button
                                text="Login"
                            />
                            <SubTitleBold
                                subTitleBold="*Bosch employees only. Single Sign-On required."
                                classname="text-black text-[9px] w-[180px]"
                            />    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login