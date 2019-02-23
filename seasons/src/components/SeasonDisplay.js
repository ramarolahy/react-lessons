import '../styles/SeasonDisplay.css'
import React from 'react';

// config function
const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr! It\'s cold!',
        iconName: 'snowflake'
    }
}
// helper function
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

// functional component
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]; // deconstructing seasonConfig to extract text and iconName

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <div className="text">{text}</div>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay;
