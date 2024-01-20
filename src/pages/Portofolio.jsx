import { useState } from "react";

// images
import animeApp  from '../assets/images/animeApp.png'
import dashboard  from '../assets/images/dashboard.png'
import taskPania  from '../assets/images/taskPania.png'
import landingPage  from '../assets/images/landingPage.png'
import todolist  from '../assets/images/todolist.png'

const Portofolio = () => {
    // variables
    const  [project,setproject] = useState([
        {
            link : 'https://aniiimee.netlify.app/',
            title : 'The Anime App',
            src : animeApp,
            id : 1
        },
        {
            link : 'https://mostafa-johar.github.io/dash/',
            title  :'Dashboard',
            src : dashboard,
            id : 2
        },
        {
            link : 'https://taskpaina.netlify.app/',
            title  :'Task pania',
            src : taskPania,
            id : 3
        },
        {
            link : 'https://mostafa-johar.github.io/ElDisha/',
            title  :'LandingPage',
            src : landingPage,
            id : 4
        },
        {
            link : 'https://mostafa-johar.github.io/deployTodo/',
            title  :'Todo List',
            src :  todolist,
            id : 5
        },
    ])
    
    // render
    return (
        <article className="portofolio">

            <h3 className="heading_title">Portofolio</h3>

            <section className="grid md:grid-cols-3 gap-5 mt-4">
              {
                project.map((proj)=>(
                    <a href={proj.link} target="_blank" key={proj.id} className="min-h-[150px]">
                    <div className="shadow-md p-3 hover:scale-110 transition-all h-full w-full">
                        <img src={proj.src} alt="portofolio" loading='lazy' className="min-h-[100px]" />
                        <p className="text-black mt-2 text-center text-lg font-medium ">{proj.title}</p>
                    </div>
                </a>
                ))
              }
            </section>
            
        </article>
    );
}

export default Portofolio;