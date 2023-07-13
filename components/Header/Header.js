import Image from 'next/image';
import logo from '../../public/assets/logo.png';

function Header() {
  return (
    <>
      <div className="layout-header">
        <Image src={logo} alt='Logo'/>
        <h2>Xzect</h2>


      </div>
    </>
  );
}

export default Header;
