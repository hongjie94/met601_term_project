import logo from '../logo.svg'
const Header = ({ storeName }) => (
  <header className="header">
    <div className="header-container">
      <h1 className="store-title">{storeName}</h1>
      <img 
        src={logo}
        alt={`${storeName} logo`} 
        className="store-logo"
      />
    </div>
  </header>
);
export default Header