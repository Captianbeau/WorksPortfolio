import Avatar from '../assets/images/avatarPortNew.jpg'
export default function AboutMe() {
    //about me page with description about me
    return <div className='aboutMe'>
        <img src={Avatar} alt='Avatar' className="avatar" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</p>
    </div>
}