import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getRiderById, updateProfile } from "../../services/authService";
import {Form, Input, Button} from 'antd'

export const EditProfile = (data) => {

    const [firstName, setFirstName] = useState(data.data.firstName);
    const [lastName, setLastName] = useState(data.data.lastName);
    const [email, setEmail] = useState(data.data.email);
    const [license, setLicense] = useState(data.data.license);
    const [contact, setContact] = useState(data.data.contact);
    const [riderId, setRiderId] = useState(data.data.riderId);

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [license, setLicense] = useState("");
    // const [contact, setContact] = useState("");
    // const [riderId, setRiderId] = useState("");
    const {id} = useParams();

    const rider = {riderId, firstName, lastName, email, license, contact}
    const navigate = useNavigate()


    // if(id) {
    //     updateProfile(rider, id).then((response) => {
    //         navigate("/dashboard")
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

    // console.log(JSON.stringify(id))

    console.log("dfdfdfdf", data.data.id)
    // console.log("iddddddddddd", parseInt(id))


    const updateRiderProfile = (e) => {
        if(data.data.id){
            updateProfile(rider, data.data.id).then((response) => {
                navigate("/dashboard")
            }).catch((error) => {
                console.log(error)
            })
        } else {
            console.log("unable to perform update")
        }
        
    }  

    // useEffect(() => {
    //     getRiderById(id).then((response) => {
    //         setRiderId(response.data.riderId)
    //         setFirstName(response.data.firstName)
    //         setLastName(response.data.lastName)
    //         setEmail(response.data.email)
    //         setContact(response.data.contact)
    //         setLicense(response.data.license)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [])

    

    return(
        <div className="form" id="editprofile">
            <label id="form-name">FirstName: </label>
            <input
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            >
            </input><br/><br/>

            <label id="form-name">LastName: </label>
            <input
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            >
            </input><br/><br/>

            <label id="form-name">Email: </label>
            <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            >
            </input><br/><br/>

            <label id="form-name">Contact: </label>
            <input
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
            >
            </input><br/><br/>

            <label id="form-name">License: </label>
            <input
                name="license"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
            >
            </input><br/><br/>

            <Button type="primary"  onClick={(e) => updateRiderProfile(e)}>Update</Button>
            {/* <Link to={`/update-profile/${data.data.id}`}><button onClick={(e) => updateRiderProfile(e)}>Update</button></Link> */}
            <Link to="/dashboard"><Button > Cancel </Button></Link>


        {/* <Form  layout="inline" onFinish={(e) => updateRiderProfile(e)}>
         <Form.Item
             name="firstName" 
             value={data.data.firstName}
         >
             <Input 
             value={data.data.firstName}
             name={data.data.firstName}
             placeholder="FirstName" 
                    onChange={(e) => setFirstName(e.firstName)}
             />
         </Form.Item>
         <Form.Item
             name="lastName"
             value={lastName}
         >
             <Input
             placeholder="LastName"
             onChange={(e) => setLastName(e.lastName)}
             />
         </Form.Item>
         <Form.Item
             name="email"
             value={email}
         >
             <Input
             placeholder="Email"
             onChange={(e) => setEmail(e.email)}
             />
         </Form.Item>
         <Form.Item
             name="contact"
             value={contact}
         >
             <Input
             placeholder="Contact"
             onChange={(e) => setContact(e.contact)}
             />
         </Form.Item>
         <Form.Item
             name="license"
             value={license}
         >
             <Input
             placeholder="License"
             onChange={(e) => setLicense(e.license)}
             />
         </Form.Item>
         <Form.Item shouldUpdate>
             {() => (
             <Button
                 type="primary"
                 htmlType="submit"
                 
             >
                 Update
             </Button>
             )}
         </Form.Item>
         </Form> */}
        </div>
    )

    
}
