import "../styles/index.scss";
import React, { useState } from 'react';

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    return (
        <div className="dropdownContainer">
            
            <div className="title" onClick={toggling}>
                {props.title}
            </div>
            {
                isOpen && (
                    <div className="dropdown">
                        <div className="dropdownList">

                            <div className="listItem" >
                                {props.desc}
                            </div>

                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default Dropdown
