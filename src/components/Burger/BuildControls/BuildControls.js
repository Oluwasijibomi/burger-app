import React from 'react';
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl"

const controls = [
        {labels: "Salad", type: "salad"},
        {labels: "Bacon", type: "bacon"},
        {labels: "Cheese", type: "cheese"},
        {labels: "Meat", type: "meat"}
];

 const buildControls = (props) => (
    
        <div className={classes.BuildControls}>

                <p>Current Price: <strong>{props.price.toFixed(2 )}</strong></p>
            {controls.map(ctrl => (
                    <BuildControl key={ctrl.labels} label={ctrl.labels}  
                    added={() => props.ingredientAdded(ctrl.type)} 
                    removed={() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabled[ctrl.type]}/>
            ))}

            <button 
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            >ORDER NOW</button>
        </div>
    
)

export default buildControls;
