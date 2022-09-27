import './style-aboutme.css';
import Dog from '../../assets/salvar-os-dog.png';

function AboutMe() {
  return (
    <div id='aboutme'>
        <div className="Page-aboutme">
          <div className="Container-aboutme">
            <div className="Text-me">
            <h2 className="Header">Guia de manuzeio de animais, leis e responsabilidades, bichinho com saude!</h2>
            <p className="Texto-me">
             
            </p>
            <h2 className="Guia">Guia de manuzeio</h2>
            <h2 className="Lei">As leis nationais e estaduais</h2>
            <h2 className="Vet">Bichinho com saude</h2>
            <h2 className="Doacoes">Doações</h2>
            <h2 className="Padrinho">Seja um Padrinho</h2>
        
            </div>
            <img className="Dog" src={Dog} alt="dog" />
             
          </div>
        </div>
    </div>
  );
}

export default AboutMe;
