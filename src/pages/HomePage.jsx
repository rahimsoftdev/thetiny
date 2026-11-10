import Banner from '../components/Banner';
import PopularLinks from '../components/Popularlinks';
import Premium from '../components/Premium';
import Pricing from '../components/Pricing';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import WhyChoose from '../components/Whychoose';

const HomePage = () => {
    return (
        <div className=''>
            <Banner/>
            <Stats/>
            <PopularLinks/>
            <Premium/>
            <Pricing/>
            <Testimonials/>
            <WhyChoose/>
        </div>
    );
};

export default HomePage;