import React from 'react';
import '../App.css';
import moment from 'moment';

const getCurrentYear = () => moment().year();

function CopyFoot() {
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
