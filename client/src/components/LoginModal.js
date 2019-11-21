import React,{Component} from 'react';
import {Form,FormGroup,Input,Label,Modal,ModalHeader,ModalBody,NavLink,Button} from 'reactstrap';
import LoginModalLogo from '../images/login.png';
class LoginModal extends Component{

    state={
        modal:false,
        email:'',
        password:'',
        msg:null
    }

    toggle=()=>{
        this.setState({modal:!this.state.modal});
    }

    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit=e=>{
        e.preventDefault();
        this.toggle();
    }


    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">Login</NavLink>
                
                    <Modal isOpen={this.state.modal} toggle={this.toggle} style={loginModal}>
                    <ModalHeader toggle={this.toggle} style={{backgroundColor:'#3d70b2',color:'#dfe3e6',textAlign:'right',marginBottom:'8px'}}><span style={{textAlign:'center',display:'block',margin:'auto',padding:'4px'}}>Login</span></ModalHeader>

                    <ModalBody>
                        <img src={LoginModalLogo} alt="Login" width="150px" height="150px" style={loginLogo}/>
                        
                            

                        <Form onSubmit={this.onSubmit}>
                             <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} style={inputStyle}/>
                            </FormGroup>


                            <FormGroup>
                                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} style={inputStyle}/>
                           </FormGroup>
   
                           <Button style={{marginTop:'2rem',backgroundColor:'#3d70b2',color:'#dfe3e6',width:'50%',padding:'6px',margin:'auto',display:'block',marginTop:'20px',marginBottom:'10px'}}>Login</Button>
                            
                        </Form>
                      
                    </ModalBody>
                </Modal>
                   
                
              
            </div>
        )
    }
}

const loginModal={
    width:'700px',
    margin:'auto',
}

const loginLogo={
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
export default LoginModal;