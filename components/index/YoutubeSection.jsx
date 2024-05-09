import arrow from '/arrow.svg'
import YoutubeEmbed from "./YoutubeEmbed";
const YoutubeSection = () => {
    return (
        <>
            <section className="py-10 xl:py-0 w-full h-auto md:h-auto xl:h-full bg-[#F9F5E6]/50 xl:max-h-[400px] lg:h-auto flex">
                <div className="row-span-1 w-full md:w-4/5 m-auto h-fit md:h-full flex flex-col lg:grid lg:grid-cols-2 gap-5">
                    <div className="col-span-1 flex items-center justify-center m-auto h-[250px] lg:max-h-[500px] lg:w-full xl:max-h-[400px] xl:h-4/5 w-4/5">
                        <YoutubeEmbed />
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <div className="w-4/5 m-auto md:max-w-lg flex flex-col gap-5">
                            <h1 className="font-primary font-bold text-2xl text-center lg:text-start">See our System in Action!</h1>
                            <p className="font-primary text-center lg:text-start">Discover how SCALE transforms mosquito control with advanced detection, tracking, and elimination features. Explore our intuitive website application platform for monitoring, settings configuration, and insightful analytics. </p>
                            <button className="p-2 hover:bg-[#E0BD68]/50 ease-in-out duration-300 bg-[#E0BD68] w-fit px-10 rounded-full m-auto lg:m-0">
                                <figure className="size-full max-w-10">
                                    <img src={arrow} className="size-full" alt="" />
                                </figure>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default YoutubeSection