import Button from './Button';
import knife from '../images/knife.png';
import Collapsable from './Collapsable';

function Share(props) {
  const handleCreateCard = (ev) => {
    ev.preventDefault();
    props.handleCreateCard();
  };
  return (
    <fieldset className="share-section collapsablemenu">
      <Collapsable
        name="share"
        className="legend-share"
        icon="icon fa-solid fa-share-nodes fa-xl"
        classSpan="fill"
        text="Comparte"
        handleCollapsed={props.handleCollapsed}
      />

      <div
        className={`container-collapsible section-to-hide ${props.collapsed[2]}`}
      >
        <Button
          classContainer="button-container"
          name="newCardButton"
          className="button-create"
          icon="fa-solid fa-address-card"
          text="crear tarjeta"
          onClick={handleCreateCard}
        />

        <div className="check">
          <h3 className="share-text"></h3>
        </div>

        <div className="created">
          <h3 className="share-text">
            {props.resultCard.success === true
              ? 'La tarjeta ha sido creada:'
              : '¡Rellena todo el formulario!'}
          </h3>
          <a className="link" href={props.resultCard.cardURL} target="_blank">
            {props.resultCard.success === true ? props.resultCard.cardURL : ''}
          </a>

          <Button
            className="button-share"
            icon="fa-brands fa-twitter"
            text="Compartir en twitter"
            name="shareButton"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=Hello%20world%20my%20card&url=${props.resultCard.cardURL}`}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default Share;
