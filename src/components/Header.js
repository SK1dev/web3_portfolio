import profile from '../assets/profile.jpeg';

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
                            <small><a href ="https://link.storjshare.io/jwgnwslj3xurogkc2u5o2crg32zq/portfolio-bucket%2FSakari_CV.pdf" attributes-list>CV</a></small>
                    <br></br>   
                            <small><a href ="https://link.storjshare.io/jxhwbyojqa2keiygiswdueu2pesa/portfolio-bucket%2FSakari_Covering_Letter.pdf" attributes-list>Covering Letter</a></small>
                    <br></br>
                    <br></br>
                            <small>📍 London, United Kingdom/Globally Remote</small>
                            
            </div>

        </section>
        
    );
}

export default Header;