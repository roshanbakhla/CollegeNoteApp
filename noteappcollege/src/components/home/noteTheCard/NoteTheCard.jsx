import "./noteTheCard.scss";

export default function NoteTheCard() {
  return (
    <div className="noteTheCard">
      <div className="top-div">
        <h2>Note. The Cards.</h2>
        <p>
          Different types of notes should be treated differently. Each Note Card
          type is designed to complement the type of note you're taking.
        </p>
      </div>
      <div className="bottom-div">
        <div className="left-div"></div>
        <div className="bottom-div">
          <img src="./assets/mobileNotes.svg" alt="" />
        </div>
        <div className="right-div"></div>
      </div>
    </div>
  );
}
