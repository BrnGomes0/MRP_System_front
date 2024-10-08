import React from "react"
import TitleBig from "../../components/Title/Title_h1"
import TitleSmall from "../../components/Title/Title_h3"
import image404 from "../../assets/404.png"

const Error: React.FC = () => {
    return(
        <section 
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: "100vh",
                backgroundImage: `url(${image404})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div>
                
            </div>
            <div className="flex flex-col justify-center text-center ">
                <TitleBig
                    title="404"
                    classname="text-9xl text-white"
                />
                <TitleSmall
                    title="Page not found!!"
                    classname="text-white"
                />
            </div>
        </section>
    )
}

export default Error