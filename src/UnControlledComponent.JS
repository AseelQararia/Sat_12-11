import React, { useState, useRef,useEffect } from 'react';

const UnControlledComponent = () => {

    const [fullNmee, setFullName] = useState({name : ''});

    const onBtnCliked = () => {
        setFullName({name: 'Aseel Qararia'})
    }

    return (
        
        <div>
            <button onClick={onBtnClicked}>Fill Full Name</button>
            <div>     
                <NameForm fullName={fullNmee} />
            </div>
        </div>
    
    )
}

export default UnControlledComponent;


function NameForm(props) {
  const firstNameRef =useRef('');
  const lastNameRef =useRef('');


 

    useEffect(() => {

         firstNameRef.current.value = props.fullName.name?.split(" ")[0] || "";
         lastNameRef.current.value = props.fullName.name?.split(" ")[1] || "";

        setFirstName(firstName);
        setLastName(lastName);


    }, [props.fullName])

    return (
        <div>
            <div>
                <label htmlFor="#firstName">First Name</label>
                <input id={"firstName"} type="text" />
            </div>
            <div>
                <label htmlFor="#lastName">Last Name</label>
                <input  id="lastName" type="text" />
                </div>
        </div>
    )
}