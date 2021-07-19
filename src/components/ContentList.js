import React from "react";
import PropTypes from "prop-types";
import ContestPreview from './ContestPreview';

const ContestList = ({ contests , onContestClick}) => (
    <div className='ContestList'>
        {Object.keys(contests).map(contestId =>
            <ContestPreview 
            onClick = {onContestClick}
            key={contestId} 
            {...contests[contestId]} 
            />
        )}
    </div>
);

ContestList.propTypes = {
    constests: PropTypes.array,
    onContestClick: PropTypes.func.isRequired
}

export default ContestList