import React from 'react';
import HeroCard from '../HeroCard/HeroCard';

function SuperList(props) {
    return (
        <div className="List">
            {props.superData.results.map((result, idx)=> (
                <HeroCard key={idx} result={result} />
            ))}
        </div>
    );
}

export default SuperList