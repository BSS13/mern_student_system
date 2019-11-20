import React,{Component} from 'react';
import {Form,FormGroup,Input,Label,Modal,ModalHeader,ModalBody,NavLink,Button,Row,Col} from 'reactstrap';
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
                
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>

                    <ModalBody>
                        <img src={LoginModalLogo} alt="Login" width="150px" height="150px"/>
                        <Form onSubmit={this.onSubmit}>
                             <FormGroup>
                                 <Row>
                                     <Col className="col-sm-3"><Label for="email">Email</Label></Col>
                                     <Col className="col-sm-3"><Input type="email" name="email" id="email" placeholder="Email" className="mb-3" onChange={this.onChange}/></Col>
                                </Row>
                            </FormGroup>


                            <FormGroup>
                                <Label for="password" className=".col-3">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password" className="mb-3" onChange={this.onChange}/>
                           </FormGroup>
   
                           <Button>Login</Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default LoginModal;