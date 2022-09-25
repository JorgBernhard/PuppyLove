import './style-header.css';
import Logo from '../../assets/logo-puppy.png';

function Header() {
  return (
    <div className="Container-main">
        <div className="Head">
            <img className="Logo" src={Logo} alt="logo" />

            <div className="Links">
                <a href='#main'>Puppy-Home</a>
                <a href='#contact' >Localização</a>
                <a href='#design' >Bixinhos</a>
                <a href='#aboutme' >Sabedoria</a>
            </div>
        </div>
    </div>
  );
}

export default Header;