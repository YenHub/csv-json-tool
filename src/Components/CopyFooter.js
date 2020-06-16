import React from 'react';
import '../App.css';
import moment from 'moment';

const getCurrentYear = () => moment().year();

const CopyFoot = () => {

    return (
        <div>
            <div className="phantom" />
            <div className="sticky-footer">
                <span className="copyfoot">
                  © {getCurrentYear()}
                </span>
            </div>
        </div>
    )

}

export default CopyFoot
