import React, { useEffect, useState } from 'react'
import { adddata } from '../services/allapi';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Home() {
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState({ name: "", unitname: "", housename: "", mobileno: "", receiptno: "", amount: "", date: "",registeredid:"" });
    console.log(userData);
   //clear
   const handleclear =()=>{
        setUserData({
             name: "", unitname: "", housename: "", mobileno: "", receiptno: "", amount: "", date: "",registeredid:""
        })
   }

    //  add new data
    const handleadd = async () => {
        const { name, unitname, housename, mobileno, receiptno, amount, date ,registeredid } = userData
        if (!name || !unitname || !housename || !mobileno || !receiptno || !amount || !date ||!registeredid) {
            toast.info('Please Fill The Form')
        } else {
            const result = await adddata(userData)
            console.log(result);
            toast.success('Data Added Successfully')
            setUserData({
                name: "", unitname: "", housename: "", mobileno: "", receiptno: "", amount: "", date: "",registeredid:""
            })
        }
    }
//  search by id
    const handlesearch = async () => {
        if (!userId) return toast.info("Please Enter An Id");
        try {
            const response = await fetch(`http://localhost:4000/churchdata/${userId}`);
            if (!response.ok) {
                setUserData({ name: "", unitname: "", housename: "", mobileno: "", receiptno: "" ,registeredid:""}); // Reset fields if not found
                return toast.warning("User Not Found");
            }
            const data = await response.json();
            setUserData({ name: data.name, unitname: data.unit, housename: data.house, mobileno: data.mobile ,registeredid:data.id }); // Populate fields
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setUserId("")
    }
    return (
        <div style={{paddingTop:"85px"}}>

            <div className='background-img'>
                <div className='background'>

                    <div className='row'>
                        <div className='col-3'>

                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <div className='text-center mt-4'>
                                <input value={userId}
                                    onChange={(e) => setUserId(e.target.value)} className='p-2 rounded' type="text" placeholder='Enter Id' />
                                <button onClick={handlesearch} className='btn bg-light p-2 rounded shadow text-dark ms-1' >Search</button>

                            </div>

                        </div>
                        <div className='col-3'>
                        </div>
                    </div>
                    <div className='row text-center'>
                        <div className='col-3'></div>
                        <div className='col-md-6 mt-1'>
                        <div className='mt-2'>
                                <input onChange={(e) => setUserData({ ...userData,registeredid: e.target.value })} value={userData.registeredid} className='p-2 rounded w-50' type="text" placeholder='Registered Id' />
                            </div>
                            <div className='mt-2'>
                                <input onChange={(e) => setUserData({ ...userData, receiptno: e.target.value })} value={userData.receiptno} className='p-2 rounded w-50' type="text" placeholder='Receipt No' />
                            </div>
                            <div className='mt-2'>
                                <input onChange={(e) => setUserData({ ...userData, unitname: e.target.value })} value={userData.unitname} className='p-2 rounded w-50' type="text" placeholder='Unit Name' />
                            </div>
                            <div className='mt-2'>
                                <input onChange={(e) => setUserData({ ...userData, housename: e.target.value })} value={userData.housename} className='p-2 rounded w-50' type="text" placeholder='House Name' /></div>
                            <div className='mt-2'>
                                <input onChange={(e) => setUserData({ ...userData, name: e.target.value })} value={userData.name} className='p-2 rounded w-50' type="text" placeholder='Name' />
                            </div>

                            <div className='mt-2'>
                                <input onChange={(e) => setUserData({ ...userData, mobileno: e.target.value })} value={userData.mobileno} className='p-2 rounded w-50' type="text" placeholder='Mobile Number' />
                            </div>
                            <div className='mt-2'>
                                <input onChange={(e) => setUserData({ ...userData, date: e.target.value })} value={userData.date} className='p-2 rounded w-50' type="date" placeholder='Mobile Number' />
                            </div>
                            <div className='mt-2'>
                                <input onChange={(e) => setUserData({ ...userData, amount: e.target.value })} value={userData.amount} className='p-2 rounded w-50' type="text" placeholder='Amount' />
                            </div>
                            <div className='text-center mt-3'>
                                <button onClick={handleadd} className='btn bg-primary border p-2 rounded shadow text-light me-5'>Submit</button>
                                <button onClick={handleclear}  className='btn bg-danger border p-2 rounded shadow text-light me-5'>Clear</button>

                            </div>
                           
                        </div>
                        <div className='col-3'></div>
                  </div>
                </div>

            </div>
            <ToastContainer
position="top-center"
autoClose={1000}

theme="colored"
/>
        </div>
    )
}

export default Home