import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addnewdata } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';

function Addnewmember() {

const [adddata , setAdddata] = useState({
  id:"",
  unit:"",
  house:"",
  name:"",
  mobile:""
})
console.log(adddata);

const handleadd = async ()=>{
const{id , unit , house ,name , mobile} = adddata
if(!id || !unit  || !name  || !mobile || !house){
toast.info('Please Fill The Form')
}else{
  const result= await addnewdata(adddata)
console.log(result);
if(result.status >=200 && result.status <=300){
  toast.success('Data Added Successfully')
  setAdddata({
    id:"",
    unit:"",
    house:"",
    name:"",
    mobile:""
  })

}else{
  toast.warning(`something went wrong`)

}
}

}





    const [show, setShow] = useState(false);

    const handleClose = () =>{

      setShow(false);
      setAdddata({
        id:"",
        unit:"",
        house:"",
        name:"",
        mobile:""
      })
    } 
    const handleShow = () => setShow(true);

    
  return (
    <div>

<button  onClick={handleShow} className='btn bg-primary p-2 rounded text-light ms-2' style={{ width: "200px" }}>Add Member</button>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-1'>
          <input onChange={(e)=>setAdddata({...adddata,id:e.target.value})} value={adddata.id} className='border-dark p-2 rounded shadow w-100' type="text" placeholder='Enter Id' />

          </div>
          <div  className='mt-1'>
          <select  
            onChange={(e)=>setAdddata({...adddata,unit:e.target.value})} className='border-dark p-2 rounded shadow w-100' >
                  <option value={""}>Unit Name</option>
                  <option value={"cherupushpam"}>cherupushpam</option>
                  <option value={"St kochuthresia"}>St kochuthresia</option>
                  <option value={"st joseph"}>st joseph</option>
                  <option value={"st peter"}>st peter</option>
                  <option value={"st damian"}>st damian</option>
                  <option value={"rani mariya"}>rani mariya</option>
                  <option value={"st antonys"}>st antonys</option>
                  <option value={"st sebastian"}>st sebastian</option>
                  <option value={"lourdhmatha"}>lourdhmatha</option>
                  <option value={"velankannimatha"}>velankannimatha</option>
                  <option value={"st rapheal"}>st rapheal</option>
                  <option value={"mother therasa"} >mother therasa</option>
                  <option value={"assissi"}>assissi</option>
                  <option value={"infant jesus"}>infant jesus</option>
                  <option value={"christuraj"}>christuraj</option>
                  <option value={"paul"}>paul</option>
                  <option value={"jude"}>jude</option>
                  <option value={"st thomas"}>st thomas</option>
                  <option value={"st francis"}>st francis</option>
                  <option value={"st marys"} >st marys</option>
                  <option value={"st xaviour"}>st xaviour</option>
                  <option value={"vimalanatha"}>vimalanatha</option>
                  <option value={"marymatha"}>marymatha</option>
                  <option value={"johnpaul"}>johnpaul</option>
                  <option value={"karmalanatha"}>karmalanatha</option>
                  <option value={"don bosco"}>don bosco</option>
                  <option value={"st stephen"}>st stephen</option>
                  <option value={"st james"}>st james</option>
                  <option value={"thirukudumbam"}>thirukudumbam</option>
                  <option value={"thiruhrudhayam"}>thiruhrudhayam</option>
                  <option value={"benedict"}>benedict</option>
                  <option value={"st alphonsa"}>st alphonsa</option>
                  <option value={"mariyam thressia"}>mariyam thressia</option>
                  <option value={"emmanuel"}>emmanuel</option>
                  <option value={"st george"}>st george</option>
                  <option value={"st theresas"}>st theresas</option>
                  <option value={"st layola"}>st layola</option>
                  <option value={"st euvprasia"}>st euvprasia</option>
                  <option value={"st johns"}>st johns</option>
                  <option value={"holy trinity"}>holy trinity</option>
                  <option value={"chavara"}>chavara</option>
                  <option value={"annes"}>annes</option>
                  <option value={"jerusalem"}>jerusalem</option>




                </select>
          </div>
          <div  className='mt-1'>
          <input  onChange={(e)=>setAdddata({...adddata,name:e.target.value})} value={adddata.name} className='border-dark p-2 rounded shadow w-100' type="text" placeholder='Enter Name' />

          </div>
          <div  className='mt-1'>
          <input  onChange={(e)=>setAdddata({...adddata,mobile:e.target.value})} value={adddata.mobile} className='border-dark p-2 rounded shadow w-100' type="text" placeholder='Enter Mobile No' />

          </div>
          <div  className='mt-1'>
          <input  onChange={(e)=>setAdddata({...adddata,house:e.target.value})} value={adddata.house} className='border-dark p-2 rounded shadow w-100' type="text" placeholder='Enter House' />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close    
          </Button>
          <Button variant="primary" onClick={handleadd}>
           Add Data
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center"
autoClose={1000}
theme="light"
/>
</div>

   
  )
}

export default Addnewmember