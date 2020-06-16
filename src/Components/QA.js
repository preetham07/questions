import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from './LoadingSpinner';
import { questions } from '../config/questions.json';
import {Button,Card,Form,ButtonToolbar,ButtonGroup,Toast,ToastBody} from 'react-bootstrap';

class QA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: "none",
            currentQuestion:"",
            currentOptions:[],
            currentAnswer:"",
            currentQuestionIndex:0,
            questionArray:[],
            selectedOption:"",
            showAlert:false
        };
        this.getQuestionsData = this.getQuestionsData.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.showAnswer = this.showAnswer.bind(this);

    }
    changeQuestion(type){
      this.setState({
          loading: "show"
      })

      if("p" === type){
        if(this.state.currentQuestionIndex > 0){
          var currentIndex =this.state.currentQuestionIndex -1;
          this.updateQuestion(currentIndex);
        }else{
          toast(' Please click next', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          this.setState({
              loading: "none"
          })

        }
      }else{
        console.log("this.state.questionArray.length",this.state.questionArray.length);
        if(this.state.currentQuestionIndex < (this.state.questionArray.length-1)){
          var currentIndex =this.state.currentQuestionIndex + 1;
          this.updateQuestion(currentIndex);
        }else{
          toast(' Please click prev', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          this.setState({
              loading: "none"
          })

        }

      }


    }


    updateQuestion(currentIndex){

      var currentQuestion = this.state.questionArray[currentIndex]["question"];
      var currentOptions = this.state.questionArray[currentIndex]["options"];
      var currentAnswer = this.state.questionArray[currentIndex]["answer"];
      this.setState({
          loading: "none",
          currentQuestion:currentQuestion,
          currentOptions:currentOptions,
          currentAnswer:currentAnswer,
          currentQuestionIndex:currentIndex,
          selectedOption:""
       });

    }
    onValueChange(event){
      console.log(event.target.value);
      console.log(event.target.id);
      this.setState({
        selectedOption:event.target.value
      })
    }
    showAnswer(){
      if(this.state.selectedOption != ""){
      if(this.state.selectedOption == this.state.currentAnswer){
        toast.success('Correct Answer is '+this.state.currentAnswer, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      }else{
        toast.error('You Have Selected Wrong Answer ', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });


        toast.success('Correct Answer is '+this.state.currentAnswer, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      }
}else{
  toast.error('Please select one of the answer ', {
  position: "bottom-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });
}
    }

    componentDidMount() {
        this.getQuestionsData();
    }

    getQuestionsData() {
      this.setState({
          loading: "show"
      })

      var question = questions.questions;
        console.log("questions::",questions);
      this.setState({
          loading: "none",
          currentQuestion:questions[0]["question"],
          currentOptions:questions[0]["options"],
          currentAnswer:questions[0]["answer"],
          currentQuestionIndex:0,
          questionArray:questions
       });
    }


render() {
return (
<div>
<LoadingSpinner showSpinner={this.state.loading} />
<ToastContainer />
<div className="container pt-3">
  <div className="row justify-content-sm-center">
    <div class="col-12">
    <Card>
    <Card.Body>
      <h4>Welcome to Celegence</h4>
    </Card.Body>
    </Card>
    <Card>
    <Card.Body>
      <div>{(this.state.currentQuestionIndex+1)+" . "+this.state.currentQuestion} ?<br/></div>
      <br/>
      <Form>
            {this.state.currentOptions.map(option => (
              <div>
                  <p>
                    <div key={`default-radio`} className="mb-3">
                      <Form.Check
                        type="radio"
                        id={`default-radio`}
                        label={option}
                        value={option}
                        checked={this.state.selectedOption=== option}
                        onChange={this.onValueChange}
                      />
                    </div>
                  </p><br/>
                </div>
              ))}
        </Form>
        </Card.Body>
      </Card>
      </div>
      <br/>
      <br/>
      <div class="col-lg-12">
      <Card>
      <Card.Body>
              <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                      <Button onClick={()=>this.changeQuestion("p")}>Previous</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group" onClick={this.showAnswer}>
                      <Button>Submit</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Third group" onClick={this.showAnswer}>
                      <Button>Show</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Fourth group">
                      <Button onClick={()=>this.changeQuestion("n")}>Next</Button>
                    </ButtonGroup>
              </ButtonToolbar>
          </Card.Body>
        </Card>

      <ToastContainer />
      </div>
    </div>
  </div>
  <hr/>
</div >

        )
    }
}


export default withRouter(QA);
