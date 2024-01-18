import { useState } from "react";

const Portofolio = () => {
    // variables
    const  [project,setproject] = useState([
        {
            link : 'https://aniiimee.netlify.app/',
            title : 'The Anime App',
            src : 'src/assets/images/animeApp.png',
            id : 1
        },
        {
            link : 'https://mostafa-johar.github.io/dash/',
            title  :'Dashboard',
            src : 'src/assets/images/dashboard.png',
            id : 2
        },
        {
            link : 'https://taskpaina.netlify.app/',
            title  :'Task pania',
            src : 'src/assets/images/taskPania.png',
            id : 3
        },
        {
            link : 'https://mostafa-johar.github.io/ElDisha/',
            title  :'LandingPage',
            src : 'src/assets/images/landingPage.png',
            id : 4
        },
        {
            link : 'https://mostafa-johar.github.io/deployTodo/',
            title  :'Todo List',
            src : 'src/assets/images/todolist.png',
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
                    <a href={proj.link}>
                    <div className="shadow-md p-3 hover:scale-110 transition-all">
                        <img src={proj.src} alt="portofolio" loading='lazy'/>
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