import React,{Component} from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap';

class StudentRegisteration extends Component
{
    state={
        photograph:'',
        rollnumber:'',
        name:'',
        Fathername:'',
        Mothername:'',
        DOB:'',
        address:'',
        Class:'',
        contactdetails:''
    }

    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit=e=>{
        e.preventDefault();
        
    }


    render()
    {
        return(
            <div>
                <Form onSubmit={this.onSubmit} style={formStyling}>
                    <FormGroup>
                       <Input type="file" name="photograph" id="photograph" placeholder="Upload Image" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="rollnumber" id="rollnumber" placeholder="Roll Number" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="text"name="name" id="name" placeholder="Name" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="Fathername" id="Fathername" placeholder="Father Name" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="Mothername" id="Mothername" placeholder="Mother Name" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="DOB" id="DOB" placeholder="DOB" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="address" id="address" placeholder="Address" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="Class"id="Class" placeholder="Class" onChange={this.onChange} style={inputStyle}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="contactdetails" id="contactdetails" placeholder="Contact Detail" onChange={this.onChange} style={inputStyle}/>
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