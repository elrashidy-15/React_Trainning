import "./FormStyles.css";
export default function Modal({ isVisible, errorMassage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1>The Form has been submitted successfully!</h1> */}
          <h1 style={{color: errorMassage ? "red" : "green"}}>
            {errorMassage != null
              ? errorMassage
              : "The Form has been submitted successfully!"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
}
