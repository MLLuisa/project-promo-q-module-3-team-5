import Design from './Design';
import Fill from './Fill';
import Share from './Share';


function Form (props) {
    
    
    return (
      <section className="design-profile">
          <form action="https://adalab-server-form.herokuapp.com" method="post" className="form js-allInputs">
            
            <Design handleCollapsed={props.handleCollapsed} dataCard={props.dataCard} handleInput={props.handleInput} />

            <Fill handleCollapsed={props.handleCollapsed} dataCard={props.dataCard} handleInput={props.handleInput} />

            <Share handleCollapsed={props.handleCollapsed} dataCard={props.dataCard} resultCard={props.resultCard} setResultCard={props.setResultCard}  handleCreateCard={props.handleCreateCard}/>

          </form>
          </section>
    );
};

export default Form;