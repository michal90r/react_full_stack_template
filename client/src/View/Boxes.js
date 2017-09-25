import React from 'react'


const Boxes = (props) => (
    <div>
        {
            props.result.map((numb, index) => (
                <div
                    key={index}
                >{numb}</div>
            ))
        }
    </div>
);

export default Boxes;