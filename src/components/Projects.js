import minimalista from '../assets/minimalista.jpg';
import Planet_Rescue from '../assets/Planet_Rescue.jpg';
import Real_Estate from '../assets/Real_Estate.png';
import Medical_nft from '../assets/Medical_nft.png';
import DeFi_Bank from '../assets/DeFi_Bank.jpeg';

const Projects = () => {
    return (

        <section className="projects">
            
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">

                    <h3>DeFi Bank</h3>
                    <img src={DeFi_Bank} alt="DeFi Bank" />
                    <p>
                        A minimalistic <strong>decentralised banking</strong> platform.
                    </p>
                    <p>
                        Includes whitelisted symbols. 
                    </p>
                    <p>
                    Users can deposit and withdraw ETH, MATIC and USDT.
                    </p>

                    <a href="https://github.com/SK374/defi-bank" target="_blank" className="button">Code</a>
             
                </div>

                <div className="projects__card">

                    <h3>Medical Report NFT </h3>
                    <img src={Medical_nft} alt="Medical Report NFT" />
                    <p>
                        <strong>Medical Smart Contracts </strong>where medical professionals can register and view a list of patients and set up appointments.
                    </p>
                    <p>
                        Medical professionals can only view a Patient’s health record if they have been granted access.
                    </p>
                    <p>
                        A Patient can revoke access at any time. 
                    </p>
                    <p>
                        A Non-Fungibe Token (NFT) is created and images/files are stored on IPFS.
                    </p>

                    <a href="https://github.com/SK374/medical-record-smart-contracts" target="_blank" className="button">Code</a>
              
                </div>

                <div className="projects__card">

                    <h3>Real Estate</h3>
                    <img src={Real_Estate} alt="Real Estate" />
                    <p>
                        <strong>Decentralised real estate</strong>
                    </p>
                    <p>
                        <strong>Escrow Smart Contract </strong>and <strong>Real Estate NFT.</strong>
                    </p>

                    <a href="https://github.com/SK374/real-estate-smart-contracts" target="_blank" className="button">Code</a>
               
                </div>

                <div className="projects__card">

                    <h3>Planet Rescue</h3>
                    <img src={Planet_Rescue} alt="Planet Rescue" />
                    <p>
                         Built using Flutter & Firebase.
                    </p>
                    <p>
                        Tackling Climate Change.
                    </p>

                    <a href="https://play.google.com/store/apps/details?id=com.planetrescue_climatechange" target="_blank" className="button">Google Play Store</a>
                
                </div>

                <div className="projects__card">

                    <h3>Minimalista</h3>
                    <img src={minimalista} alt="Minimalista" />
                    <p>
                        ToDo List Application (100% Kotlin)
                    </p>

                    <a href="https://play.google.com/store/apps/details?id=app.bluecoral.MinimaLista" target="_blank" className="button">Google Play Store</a>

                </div>

            </div>

        </section>
        
    );
}

export default Projects;