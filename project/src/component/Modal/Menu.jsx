import React from 'react';
import "./menu.css";

const Menu = ({handleClose}) => {
  return (
    <div className='menu cn' onClick={handleClose}>
        <div className="menu-cont">
             <div className="menu-title">
                 <h2>Do you want to continue?</h2>
             </div>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Enim dolor voluptatem quaerat temporibus quo quae 
                 recusandae nam veniam quasi consequatur!</p>
            <div className="buttons">
                 <button className="cancel cn" onClick={handleClose}>Cancel</button>
                 <button className="proceed">Proceed</button>
            </div>
        </div>
                 
    </div>
  )
}

export default Menu