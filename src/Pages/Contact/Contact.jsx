import './style-contact.css';

import Mapa from '../../assets/Map-Natal.png';

function Contact() {
  return (
    <div id='contact'>
        <div className="Page-contact">
          <div className="Container-contact">
          <h3 className="Contact">Contato Puppy Love</h3>
          <div className="Contato">
            <p className="Info">
              Puppy Love<br></br><br></br>
              Telefone: +55(84) 3000-3030<br></br><br></br>
              Rua Lagoa Nova, 222<br></br><br></br>
              Cep: 59152-655<br></br><br></br>
              Nova Parnamirim - RN - Brasil<br></br><br></br>

              Email: puppylove@gmail.com<br></br><br></br>
              <div className="logos">
                  
                  </div>
            </p>
            </div>
            <img className="Mapa" src={Mapa} alt="mapa"></img>
          </div>
        </div>
    </div>
  );
}

export default Contact;
