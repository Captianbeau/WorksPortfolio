import Avatar from '../assets/images/avatarPortNew.jpg'
export default function AboutMe() {
    //need a profile pic
    return <div>
        <h2>About Me</h2>
        <img src={Avatar} alt='Avatar' className= "avatar" />
        <p>Blah</p>
    </div>
}