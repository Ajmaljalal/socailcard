import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Comment from './comment';


export default class Socialcard extends Component {
    state = {
        likes: 15,
        comment: '',
        comments: ['Starting small is taking steps into making larger projects with react. Keep in mind that oceans', 'Starting small is taking steps into making larger projects with react. Keep in mind that oceans', 'Starting small is taking steps into making larger projects with react. Keep in mind that oceans'],
        commentsCount: 3,
        retweets: 20,
        likeFlag: false,
        green: false,
        red: false,
        show: false
    }

    like = (e) => {
        let like = this.state.likes;
        if (!this.state.likeFlag) {
            like++;
            this.setState({
                likes: like,
                likeFlag: true,
                red: !this.state.red
            })
        } else {
            like--;
            this.setState({
                likes: like,
                likeFlag: false,
                red: !this.state.red
            })
        }
    }


    retweet = (e) => {
        let retweet = this.state.retweets;
        if (!this.state.retweetFlag) {
            retweet++;
            this.setState({
                retweets: retweet,
                retweetFlag: true,
                green: !this.state.green,

            })
        } else {
            retweet--;
            this.setState({
                retweets: retweet,
                retweetFlag: false,
                green: !this.state.green,
            })
        }
    }

    onChange = (e) =>{
        this.setState({
            comment: e.target.value,
        })
        console.log(this.state.comment);
    }

    handleSubmit = () =>{
        let count = this.state.commentsCount;
        let newComments = this.state.comments;
        let newComment = this.state.comment;
        count++;
        newComments.push(newComment);
        this.setState({
             show: false,
             commentsCount: count, 
             comments: newComments,
            });
    }

    handleHide =()=> {
        this.setState({
             show: false,
            });
      }


    render() {
        let redColor = this.state.red ? "red" : "black";
        let greenColor = this.state.green ? "green" : "black";
        return (
            <div className='socialcard' >
                <div className='socialcard-profile'><img src={require('./ajmal.jpg')} alt='profile' /> </div>
                <div className='socialcard-body'>
                    <div className='socialcard-header'>
                        <div>
                            <h4>Learning react</h4>
                            <p>Learning react? start small!</p>
                            <p className='gainsboro-font'>May 16</p>
                        </div>
                        <div><i className="fas fa-angle-down"></i></div>
                    </div>
                    <div className='socialcard-content'>
                        <div><img src={require('./office.jpeg')} alt="twitter's post" width='620' height='300' /></div>
                        <div className='content-text'>
                            <div><p>Starting small is taking steps into making larger projects with react. Keep in mind that oceans are made of small drops of water. Your little tiny steps is going to lead you to bigger projects.</p></div>
                            <div className='gainsboro-font'><p>learnreact.com</p></div>
                        </div>
                    </div>
                    <div className='socailcard-buttons'>
                        <div className='buttons' onClick={() => this.setState({ show: true })}><i className="far fa-comment"></i><span>{this.state.commentsCount}</span></div>
                        <div className='buttons' style={{ color: greenColor }} onClick={this.retweet}><i className="fas fa-retweet"><span>{this.state.retweets}</span></i></div>
                        <div className='buttons' style={{ color: redColor }} onClick={this.like}><i className="far fa-heart"><span>{this.state.likes}</span></i></div>
                        <div className='buttons'><i className="far fa-envelope"></i></div>
                    </div>

                    <div>
                        {this.state.comments.map((comment, index) => (
                            <Comment key ={index} comment={comment}/>
                        ))}
                    </div>
                </div>



                <div className="modal-container" style={{ height: 200 }}>
                 <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                        Reply to Learning React
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className = 'Modal-body'>
                        <div className = 'socialcard-comment'>
                            <div className='socialcard-profile'><img src={require('./ajmal.jpg')} alt = 'profile'/></div>
                            <div>
                                <h4>Learning react</h4>
                                <p>Learning react? start small!</p>
                                <p className='gainsboro-font'>May 16</p>
                                <p>Starting small is taking steps into making larger projects with react. Keep in mind that oceans are made of small drops of water. Your little tiny steps is going to lead you to bigger projects.</p>
                            </div>  
                        </div>
                    </Modal.Body>
                    <Modal.Footer className = 'modal-footer'>
                        <div className = 'modal-footer'>
                            <Form>
                                <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Replying to <a>@learningreact</a></ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Tweet your reply" onChange = {this.onChange} />
                                </FormGroup>
                            </Form>
                            <Button bsStyle="info" className = 'modal-button' onClick={this.handleSubmit}>Reply</Button>
                        </div>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        )
    }
}
