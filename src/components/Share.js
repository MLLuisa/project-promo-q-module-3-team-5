import Button from './Button';
import knife from '../images/knife.png';

function Share (props) {
    const handleCreateCard = (ev) => {
        ev.preventDefault();
        props.handleCreateCard();
      }
    return (
        <fieldset className="share-section collapsablemenu" onClick={props.handleCollapsed}>
              <legend className="legend-share js-legend">
                <i className="icon fa-solid fa-share-nodes fa-xl"></i>
                <p className="share">comparte</p>
                <img src={knife} className="skull" alt="" />
              </legend>

              <div className="container-collapsible section-to-hide ">
                
              <Button classContainer="button-container" name="newCardButton" className="button-create" icon="fa-solid fa-address-card" text="crear tarjeta" onClick={handleCreateCard} />
              
                <div className="check">
                  <h3 className="share-text"></h3>
                </div>

                <div className="created">
                  <h3 className="share-text">{props.resultCard.success === true ? "La tarjeta ha sido creada:" : "¡Rellena todo el formulario!"}</h3>
                  <a className="link" href={props.resultCard.cardURL} target="_blank">{props.resultCard.success === true ? props.resultCard.cardURL : ""}</a>
                  
                  <Button className="button-share" icon="fa-brands fa-twitter" text="Compartir en twitter" name="shareButton" target="_blank" href={`https://twitter.com/intent/tweet?text=Hello%20world%20my%20card&url=${props.resultCard.cardURL}`} />
                  
                  
          
                </div>
              </div>
            </fieldset>
    );
};

export default Share;