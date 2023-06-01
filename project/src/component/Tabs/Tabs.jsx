import React,{useState} from 'react';
import "./tabs.css";

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTab=(index)=>{
     setTabIndex(index);
  }
  return (
    <div className='tabs'>
        <div className="tabs-container">
              <div className="tab-title">
                  <h2>More About Us</h2>
                  <span className="line"></span>
                  <p>Click the tab buttons to know more.</p>
              </div>
              <div className="tab-content">
                 <div className="tab">
                     <button className={tabIndex === 1 ? "tabe active" : "tabe"} 
                     onClick={()=>handleTab(1)}>Who We Are.</button>
                     <button className={tabIndex === 2 ? "tabe active" : "tabe"} 
                     onClick={()=>handleTab(2)}>What We Do.</button>
                     <button className={tabIndex === 3 ? "tabe active" : "tabe"}
                      onClick={()=>handleTab(3)}>Get In Touch.</button>
                 </div>
                 <div className="content">
                     <div className={tabIndex === 1 ? "cont active-cont" : "cont"}>
                       <h3>Who We Are.</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          At debitis saepe obcaecati excepturi 
                         quibusdam velit dolorum rem necessitatibus aperiam architecto.</p>
                     </div>
                     <div className={tabIndex === 2 ? "cont active-cont" : "cont"}>
                       <h3>What We Do.</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          At debitis saepe obcaecati excepturi 
                         quibusdam velit dolorum rem necessitatibus aperiam architecto.</p>
                     </div>
                     <div className={tabIndex === 3 ? "cont active-cont" : "cont"}>
                       <h3>Get In Touch.</h3>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          At debitis saepe obcaecati excepturi 
                         quibusdam velit dolorum rem necessitatibus aperiam architecto.</p>
                     </div>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Tabs