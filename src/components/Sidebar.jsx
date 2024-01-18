import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
// component
import Social from './Socails'
import Address from './icons/address';


// component 
const SideBar = () => {

    // render
    return (
        <section className="side-bar bg-blue-400 lg:w-[40%] items-center flex-col p-5 justify-between hidden lg:flex">

            <img src={require('../assets/images/name.jpg')} alt="profile" className="w-32 h-32 object-cover rounded-lg" loading='lazy' />

            <h3 className='text-white text-xl font-medium my-3 '>Mostafa Mahmoud</h3>

            <div className='bg-white text-black text-l font-medium px-5 py-1 rounded-3xl '>Front-End developer</div>

            <Social bg="bg-white" />

            <div className="details  ">
                <Address />
            </div>

            <button className='bg-white text-black text-lg font-medium px-6 py-3 rounded-3xl hover:bg-yellow-300 mb-5'>
                <FontAwesomeIcon icon={faDownload} className='mr-2 text-yellow-600' />
                Download CV
            </button>

        </section>
    );
}

export default SideBar;