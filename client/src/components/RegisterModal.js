import React,{Component} from 'react';
import {Modal,ModalHeader,ModalBody,Button,Input,Label,Alert,Form,FormGroup,NavLink} from 'reactstrap';
import RegisterModalLogo from '../images/registerUser.png';

class RegisterModal extends Component{
    
    state={
      modal:false,
      username:'',
      email:'',
      password:'',
      cpassword:'',
      msg:null
    }

    toggle=()=>{
        this.setState({modal:!this.state.modal});
    };

    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">Register</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={registerModal}>
                    <ModalHeader toggle={this.toggle} style={{textAlign:'right',marginBottom:'8px',backgroundColor:'#3d70b2',color:'#dfe3e6'}}>
                       <span style={{display:'block',margin:'auto',textAlign:'center'}}>Register</span>
                    </ModalHeader>

                    <ModalBody>
                        <img src={RegisterModalLogo} width="150px" height="150px" alt="Register Modal" style={registerLogo}></img>
                        <Form>
                           <FormGroup>
                               <Input type="text" name="username" id="username" placeholder="Username" onChange={this.onChange} style={inputStyle}/>
                            </FormGroup>

                            <FormGroup>
                               <Input type="text" name="email" id="email" placeholder="Email" onChange={this.onChange} style={inputStyle}/>
                           </FormGroup>
                            
                           <FormGroup>
                               <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} style={inputStyle}/>
                            </FormGroup> 

                            <FormGroup>
                               <Input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" onChange={this.onChange} style={inputStyle}/>
                            </FormGroup>
   
                         <Button style={{marginTop:'2rem',width:'50%',padding:'6px',backgroundColor:'#3d70b2',color:'#dfe3e6',display:'block',margin:'auto',marginTop:'20px',marginBottom:'10px'}}>Register</Button>   
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};

const registerModal={
    width:'700px',
    margin:'auto'
};

const registerLogo={
    display:'block',
    margin:'auto',
    marginBottom:'10px'
}

const inputStyle={
    width:'90%',
    display:'block',
    margin:'auto',
    marginBottom:'4px',
    padding:'8px'
}

export default RegisterModal;