import Form from './Form';
import Preview from './Preview';
import Header from './Header';
import Footer from './Footer';

function Card (props) {
    return (
        <>
        <Header />


        <main className="main-profile">

        
        <Preview dataCard={props.dataCard} setDataCard={props.setDataCard} />
        <Form handleCollapsed={props.handleCollapsed} dataCard={props.dataCard} setDataCard={props.setDataCard} resultCard={props.resultCard} setResultCard={props.setResultCard} handleInput={props.handleInput} handleCreateCard={props.handleCreateCard}/>
       
        </main>
        <Footer />
        </>

    );
};

export default Card;