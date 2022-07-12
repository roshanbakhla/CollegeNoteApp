import "./header.scss";

export default function header() {
  return (
    <div className="header">
      <div className="second-div">
        <div className="left-div">
          <h1 className="wrapper">
            The most beautiful note taking app across devices
          </h1>
          <button>SIGN UP FOR FREE</button>
        </div>
        <div className="right-div">
          <img src="./assets/notes.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
