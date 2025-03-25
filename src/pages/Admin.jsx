import React, { useEffect, useState } from 'react'
import { getdata } from '../services/allapi';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Addnewmember from './Addnewmember';
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
function Admin() {
  const [data, setData] = useState([])

  const [nameSearch, setNameSearch] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [registerNumberFrom, setRegisterNumberFrom] = useState("");
  const [registerNumberTo, setRegisterNumberTo] = useState("");
  const[id , setId]=useState("")
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });


  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setFilteredData(sortedData);
  };
// search button

const handleSearch = (e) => {
 
  e.preventDefault();
  
  const filtered = data.filter(item => {
    const itemDate = new Date(item.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    // Name filter (case-insensitive partial match)
    const nameMatch = item.unitname.toLowerCase().includes(nameSearch.toLowerCase());



    //id
    const idreg=
(id? item.registeredid == parseInt(id) : true) ;

// register no
const registerNumberMatch =
(registerNumberFrom ? item.receiptno >= parseInt(registerNumberFrom) : true) &&
(registerNumberTo ? item.receiptno <= parseInt(registerNumberTo) : true);
    
    // Date range filter
    const dateAfterFrom = !from || itemDate >= from;
    const dateBeforeTo = !to || itemDate <= to;

    return  idreg && registerNumberMatch &&  nameMatch && dateAfterFrom && dateBeforeTo;
  });

  setFilteredData(filtered);
};

//handle clear
const handleclear =()=>{
  setFromDate(""),
  setToDate(""),
  setNameSearch(""),
  setRegisterNumberFrom(""),
  setRegisterNumberTo("")
  setId("")
}

  //get data
  const getdataform = async () => {
    const result = await getdata()
    console.log(result);
    setData(result.data)

  }
  useEffect(() => {
    getdataform();
    setFilteredData(data);
  }, [])

//total amount
  const totalAmount = filteredData.reduce((sum, item) => sum +Number(item.amount) ,0);



  //excel export
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    // Convert to binary and save
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(data, "transactions.xlsx");
  };
  return (
    <div style={{paddingTop:"85px"}}>

      {/* login */}
    
        <div className='border p-3 rounded shadow'>
          <div className='row mt-2' >


            <div className='d-flex align-items-center justify-content-center mt-4'>

              <div className='col-md-2 ms-2'>
                From
                <input    value={fromDate}
            onChange={(e) => setFromDate(e.target.value)} className='border-dark p-2 rounded shadow ms-1' type="date" placeholder='From' />
              </div>
              <div className='col-md-2'>
                To
                <input   value={toDate}
            onChange={(e) => setToDate(e.target.value)} className='border-dark p-2 rounded shadow ms-1' type="date" placeholder='To' />

              </div>
              <div className='col-md-2'>
                <select  value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)} className='border-dark p-2 rounded shadow' >
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
              <div className='col-md-2'>
                <input value={id}
            onChange={(e) => setId(e.target.value)} className='border-dark p-2 rounded shadow' type="text" placeholder='Registered Id' />
              </div>
              <div  className='col-md-2'>
<input   value={registerNumberFrom}
        onChange={(e) => setRegisterNumberFrom(e.target.value)}  className='border-dark p-2 rounded shadow' type="text" placeholder='Reciept No : From' />
</div>
<div  className= 'col-md-2'>
<input    value={registerNumberTo}
        onChange={(e) => setRegisterNumberTo(e.target.value)}  className='border-dark p-2 rounded shadow' type="text" placeholder='Reciept No : To' />
</div>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center mt-4'>
            <div><button onClick={handleSearch} className='btn bg-success p-2 rounded text-light' style={{ width: "200px" }}>Generate</button></div>
            <div><button onClick={handleclear} className='btn bg-danger p-2 rounded text-light ms-2' style={{ width: "200px" }}>Clear</button></div>
<div>
  <Addnewmember/>
</div>
<div>
<button className='btn bg-warning p-2 rounded text-light ms-2' onClick={exportToExcel}>Export to Excel</button>
</div>
<div>
</div>
          </div>
        </div>


      {data.length > 0 ?

        <div className='pt-2'>
          <table className="table table-hover table-striped p-3 shadow-lg">
            <thead>
              <tr>
                <th className='bg-primary' scope="col">#</th>
                <th className='bg-primary'scope="col" onClick={() => handleSort("receiptno")}>Receipt No</th>
                <th className='bg-primary'scope="col" onClick={() => handleSort("registeredid")}>Registered Id</th>
                <th className='bg-primary'scope="col" onClick={() => handleSort("date")}>Date</th>
                <th className='bg-primary'scope="col" onClick={() => handleSort("name")}>Full Name</th>
                <th className='bg-primary'scope="col" onClick={() => handleSort("housename")}>House Name</th>
                <th className='bg-primary'scope="col" onClick={() => handleSort("unitname")}>Unit Name</th>
                <th className='bg-primary'scope="col"  onClick={() => handleSort("mobileno")}>Mobile No</th>
                <th className='bg-primary'scope="col"  onClick={() => handleSort("amount")}>Amount</th>
                <th className='bg-danger '>Total Amount <br></br><span className='bg-light rounded p-1 border-success text-bold '>
  {totalAmount}
</span></th>
              </tr>
            </thead>
            {filteredData.map((item, index) => (
              <tbody>
                <tr >
                  <td >{index + 1}</td>
                  <td >
                    {item?.receiptno}
                  </td>
                  <td> {item?.registeredid}</td>
                  <td> {item?.date}</td>

                  <td> {item?.name}</td>
                  <td> {item?.housename}</td>

                  <td> {item?.unitname}</td>
                  <td> {item?.mobileno}</td>
                  <td> {item?.amount}</td>
                </tr>
              </tbody>
              
            ))}

          </table>
          
        </div>
        :
        <div className='pt-2'>
          <h1 className='text-center'>No Data Found</h1>

        </div>
      }


    </div>











  )
}

export default Admin