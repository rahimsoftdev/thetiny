import Banner from '../components/Banner';
import PopularLinks from '../components/Popularlinks';
import Stats from '../components/Stats';

const HomePage = () => {
    return (
        <div className=''>
            <Banner/>
            <Stats/>
            <PopularLinks/>
        </div>
    );
};

export default HomePage;