import './style-main.css';
import Creating from '../../assets/dogi.png';
import Fotos01 from '../../assets/adotar01.jpg';
import Fotos02 from '../../assets/gato01.png';
import Fotos03 from '../../assets/cao-gato.png';
import Fotos04 from '../../assets/salvar-os-dog.png';
import Fotos05 from '../../assets/gato03.jpg';

function Main() {
  return (
    <div id='main'>
    <div className="Page">
      <div className="Container-main">
          <img className="Creating" src={Creating} alt="creating" />
          <div className="Text">
            <h2 className="Top">Bem vindo a Puppy Love</h2>
            <p className="Texto">
            Somos uma organização sem lucros, ajudamos animais de rua ter um tratamento adequado, cuidados medicinais e 
            um lar adotivo.</p>
           </div>
      </div>
      <div className="container-bottom">
      <img className="Fotos01" src={Fotos01} alt="Fotos01" /> 
      <img className="Fotos02" src={Fotos02} alt="Fotos02" />
      <img className="Fotos03" src={Fotos03} alt="Fotos03" />
      <img className="Fotos04" src={Fotos04} alt="Fotos04" />
      <img className="Fotos05" src={Fotos05} alt="Fotos05" />
      </div>
      </div>
    </div>
  );
}

export default Main;
