import profile from '../assets/profile.jpg';

const Header = () => {
    return (

        <section className='header'>

            <img src={profile} alt="Sakari De-Meis" />

            <div className='header__content'>

                <h1>Hi, I'm Sakari</h1>
                <p>
                Smart Contract & Blockchain Developer 
                </p>
                    <br></br>
                            <a href='mailto:sk374@protonmail.com' className='button'>Email</a>
                    <br></br>
                    <br></br>
                            <small><a href ="https://link.storjshare.io/jugvoxlwvynsbnakt64ioesehmvq/portfolio-bucket%2FSakari_CV.odt" attributes-list>CV</a></small>
                    <br></br>   
                            <small><a href ="https://link.storjshare.io/jwgdqzr3uxugixuupzsvpln3svzq/portfolio-bucket%2FCovering_Letter.odt" attributes-list>Covering Letter</a></small>
                    <br></br>
                    <br></br>
                            <small>📍 London, United Kingdom/Globally Remote</small>
                            
            </div>

        </section>
        
    );
}

export default Header;