export default function Contact () {
    return <div>
        <h2>Contact Me</h2>
        <form className='form'>
            <input
            name="email"
            type="text"
            placeholder="email"
            />
        </form>
        <form className='form'>
            <input
            name="message"
            type="text"
            placeholder="Your message"
            />
            <button type="submit">
                Submit
            </button>
        </form>
    </div>
}