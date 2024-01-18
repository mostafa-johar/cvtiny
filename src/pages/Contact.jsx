// Contact Component
const Contact = () => {
    // render
    return (

        <article className="contact">

            <h3 className="heading_title">Get in touch</h3>

            <form onSubmit={(e) => e.preventDefault()} className="mt-4 p-4 border-gray-200 border-2 rounded-xl lg:w-[60%] mx-auto">
                <h3 className="heading_title">Contact</h3>
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-transparent border-2 mt-4" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-transparent border-2 mt-4" />
                <input type="text" placeholder="Subject" className="w-full p-3 rounded-md bg-transparent border-2 mt-4" />
                <textarea name="msg" placeholder="Message" className="w-full h-[100px] p-3 rounded-md bg-transparent border-2 mt-4 resize-none"  ></textarea>
                <button type="submit" className="w-full p-3 rounded-md bg-black text-white border-2 mt-4">Send Message</button>
            </form>

        </article>
    );
}

export default Contact;