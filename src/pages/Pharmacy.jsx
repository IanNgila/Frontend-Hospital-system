import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect,useState } from 'react'
import { Container } from '@mui/system';


const Technicians = ({ handlePosting}) => {
 


  // const [tech, setTech] = useFetchData()
  // const deleteTech = ()=>{
  //   fetch(`http://localhost:9292/technicians/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type":"application/json"
  //     }
  //   })
  //   .then(res=>res.json())
  //   .then(data => console.log(data))
  //   .catch(err=>console.log(err))

  //   fetch("http://localhost:9292/technicians")
  //     .then(res => res.json())
  //     .then(data => {
  //       setTech(data)
  //       console.log(data)
  //     })
  //     .catch(err => console.log(err))
  // }



    const [formData, setFormData] = useState({
      patient_id: '',
      ticket_id: '',
      Remark: '',
      inventory_item: '',
      town: '',
      job_type: '',
      job_description: '',
      labour_cost: ''

    })


      
    const [technicians, setTechnicians] = useState([])
    useEffect( () => {
      fetch("https://backend-host.herokuapp.com/technicians")
      .then(res => res.json())
      .then(data => setTechnicians(data))
    },[])

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://backend-host.herokuapp.com/technicians`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            handlePosting(data)
        })

        setFormData({
          patient_id: '',
          ticket_id: '',
          Remark: '',
          inventory_item: '',
          town: '',
          job_type: '',
          job_description: '',
          labour_cost: ''
        })
    }

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }  

  return (
    <div>
      <div>
        <Container className='formContainer'>
    <div 
    style={{ fontSize: "20px", fontWeight: "bold" }}
    >
        Pharmacy Form 
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Patient Id</InputLabel>
            <Input name="patient_id" value={formData.patient_id} onChange={handleChange}/>
            <FormHelperText>Please Enter Patient id</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 2, width: '35ch' }}>
            <InputLabel>Ticket id</InputLabel>
            <Input name="ticket_id" value={formData.ticket_id} onChange={handleChange}/>
            <FormHelperText>Please Enter Ticket Id</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Remarks</InputLabel>
            <Input name="Remark" value={formData.Remark} onChange={handleChange}/>
            <FormHelperText>Please Enter Remarks</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Inventory item</InputLabel>
            <Input name="inventory_item" value={formData.inventory_item} onChange={handleChange}/>
            <FormHelperText>Please Enter Inventory item</FormHelperText>
        </FormControl>
      </div>

      <div>
      </div>
      <div>
      </div>
      
      
      <div>
      </div>
      
      <div>
        
      </div>
    </Box>
    <div>
        <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
            <Button variant='outlined' type='submit' onClick={handleSubmit}>
                Submit
            </Button>
        </FormControl>
      </div>
    </Container>
    </div>
    </div>
  );
}

export default Technicians;