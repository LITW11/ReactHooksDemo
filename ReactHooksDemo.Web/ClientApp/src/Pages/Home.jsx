import { useState, useEffect } from 'react';
import './Home.css';
import { useToggle } from '@uidotdev/usehooks';

// const data = [
//     {
//         firstName: 'john',
//         lastName: 'doe'
//     },
//     {
//         firstName: 'john',
//         lastName: 'doe'
//     },
//     {
//         firstName: 'john',
//         lastName: 'doe'
//     },
// ]

const Home = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        age: ''
    });

    const [boolValue, toggle] = useToggle(true);

    useEffect(() => {
        console.log('in effect');
    }, []);

    const onButtonClick = () => {
        setCount(count + 1);
    }

    const onFirstNameChange = e => {
        setPerson({...person, firstName: e.target.value});
    }

    const onLastNameChange = e => {
        setPerson({...person, lastName: e.target.value});
    }

    const onAgeChange = e => {
        setPerson({...person, age: e.target.value});
    }

    const onSubmitClick = () => {
        console.log(person);
    }

    const { firstName, lastName, age} = person;

    return (
        <div className="app-container">
            <button onClick={toggle} className='btn btn-dark'>{boolValue ? 'Yes' : 'No'}</button>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Welcome to React</h1>
                <button onClick={onButtonClick} className="btn btn-primary mb-3">Click me</button>
                <h2>{count}</h2>
                <input type='text' onChange={e => setText(e.target.value)} className='form-control' />
                <h3>{text}</h3>
                <div>
                    <div className="row">
                        <div className='col-md-12 card bg-light p-4'>
                            <h2>Add a New Person</h2>
                            <input type="text" value={firstName} onChange={onFirstNameChange} className='form-control' name='firstName' placeholder="First Name" />
                            <br />
                            <input type="text" value={lastName} onChange={onLastNameChange} className='form-control' name='lastName' placeholder="Last Name" />
                            <br />
                            <input type="text" value={age} onChange={onAgeChange} className='form-control' name='age' placeholder="Age" />
                            <br />
                            <button className='btn btn-primary btn-lg btn-block' onClick={onSubmitClick}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


export default Home;