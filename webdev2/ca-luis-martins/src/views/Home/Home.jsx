import { AttractionsList } from "./AttractionsList";
import dublinNight from "./../../img/places/dublin-night.jpg";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FormatedTextSpan } from '../../components/Styling/FormatedTextSpan';


export const Home = () => (
    <>
        <div className="relative text-white">
            <div className="absolute top-10 lg:top-20 left-8 lg:left-20 text-5xl lg:text-6xl font-lobster">
                <p className="">Greetings from</p>
                <p className="font-uncial pl-16 lg:pl-40 pt-3 text-white lg:text-7xl" >
                    <span className="text-emerald-500">Ire</span>
                    la
                    <span className="text-orange-500">nd</span>
                </p>
            </div>
            <div className="absolute lg:right-16 top-40 p-3 lg:w-1/3 flex flex-col justify-center gap-12">
                <p className="text-center text-4xl font-lobster">
                    Welcome to our Ireland travel haven!<br />
                    As you explore the vibrant landscapes and rich cultural tapestry of the Emerald Isle, we stand as your dedicated guides, ready to turn your journey into an extraordinary experience.
                </p>
                <a href="#attractions-list" className="text-7xl animate-bounce mx-auto opacity-50">
                    <BsChevronDoubleDown />
                </a>
            </div>
            <img src={dublinNight} alt="dublin at night" className="h-[95vh] w-full object-cover" />
        </div >
        <div id="attractions-list">
            <p className="font-lobster text-xl sm:text-3xl">
                Feeling undecided on what to explore in <FormatedTextSpan>Ireland</FormatedTextSpan>?<br />
                Let us be your guide! Delve into our carefully curated list below featuring our top <span className="underline underline-offset-4">6</span> favorite attractions in <FormatedTextSpan>Ireland</FormatedTextSpan>. <br />
                From historic landmarks to breathtaking natural wonders, these handpicked gems promise an unforgettable journey through this beautiful country.
            </p>
            <AttractionsList />
        </div>
    </>
)
