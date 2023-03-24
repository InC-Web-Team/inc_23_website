import './styles/inputBox.css';
import { useState } from 'react';

// function InputBox({ label, name, type, value, placeholder, min, max, inputRef, onChange, classNames, required, error }) {
function InputBox(props) {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <div className='input-box w-full mb-4 relative'>
            <label htmlFor={props.label.toLowerCase().replace(/ /g, "_")} className={`input-label font-medium  text-white text-lg before: ${props.required && 'after:content-["*"] after:ml-0.5 after:text-gold'}`}>{props.label}</label>
            
                {props.tip && <button onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className="bg-faint_blue text-white ml-3 px-5 rounded-full mb-1 hover:bg-light_blue">
                    i
                </button>}
                {showTooltip &&  (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-light_blue text-white rounded">
                        {props.tip}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-2 border-gold"></div>
                    </div>
                )}
            
            <input
                {...props}
                id={props.label.toLowerCase().replace(/ /g, "_")}
                className={`input w-full bg-faint_blue/30 font-gilroy text-gold text-lg px-4 py-2 outline-0 border-1 border-transparent rounded-xl hover:border-light_blue focus:border-transparent focus:ring-1 focus:ring-light_blue focus:bg-faint_blue/20 ${props.className}`}
                autoComplete='off'
                ref={props.inputref ?? null}
            />
            {props.error && <span className='text-red-500 bg-black px-2 py-1 rounded-lg absolute right-3 mt-8'>{props.error}</span>}
        </div>
    );
}

export default InputBox;