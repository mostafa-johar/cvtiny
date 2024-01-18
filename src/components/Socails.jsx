import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// Socail Component
const Social = ({ bg, textColor }) => {

    // variable
    const socials = [
        { name: faGithub, link: 'https://github.com/mostafa-johar', id: 1 },
        { name: faLinkedinIn, link: 'https://www.linkedin.com/in/mostafa-al-johar-70a23521a/', id: 2 }
    ]

    // render
    return (
        <div className="socials my-4 flex gap-2">
            {
                socials.map((social) => (
                    <a href={social.link} key={social.id}>
                        <FontAwesomeIcon icon={social.name} className={`${bg} text-black p-1 rounded text-l hover:bg-yellow-300`} />
                    </a>
                ))
            }
        </div>
    );
}

export default Social;
