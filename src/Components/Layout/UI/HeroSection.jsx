import { FaLongArrowAltRight } from 'react-icons/fa'

export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">

                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, With Atlas World
                    </h1>
                    <p className="paragraph">
                        🌍 AtlasWorld... Atlases today include not just maps, but data on population, climate, biodiversity,
                        and even space exploration. The legendary city of Atlantis was said to be ruled by a king named Atlas,
                        and its name means “Island of Atlas”
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Sart Exploring <FaLongArrowAltRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img className='banner-image' src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-earth-globe-isolated-on-white-background-map-png-image_11059520.png" alt="" />
                </div>
            </div>
        </main>
    )
}