import cliffs from "./../img/places/cliffs.jpg";
import killarney from "./../img/places/killarney.jpg";
import trinity from "./../img/places/trinity.jpg";
import grandCanal from "./../img/places/grand-canal.jpg";
import giant from "./../img/places/giant.jpg";
import hill from "./../img/places/hill-of-tara.jpg"
import { AttractionCard } from '../components/AttractionCard/AttractionCard';

export const Home = () => (
    <>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 p-6">
            <AttractionCard
                imgSrc={killarney}
                title="Killarney National Park, Co. Killarney"
                bodyText="Discover the enchanting beauty of Killarney National Park, where lush landscapes, serene lakes, and ancient woodlands create a captivating natural haven. Immerse yourself in the breathtaking scenery and explore the park's rich biodiversity, ensuring an unforgettable experience in the heart of County Kerry."
            />
            <AttractionCard
                imgSrc={cliffs}
                title="The Cliffs of Moher, Co. Clare"
                bodyText="Marvel at the awe-inspiring Cliffs of Moher, standing proudly along the rugged coast of County Clare. These towering cliffs offer a dramatic vista of the Atlantic Ocean, providing a spectacular backdrop to your journey. Be prepared to be spellbound by the sheer beauty and raw power of this iconic Irish landmark."
            /><AttractionCard
                imgSrc={trinity}
                title="Trinity College, Co. Dublin"
                bodyText="Nestled in the heart of Dublin, Trinity College stands as an iconic symbol of academic excellence and historical richness. Home to the Book of Kells, an illuminated manuscript of extraordinary beauty, the college invites you to explore its hallowed halls, picturesque courtyards, and the Long Room of the Old Library. With a legacy dating back to 1592, Trinity College provides a captivating blend of scholarship, culture, and architectural splendor, making it a must-visit destination for those seeking a glimpse into Ireland's intellectual heritage."
            /><AttractionCard
                imgSrc={grandCanal}
                title="Grand Canal Docks, Co. Dublin"
                bodyText="Experience the contemporary charm of Grand Canal Dock, a vibrant and modern neighborhood in the heart of Dublin. Once a bustling hub for industry, the area has transformed into a dynamic urban space, featuring sleek architecture, trendy cafes, and waterside promenades. Enjoy a leisurely stroll along the scenic canal, admire the striking architecture, and immerse yourself in the lively atmosphere of this reinvigorated district. Grand Canal Dock perfectly balances the old and the new, offering a delightful blend of history and contemporary culture in Ireland's capital city."
            /><AttractionCard
                imgSrc={giant}
                title="The Giant's Causeway, Co. Antrim"
                bodyText="Witness the geological marvel of the Giant's Causeway in County Antrim. The hexagonal basalt columns, formed by ancient volcanic activity, create a surreal landscape along the Northern Irish coast. This UNESCO World Heritage Site is a testament to nature's artistic prowess and a must-see destination for any traveler."
            /><AttractionCard
                imgSrc={hill}
                title="Hill of Tara, Co Meath"
                bodyText="Delve into the historical significance of the Hill of Tara in County Meath, an ancient site steeped in mythology and royal heritage. As the legendary seat of the High Kings of Ireland, this sacred hill offers panoramic views of the surrounding landscape. Explore the ancient monuments and connect with Ireland's regal past."
            />
        </div>
    </>
)
// References
// https://www.tripsavvy.com/top-places-to-see-in-ireland-4165894
// Killarney National Park
// The Cliffs of Moher, Co Clare
// Newgrange and Bru na Boinne, Co Meath
// Dublin City
// The Giant's Causeway, Co Antrim
// Hill of Tara, Co Meath