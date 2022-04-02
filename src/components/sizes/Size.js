import Coffee from '../drink/Drink';
import './Size.css';

const Size = (props) => {
    
    return (
        <>
            <div className="StepTitle">{props.clickedSize ? props.clickedSize : 'Choose your Size'}</div>
            <div className="Sizes">
                <Coffee
                    clickedSize={props.clickedSize}
                    clickedItem={props.clickedItem}
                    nextStep={props.nextStep}
                    size='klein'
                />
                <Coffee
                    clickedSize={props.clickedSize}
                    clickedItem={props.clickedItem}
                    nextStep={props.nextStep}
                    size='gemiddeld'
                />
                <Coffee
                    clickedSize={props.clickedSize}
                    clickedItem={props.clickedItem}
                    nextStep={props.nextStep}
                    size='groot'
                />
            </div>
        </>
    );
}

export default Size;