import knife from '../images/knife.png';

function Design (props) {
    console.log(props);
    return (<fieldset className="design-section collapsablemenu" onClick={props.handleCollapsed}>
    <legend className="legend-design js-legend">
      <i className="icon fa-regular fa-object-ungroup"></i>
      <span className="fill">Diseña</span>
      <img src={knife} className="skull" alt="" />
    </legend>
    <section className="design-colors section-to-hide">
      <h3 className="design-subtitle">Colores</h3>
      <div className="colors-options">
        <div className="option">
          <input
            checked={props.dataCard.palette === '1'}
            onChange={props.handleInput}
            type="radio" name="palette" value="1" className="color-palette-input1 js-palettes" id="1" title="viernes 13" />
          <div className="option" title="viernes 13">
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
          </div>
        </div>
        <div className="option">
          <input
            checked={props.dataCard.palette === '2'}
            onChange={props.handleInput}
            type="radio" name="palette" value="2" className="color-palette-input2 js-palettes" id="2" title="Elm Street" />
          <div className="option" title="Elm Street">
            <div className="color4"></div>
            <div className="color5"></div>
            <div className="color6"></div>
          </div>
        </div>
        <div className="option">
          <input
            checked={props.dataCard.palette === '3'}
            onChange={props.handleInput}
            type="radio" name="palette" value="3" className="color-palette-input3 js-palettes" id="3" title="the blair witch" />
          <div className="option" title="the blair witch">
            <div className="color7"></div>
            <div className="color8"></div>
            <div className="color9"></div>
          </div>
        </div>
        <div className="option">
          <input
            checked={props.dataCard.palette === '4'}
            onChange={props.handleInput}
            type="radio" name="palette" value="4" className="color-palette-input4 js-palettes" id="4" title="Freddy come to me" />
          <div className="option" title="Freddy come to me">
            <div className="color10"></div>
            <div className="color11"></div>
            <div className="color12"></div>
          </div>
        </div>
      </div>
    </section>
  </fieldset>);
};

export default Design;