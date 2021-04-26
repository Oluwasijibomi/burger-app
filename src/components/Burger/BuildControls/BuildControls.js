import React from 'react';
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl"

const controls = [
        {labels: "salad", type: "salad"},
        {labels: "Bacon", type: "bacon"},
        {labels: "Cheese", type: "cheese"},
        {labels: "Meat", type: "meat"}
];

 const buildControls = (props) => (
    
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                    <BuildControl key={ctrl.label} label={ctrl.label}/>
            ))}
        </div>
    
)

export default buildControls;
