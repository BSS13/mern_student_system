import React,{Component} from 'react';
import {Modal,ModalHeader,ModalBody,Button,Input,Label,Alert,Form,FormGroup,NavLink} from 'reactstrap';

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
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                       Register
                    </ModalHeader>

                    <ModalBody>
                        <Form>
                           <FormGroup>
                               <Label for="username">Username</Label>
                               <Input type="text" name="username" id="username" placeholder="Username" onChange={this.onChange}/>

                               <Label for="email">Email</Label>
                               <Input type="text" name="email" id="email" placeholder="Email" onChange={this.onChange}/>

                               <Label for="password">Password</Label>
                               <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange}/>

                               <Label for="cpassword">Confirm Password</Label>
                               <Input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" onChange={this.onChange}/>

                               <Button>Register</Button>
                           </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};

export default RegisterModal;