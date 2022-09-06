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
                            <a className="storj-link" href ="https://link.storjshare.io/jwajgyojlln5auojucyukg3tr7xq/portfolio-bucket%2FSakari_CV.pdf" attributes-list>CV</a>
                    <br></br>   
                        <a className="storj-link" href ="https://link.storjshare.io/jxhwbyojqa2keiygiswdueu2pesa/portfolio-bucket%2FSakari_Covering_Letter.pdf" attributes-list>Covering Letter</a>
                    <br></br>
                    <br></br>
                            <small>📍 London, UK/Globally Remote</small>
                            
            </div>

        </section>
        
    );
}

export default Header;