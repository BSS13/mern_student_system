import React,{Component} from 'react';
import {Modal,ModalHeader,ModalBody,Form,Input,FormGroup,Label,Button} from 'reactstrap';

class EditStudentModal extends Component{
      state={
          modal:false
      }

      toggle=()=>{
          this.setState({modal:!this.state.modal});
      }
    
    render()
    {
        return(
            <div>
               
               <Button onClick={this.toggle}>Edit</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{width:'700px',margin:'auto'}}>
                    <ModalHeader toggle={this.toggle}>
                        <h1 style={{margin:'auto',textAlign:'center',color:'#dfe3e6',backgroundColor:'#3d70b2'}}>Edit Student Details</h1>
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="rollno" style={inputStyle}>Roll No</Label>
                                <Input type="text" style={inputStyle}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="name" style={inputStyle}>Name</Label>
                                <Input type="text" style={inputStyle}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="Fathername" style={inputStyle}>Fathername</Label>
                                <Input type="text" style={inputStyle}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="Mothername" style={inputStyle}>Mothername</Label>
                                <Input type="text" style={inputStyle}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="DOB" style={inputStyle}>DOB</Label>
                                <Input type="text" style={inputStyle}/>
                            </FormGroup>

                            <FormGroup>
                               <Label for="Class" style={inputStyle}>Class</Label>
                               <Input type="text" style={inputStyle}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="address" style={inputStyle}>Address</Label>
                                <Input type="text" style={inputStyle}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="contact" style={inputStyle}>Contact</Label>
                                <Input type="text" style={inputStyle}/>
                            </FormGroup>

                            <Button style={{marginTop:'2rem',color:'#dfe3e6',display:'block',backgroundColor:'#3d70b2',padding:'4px',width:'50%',margin:'auto'}}>Edit Details</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};

const inputStyle={
   display:'block',
   margin:'auto',
   width:'90%',
   marginBottom:'4px',
   padding:'8px'
};

export default EditStudentModal;