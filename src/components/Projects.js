import minimalista from "../assets/minimalista.jpeg";
import Planet_Rescue from "../assets/Planet_Rescue.jpeg";
import Real_Estate from "../assets/RealEstate.jpeg";
import Medical_nft from "../assets/Medical_nft.jpeg";
import DeFi_Bank from "../assets/DeFi_Bank.jpeg";
import nft_bridge from "../assets/nft-bridge.jpeg";
import staking from "../assets/staking.jpeg";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>NFT Bridge</h3>
          <img src={nft_bridge} alt="NFT Bridge" />
          <p>
              <strong>NFT Bridge</strong> with <strong>NextJS</strong> and{" "}
              <strong>EthersJS</strong>
          </p>
          <p>
            Move your NFT's between different EVM compatible blockchains! All
            from a beautifully styled Web3 frontend! A custom ERC20 token (my token = SKDR) can be
            used as payment to bridge NFTs.
          </p>
          <p>Steps for a secure process:</p>
          <ol className="nft-bridge-steps">
            <li>Get approval to move NFT. </li>
            <li>Send NFT to source Custody Contract.</li> 
            <li>Release the destination NFT.</li>
          </ol>
          <a
            href="https://github.com/SK374/nft-bridge"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>NFT Staking</h3>
          <img src={staking} alt="Staking" />
          <p>
            <strong>Stake</strong> your <strong>ERC721 NFTs</strong> and issue{" "}
            <strong>ERC20 Tokens</strong> as Rewards.
          </p>
          <p>
            <strong>Multi-Vault functionality</strong> - allocate individual NFT
            collections to be staked by end users.
          </p>
          <p>
            <strong>Multiple currencies</strong> accepted as payment to mint
            NFT's.
          </p>
          <p>
            Ability to <strong>update price</strong> on the collection.
          </p>
          <a
            href="https://github.com/SK374/nft-staking"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>DeFi Bank</h3>
          <img src={DeFi_Bank} alt="DeFi Bank" />
          <p>
            A minimalistic <strong>decentralised banking</strong> platform.
          </p>
          <p>Includes whitelisted symbols.</p>
          <p>Users can deposit and withdraw ETH, MATIC and USDT.</p>

          <a
            href="https://github.com/SK374/defi-bank"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Medical Report NFT </h3>
          <img src={Medical_nft} alt="Medical Report NFT" />
          <p>
            <strong>Medical Smart Contracts </strong>where medical professionals
            can register and view a list of patients and set up appointments.
          </p>
          <p>
            Medical professionals can only view a Patient’s health record if
            they have been granted access.
          </p>
          <p>A Patient can revoke access at any time.</p>
          <p>
            A Non-Fungibe Token (NFT) is created and images/files are stored on
            IPFS.
          </p>

          <a
            href="https://github.com/SK374/medical-record-smart-contracts"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Real Estate</h3>
          <img src={Real_Estate} alt="Real Estate" />
          <p>
            <strong>Decentralised real estate</strong>
          </p>
          <p>
            <strong>Escrow Smart Contract </strong>and{" "}
            <strong>Real Estate NFT.</strong>
          </p>

          <a
            href="https://github.com/SK374/real-estate-smart-contracts"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Planet Rescue</h3>
          <img src={Planet_Rescue} alt="Planet Rescue" />
          <p>Built using Flutter & Firebase.</p>
          <p>Tackling Climate Change.</p>

          <a
            href="https://play.google.com/store/apps/details?id=com.planetrescue_climatechange"
            target="_blank"
            className="button"
          >
            Google Play Store
          </a>
        </div>

        <div className="projects__card">
          <h3>Minimalista</h3>
          <img src={minimalista} alt="Minimalista" />
          <p>ToDo List Application (100% Kotlin)</p>

          <a
            href="https://play.google.com/store/apps/details?id=app.bluecoral.MinimaLista"
            target="_blank"
            className="button"
          >
            Google Play Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
