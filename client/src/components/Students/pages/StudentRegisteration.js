import React,{Component} from 'react';
import {Form,FormGroup,Input,Button,Alert,Label} from 'reactstrap';
import Axios from 'axios';

class StudentRegisteration extends Component
{
    state={
        rollno:'',
        name:'',
        Fathername:'',
        Mothername:'',
        DOB:'',
        Class:'',
        address:'',
        contact:'',
        msg:null
    }

    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit=e=>{
        e.preventDefault();

        //Fetch the Required Fields
        const {rollno,name,Fathername,Mothername,DOB,Class,address,contact}=this.state;

        Axios.post("http://localhost:5000/api/students",{
            rollno,
            name,
            Fathername,
            Mothername,
            DOB,
            Class,
            address,
            contact
        })
        .then(res=>{
            this.state.msg=res.data.msg;
        })
        .catch(err=>{
            if(err)
            console.log(err);
        })
    }


    render()
    {
        return(
            <div>
                <h2 style={{color:'#3d70b2',textAlign:'center'}}>Register New Students</h2>
                <Form onSubmit={this.onSubmit} style={formStyling}>
                
                  {this.state.msg?(
                        <Alert color="danger">{this.state.msg}</Alert>
                  ):null}

                    <FormGroup>
                        <Label for="rollno" style={inputStyle}>Roll Number</Label>
                        <Input type="text" name="rollno" id="rollno" placeholder="Roll Number" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="name" style={inputStyle}>Name</Label>
                        <Input type="text"name="name" id="name" placeholder="Name" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="Fathername" style={inputStyle}>Father Name</Label>
                        <Input type="text" name="Fathername" id="Fathername" placeholder="Father Name" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="Mothername" style={inputStyle}>Mother Name</Label>
                        <Input type="text" name="Mothername" id="Mothername" placeholder="Mother Name" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="DOB" style={inputStyle}>DOB</Label>
                        <Input type="text" name="DOB" id="DOB" placeholder="DOB" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="Class" style={inputStyle}>Class</Label>
                        <Input type="text" name="Class" id="Class" placeholder="Class" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="address" style={inputStyle}>Address</Label>
                        <Input type="text" name="address"id="address" placeholder="address" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="contact" style={inputStyle}>Contact</Label>
                        <Input type="text" name="contact" id="contact" placeholder="Contact Detail" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <Button style={buttonStyle}>Complete Registeration</Button>

                </Form>

            </div>
        )
    }
};

const inputStyle={
    padding:'7px',
    display:'block',
    width:'40%',
    margin:'auto',
    marginBottom:'5px'
};

const formStyling={
    padding:'6px',
    margin:'auto',
    width:'80%',
    marginTop:'40px'
};

const buttonStyle={
    display:'block',
    margin:'auto',
    width:'30%',
    padding:'6px',
    backgroundColor:'#3d70b2',
    color:'#dfe3e6'
}

export default StudentRegisteration;