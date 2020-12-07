import React,{useState,useEffect,useRef} from 'react'

const MainPage =() =>{

    const [name,setName] = useState('')
    const [nameError,setNameError] = useState(false)

    const firstRender = useRef(true)
    useEffect(() =>{
        console.log('useEffect called');
        if(firstRender.current) firstRender.current = false
        else validateForm()
    },[name])

    const validateForm = () =>{
        if(name === '')
        setNameError(true)
        else
        setNameError(false)
    }
    const getName = (e) =>{
        console.log('value',e.target.value);
        setName(e.target.value)
    }
    return (
    <div>
        <h2>Main Page content here...</h2>
        <div className='form-container'>
            <div>Contact form</div>
            <div className='input-container'>
                <label className='form-label'>Name:</label>
                <input 
                className='form-input'
                className= {`form-input ${nameError && 'error'}`}
                type="text" 
                placeholder = "enter full name here"
                onChange={getName}
                />
                {nameError && (
                <span className='errorLabel'>Name is empty</span>
                )}
            </div>
            <div className='input-container'>
                <label className='form-label'>Email:</label>
                <input className='form-input' type="email" placeholder = "enter email here"/>
            </div>
            <div className='input-container'>
                <label className='form-label'>Message:</label>
                <textarea  placeholder="enter the message"></textarea> 
            </div>
            <div>
                <button className='form-button'>Submit Message</button>
            </div>
        </div>
        

    </div>
    )
    
}
export default MainPage