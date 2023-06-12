
import React, { useState } from 'react'
import axios from 'axios';
 




const Form = () => {
    const data = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: ""
    }

    const [users, setUsers] = useState(data);
    const [filled, setfilled] = useState([])

    const onchange = (e) => {
        const { name, value } = e.target


        setUsers((prevData) => ({ ...prevData, [name]: value }));
        // console.log(users)
        // switch (name) {
        //     case 'firstname':
        //         setUsers((prevData) => ({ ...prevData, firstName: value }));
        //         break;
        //     case 'lastname':
        //         setUsers((prevData) => ({ ...prevData, lastName: value }));
        //         break;

        //     case 'email':
        //         setUsers((prevData) => ({ ...prevData, emailAddress: value }));
        //         break;
        //     case 'phoneNO':
        //         setUsers((prevData) => ({ ...prevData, phoneNumber: value }));
        //         break;
        // }

    };



    const formsubmit = (e) => {
        e.preventDefault();
        
        console.log(users);
        setfilled(users);
        axios.post("http://localhost:5000/data",filled).then((res) => {

            console.log(users);
            setfilled(users);
            setUsers(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })


    }








    return (
        <>

            <div>
                <section className="vh-100 gradient-custom container">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                        <form>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" onChange={(e) => onchange(e)} name="firstName" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="firstName">First Name</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" onChange={(e) => onchange(e)} name="lastName" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                                    </div>

                                                </div>
                                            </div>



                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="email" onChange={(e) => onchange(e)} name="emailAddress" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="emailAddress">Email</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="tel" onChange={(e) => onchange(e)} name="phoneNumber" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="mt-4 pt-2">
                                                <input className="btn btn-primary btn-lg" type="submit" onClick={formsubmit} />
                                            </div>

                                        </form>




                                        <div className='vh=50'>
                                            {filled?.firstName}
                                            {filled?.lastName}
                                            {filled?.emailAddress}
                                            {filled?.phoneNumber}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Form




