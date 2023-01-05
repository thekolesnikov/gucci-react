import SkiSection from './SkiSection/SkiSection';
import ArrivalsSection from './ArrivalsSection/ArrivalsSection';
import GendorSection from './GendorSection/GendorSection';
import Bestsellers from './Bestsellers/Bestsellers';
import MxSection from './MxSection/MxSection';
import GiftsSection from './GiftsSection/GiftsSection';
import BlueSection from './BlueSection/BlueSection';
import PetSection from './PetSection/PetSection';

function HomePage() {
    return (
        <>
            <SkiSection />
            <ArrivalsSection />
            <GendorSection />
            <Bestsellers />
            <MxSection />
            <GiftsSection />
            <BlueSection />
            <PetSection />
        </>
    );
}

export default HomePage;
