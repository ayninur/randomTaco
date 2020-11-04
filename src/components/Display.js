import React from "react";

const Display = (props) => {
    const { taco } = props;

    const loaded = () => {
        return (
            <div className="App">
                <h1 className="title">Random Taco!</h1>

                <h3 className="shellName"><span className="label">Shell:</span><span className="paragraph">{taco.shell.name}</span></h3>
                <p className="shellRecipe">{taco.shell.recipe}</p>

                <h3 className="mixinName"><span className="label">Mixin:</span> <span className="paragraph">{taco.mixin.name}</span></h3>
                <p className="mixinRecipe">{taco.mixin.recipe}</p>

                <h3 className="condimentName"><span className="label">Condiment:</span><span className="paragraph">{taco.condiment.name}</span> </h3>
                <p className="condimentRecipe">{taco.condiment.recipe}</p>

                <h3 className="baseLayerName"><span className="label">Base Layer:</span><span className="paragraph">{taco.base_layer.name}</span></h3>
                <p className="baseLayerRecipe">{taco.base_layer.recipe}</p>
            </div>
        )
    }

    return (
        taco.mixin ? loaded() : <h1>ba</h1>
    )

}

export default Display;

