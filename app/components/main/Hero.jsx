
const  Hero = () => {
    return (
        <div className="relative flex-col h-full w-full ">

            <video autoPlay
                loop
                muted
                className="absolute rotate-180 top-[-340px] left-0 z-[-1] w-full h-full object-cover  " >
                <source src="/blackhole.webm"  type="video/webm"    />
            </video>
           



        
        </div>
    )
}

export default Hero;