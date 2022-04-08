import SimpleModal from "../SimpleModal";

import logo from "../../images/logo.png";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="modalcontainer"></div>
        <img className="logo" src={logo} alt="animle" />
        <div className="modalcontainer">
          <SimpleModal />
        </div>
      </header>
    </div>
  );
}
