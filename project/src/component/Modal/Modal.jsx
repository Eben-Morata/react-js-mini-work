import React,{useState} from 'react';
import "./modal.css"
import img from './14.png';
import Menu from './Menu';


const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal =()=>{
    setShowModal(true);
  }

  const handleCloseModal =(e)=>{
    if (e.target.classList.contains("cn")) {
      setShowModal(false);
    }
  }
  return (
    <div>
    <div className='modal'>
        <div className="modal-cont">
             <img src={img} alt="img" className="pic" />
             <h2><span>Lets</span> Create a Modal!!!</h2>
             <p>Click the Button below</p>
             <button className="but" onClick={handleShowModal}>Open Modal</button>
         </div>
      </div>
         {showModal &&  <Menu handleClose={handleCloseModal}/>}
    </div>
  )
}

export default Modal