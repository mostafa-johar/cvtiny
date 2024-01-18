import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
// component
import Social from "../components/Socails";


// About Component
const About = () => {
    // render
    return (
        <article className="about">

            <div className="flex flex-col lg:flex-row">

                <section className="basis-2/3">
                    <h3 className="heading_title">About</h3>
                    <p className="mt-4 text-gray-700">
                        I am Front-end developer from Alexandria, Working in web development . I studied Mathematics and Computer Science at Faculty of Science at Alexandria University.
                        <br />
                        <br />
                        My Name is Mostafa Mahmoud I am 24 Years old, I graduated from faculty of science in 2022 ,Department of Mathmatics and Computer Science. I live with my family and I am single.
                    </p>
                </section>

                <section className="basis-1/3">

                    <div className="details mt-3 p-3 bg-pink-50">
                        <h3 className="heading_title">Details</h3>
                        <ul className="mt-4 text-blue-500 flex flex-col gap-3 font-medium">
                            <li>Age: <span className="text-black">24</span></li>
                            <li>Experience: <span className="text-black">1</span></li>
                            <li>Language: <span className="text-black">Arabic</span></li>
                        </ul>

                    </div>

                    <div className="bg-slate-100 p-3">
                        <h3 className="heading_title">Social</h3>
                        <Social bg="bg-blue-400 "/>
                    </div>

                </section>

            </div>

            <div>

                <h3 className="heading_title">what I am Doing</h3>

                <section className="flex justify-center items-center gap-4  mt-4">

                    <div className="border-2 p-3 rounded-lg text-center">
                    <FontAwesomeIcon icon={faCode} className='text-blue-500' />
                        <h6 className="font-bold">Front-end</h6>
                        <p className="text-gray-700 text-sm">
                            High-quality development of sites at the professional level
                        </p>
                    </div>

                    <div className="border-2 p-3 rounded-lg text-center">
                    <FontAwesomeIcon icon={faCode} className='text-blue-500' />
                        <h6 className="font-bold">Back-end</h6>
                        <p className="text-gray-700 text-sm">
                            High-quality development of sites at the professional level
                        </p>
                    </div>


                </section>  
            </div>
        </article>
    );
}

export default About;