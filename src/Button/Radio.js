import { useEffect, useState } from 'react';
import '../App.css'
import './radio.css'

const Radio =  (()=> { 


    const [rb1,setRb1] = useState('0')
    const [rb2,setRb2] = useState('0')
    const [rb3,setRb3] = useState('0')
    const [rb4,setRb4] = useState('0')
    const [rb5,setRb5] = useState('0')

    const handleRadio1 = (e) => {
        setRb1(e.target.id)
    }
    
    const handleRadio2 = (e) => {
        setRb2(e.target.id)
    }

    const handleRadio3 = (e) => {
        setRb3(e.target.id)
    }
    
    const handleRadio4 = (e) => {
        setRb4(e.target.id)
    }

    const handleRadio5 = (e) => {
        setRb5(e.target.id)
    }

    return (
        <div className="mainLayout">

            <div className='rbStyle'> 
                <label className='rs1'>
                    <input type="radio" name="style1" id='0' checked={rb1 === "0"} onChange={handleRadio1}/>
                    <span>Normal 1</span>
                </label>

                <label className='rs1'>
                    <input type="radio" name="style1" id='1' checked={rb1 === "1"} onChange={handleRadio1}/>
                    <span>Normal 2</span>
                </label>

                
                <label className='rs1'>
                    <input type="radio" name="style1" id='2' disabled checked={rb1 === "2"} onChange={handleRadio1}/>
                    <span>Normal 3</span>
                </label>
            </div>
            
            <div className='rbStyle'>
                <label class="rs3">
                    <input type="radio" id="0" name="style3" checked={rb3 === "0"} onChange={handleRadio3}/>
                    <span>Box 1</span>
                </label>
                <label class="rs3">
                    <input type="radio" id="1" name="style3" checked={rb3 === "1"} onChange={handleRadio3}/>
                    <span>Box 2</span>
                </label>
                <label class="rs3">
                    <input type="radio" id="2" name="style3" disabled checked={rb3 === "2"} onChange={handleRadio3}/>
                    <span>Box 3</span>
                </label>
            </div>

            <div className='rbStyle'>
                <label class="rs4">
                    <input type="radio" id="0" name="style4" checked={rb4 === "0"} onChange={handleRadio4}/>
                    
                    <span>
                        <div/>
                        <p>Box 1</p>
                    </span>
                </label>
                <label class="rs4">
                    <input type="radio" id="1" name="style4" checked={rb4 === "1"} onChange={handleRadio4}/>
                
                    <span>
                        <div/>
                        <p>Box 2</p>
                    </span>
                </label>
                <label class="rs4">
                    <input type="radio" id="2" name="style4" disabled checked={rb4 === "2"} onChange={handleRadio4}/>
                    
                    <span>
                        <div/>
                        <p>Box 3</p>
                    </span>
                </label>
            </div>


            {/* <div className='rowLayout'>

                <div className='rbStyle'> 
                    <label className='rs1'>
                        <input type="radio" name="style1" id='0' checked={rb1 === "0"} onChange={handleRadio1}/>
                        <span>Normal 1</span>
                    </label>

                    <label className='rs1'>
                        <input type="radio" name="style1" id='1' checked={rb1 === "1"} onChange={handleRadio1}/>
                        <span>Normal 2</span>
                    </label>

                 
                    <label className='rs1'>
                        <input type="radio" name="style1" id='2' disabled checked={rb1 === "2"} onChange={handleRadio1}/>
                        <span>Normal 3</span>
                    </label>
                </div>
            

                <div className='rbStyle'> 
                    <label className='rs2'>
                        <input type="radio" name="style2" id='0' checked={rb2 === "0"} onChange={handleRadio2}/>
                        <div><div/></div>
                        <span>Normal 1</span>
                    </label>

                    <label className='rs2'>
                        <input type="radio" name="style2" id='1' checked={rb2 === "1"} onChange={handleRadio2}/>
                        <div><div/></div>
                        <span>Normal 2</span>
                    </label>

                 
                    <label className='rs2'>
                        <input type="radio" name="style2" id='2' disabled checked={rb2 === "2"} onChange={handleRadio2}/>
                        <div><div/></div>
                        <span>Normal 3</span>
                    </label>
                </div>
            

            <div className='rbStyle'>
                    <label class="rs3">
                        <input type="radio" id="0" name="style3" checked={rb3 === "0"} onChange={handleRadio3}/>
                        <span>Box 1</span>
                    </label>
                    <label class="rs3">
                        <input type="radio" id="1" name="style3" checked={rb3 === "1"} onChange={handleRadio3}/>
                        <span>Box 2</span>
                    </label>
                    <label class="rs3">
                        <input type="radio" id="2" name="style3" disabled checked={rb3 === "2"} onChange={handleRadio3}/>
                        <span>Box 3</span>
                    </label>
                </div>

                <div className='rbStyle'>
                    <label class="rs4">
                        <input type="radio" id="0" name="style4" checked={rb4 === "0"} onChange={handleRadio4}/>
                      
                        <span>
                            <div/>
                            <p>Box 1</p>
                        </span>
                    </label>
                    <label class="rs4">
                        <input type="radio" id="1" name="style4" checked={rb4 === "1"} onChange={handleRadio4}/>
                    
                        <span>
                            <div/>
                            <p>Box 2</p>
                        </span>
                    </label>
                    <label class="rs4">
                        <input type="radio" id="2" name="style4" disabled checked={rb4 === "2"} onChange={handleRadio4}/>
                       
                        <span>
                            <div/>
                            <p>Box 3</p>
                        </span>
                    </label>
                </div>

 
            </div> */}




 

        
            <div className='rbbStyle'>
                <label class="rs5">
                    <input type="radio" id="0" name="style5" checked={rb5 === "0"} onChange={handleRadio5}/>
                    
                    <span>
                        <div className='r5Title'>
                            <div>TITLE 1</div>
                            <p/>
                        </div>
                        <div className='r5Contents'>
                            radio button contents
                        </div>
                    </span>
                </label>

                <label class="rs5">
                    <input type="radio" id="1" name="style5" checked={rb5 === "1"} onChange={handleRadio5}/>
                    
                    <span>
                        <div className='r5Title'>
                            <div>TITLE 2</div>
                            <p/>
                        </div>
                        <div className='r5Contents'>
                            radio button contents
                        </div>
                    </span>
                </label>

                <label class="rs5">
                    <input type="radio" id="2" name="style5" checked={rb5 === "2"} disabled onChange={handleRadio5}/>
                    
                    <span>
                        <div className='r5Title'>
                            <div>TITLE 3</div>
                            <p/>
                        </div>
                        <div className='r5Contents'>
                            radio button contents
                        </div>
                    </span>
                </label>
            </div>
          
        </div>
    );
})

export default Radio;
