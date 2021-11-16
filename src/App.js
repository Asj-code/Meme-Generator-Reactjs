import React, {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';


function App() {

  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [image, setImage] = useState('')

  function onChangeLinea1(event) {
    setLinea1(event.target.value)
  }

  function onChangeLinea2(event) {
    setLinea2(event.target.value)
  }

  function onChangeImage(event) {
    setImage(event.target.value)
  }

  function onClickButton(event){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png")

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <select onChange={onChangeImage}>
        <option value="futurama">Futurama</option>
        <option value="matrix">Matrix</option>
        <option value="smartguy">Smart Guy</option>
      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder="Enter text..."/> <br /> 
      <input onChange={onChangeLinea2} type="text" placeholder="Enter text..."/> <br /> 
      <button onClick={onClickButton}>Export</button>

      <div className="meme" id="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/img/" + image + ".jpg"} />
      </div>


    </div>
  );
}

export default App;
