import React, { useState, useEffect } from 'react';

const ControlledComponent = () => {

    const [fullNmee, setFullName] = useState('');

    function onBtnClicked() {
        setFullName({name :'Aseel Qararia'});
    }

    return (
        <>
            <div>
                <button onClick={onBtnClicked}>Fill Your Name</button>
            </div>
            <NameForm fullName={fullNmee} />

        </>
    )
}

export default ControlledComponent;


function NameForm(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    function onTextChanged(e) {
        const field = e.target.id;
        if (field === 'firstName') {
            setFirstName(e.target.value);
        } else {
            setLastName(e.target.value);
        }

    }

    useEffect(() => {

        const firstName = props.fullName.name?.split(" ")[0]
        const lastName = props.fullName.name?.split(" ")[1]

        setFirstName(firstName);
        setLastName(lastName);


    }, [props.fullName])

    return (
        <div>
            <label htmlFor="#firstName">First Name</label>
            <input value={firstName} onChange={onTextChanged} id={"firstName"} type="text" />
            <label htmlFor="#lastName">Last Name</label>
            <input value={lastName} onChange={onTextChanged} id="lastName" type="text" />
        </div>
    )
}