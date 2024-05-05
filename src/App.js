import "./styles.css";

const array = ["First", "Second", "Third"];
const object = {
  first: 1,
  second: 2,
  third: 3,
};

export default function App() {
  return (
    <section>
      <h1>Array</h1>
      <ul>
        {array.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <h1>Object</h1>
      <ul>
        {Object.keys(object).map((i) => (
          <li key={i}>
            <strong>{i}: </strong>
            {object[i]}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function MySection(props) {
  return (
    <section>
      <h2>My section ... </h2>
      {props.children}
    </section>
  );
}
const delay = (fn, ms, ...args) => setTimeout(fn, ms, ...args);

const updBTN = (dis) => {
  alert("change..." + dis);
  document.getElementById("btn1").disabled = dis;
};

const handleClick = () => {
  const dis = document.getElementById("btn1").disabled;
  alert("clicked..." + dis);
  document.getElementById("btn1").setAttribute("disabled", !dis);
  delay(updBTN, 5000, dis);
  // setTimeout(function () {
  //   alert("change..." + dis);
  //   document.getElementById("btn1").disabled = dis;
  // }, 5000);

  alert("after clicked..." + dis);

  return !dis;
};
export function MyBUtton(props) {
  let enable = true;
  let text = "My button1";
  let placetext = "Input your text here";
  return (
    <div>
      <button disabled={!enable} onClick={handleClick} id="btn1">
        {text}
      </button>
      <input placeholder={placetext} />
    </div>
  );
}
