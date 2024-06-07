import { useEffect, useState } from 'react';
import '../App.css'
import './radiobutton.css'

const RadioButton =  (()=> { 
    

    return (
        <div className="radioLayout">
           <div className='radioButtonStyle'>
            <label className='radioStyle'>
                <input type='radio' checked name='radio'/>
                <span>
                    <div className='rsTitle'>
                        <div>TITLE</div>
                        <p/>
                    </div>
                    <div className='rsContents'>
                        radio button contents
                    </div>
                </span>
            </label>

            <label className='radioStyle'>
                <input type='radio' name='radio'/>
                <span>
                    <div className='rsTitle'>
                        <div>TITLE 2</div>
                        <p/>
                    </div>
                    <div className='rsContents'>
                        radio button contents
                    </div>
                </span>
            </label>

            <label className='radioStyle'>
                <input type='radio' disabled name='radio'/>
                <span>
                    <div className='rsTitle'>
                        <div>TITLE 3</div>
                        <p/>
                    </div>
                    <div className='rsContents'>
                        radio button contents
                    </div>
                </span>
            </label>
           </div>
        </div>
    );
})

export default RadioButton;
