import { Component } from "react";
import { Button, Radio, notification } from 'antd';

import quiz from "../helpers/questionbank";

export default class Like extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initLike: 100,
      bool: true,
      toggleAssignment: "one",
      quizQues: quiz,
      initialQuest: 0,
    }

  }

  alterCount = () => {
    // debugger;
    let _this = this;
    if (this.state.bool) {
      this.setState({
        initLike: _this.state.initLike + 1,
        bool: false
      })
    } else {
      this.setState({
        initLike: _this.state.initLike - 1,
        bool: true
      })
    }

  }

  toggleAssignment = () => {
    if (this.state.toggleAssignment == "one") {
      this.setState({
        toggleAssignment: "two"
      })
    } else {
      this.setState({
        toggleAssignment: "one"
      })
    }

  }

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  nextQuest = () => {
    let _this = this;
    if (this.state.initialQuest < quiz.length - 1) {
      this.setState({
        initialQuest: _this.state.initialQuest + 1
      })
    }
  }
  prevQuest = () => {
    let _this = this;
    if (this.state.initialQuest > 0) {
      this.setState({
        initialQuest: _this.state.initialQuest - 1
      })
    }
  }



  submitAns = () => {
    let correctAnswer = "";
    let answerType = "";
    if (this.state.value) {
      if (this.state.initialQuest == 0) {
        if (this.state.value == "2020") {
          correctAnswer = this.state.value;
          answerType = "success"
        } else {
          correctAnswer = "2020";
          answerType = "error"
        }
      } else if (this.state.initialQuest == 1) {
        var d = new Date();
        var n = d.getDay();
        let today = "";
        switch (n) {
          case 0:
            today = "SUNDAY"
            break;

          case 1:
            today = "MONDAY"
            break;

          case 2:
            today = "TUESDAY"
            break;

          case 3:
            today = "WEDNESDAY"
            break;

          case 4:
            today = "THURSDAY"
            break;

          case 5:
            today = "FRIDAY"
            break;

          case 6:
            today = "SATURDAY"
            break;

        }


        if (this.state.value == "SUNDAY") {
          if (n == 0) {
            correctAnswer = this.state.value;
            answerType = "success"
          } else {
            correctAnswer = today;
            answerType = "error"
          }
        } else if (this.state.value == "SATURDAY") {
          if (n == 6) {
            correctAnswer = "SATURDAY";
            answerType = "success"
          } else {
            correctAnswer = today;
            answerType = "error"
          }
        }
        else if (this.state.value == "MONDAY") {
          if (n == 1) {
            correctAnswer = "MONDAY";
            answerType = "success"
          } else {
            correctAnswer = today;
            answerType = "error"
          }
        }
        else if (this.state.value == "TUESDAY") {
          if (n == 2) {
            correctAnswer = "TUESDAY";
            answerType = "success"
          } else {
            correctAnswer = today;
            answerType = "error"
          }
        }
        else if (this.state.value == "WEDNESDAY") {
          if (n == 3) {
            correctAnswer = "WEDNESDAY";
            answerType = "success"
          } else {
            correctAnswer = today;
            answerType = "error"
          }
        }
        else if (this.state.value == "THURSDAY") {
          if (n == 4) {
            correctAnswer = "THURSDAY";
            answerType = "success"
          } else {
            correctAnswer = today;
            answerType = "error"
          }
        }
        else if (this.state.value == "FRIDAY") {
          if (n == 5) {
            correctAnswer = "FRIDAY";
            answerType = "success"
          } else {
            correctAnswer = today;
            answerType = "error"
          }
        }
      }
      notification[answerType]({
        message: 'Your Answer is ' + this.state.value,
        description: correctAnswer + " is the correct answer"
      });
    } else {
      notification["error"]({
        message: "Please select a value",
        description: "Answer cannot be empty"
      });
    }



  }



  render() {
    let _this = this;
    console.log("quizzzzzzzz", this.state.quizQues)
    return (
      <div>
        {this.state.toggleAssignment == "one" ?
          <div className="parentDiv">
            <h3>Assignment 1</h3>
            <Button type="primary"
              className={this.state.bool ? "like-button liked" : "like-button"}
              onClick={this.alterCount}>Like</Button> |
            <span className="likes-counter"> {this.state.initLike} </span>

          </div>
          :
          <div className="quesDiv">
            <h3>Assignment 2</h3>

            <div className="questionsCls">
              <span className="qcls">{this.state.quizQues[this.state.initialQuest].Question}</span>
              <div>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  {this.state.quizQues[this.state.initialQuest].value.map(val =>
                    <div>
                      <Radio value={val}>{val}</Radio>
                    </div>
                  )
                  }
                </Radio.Group>
              </div>
              <Button className="btnspacing" type="primary" onClick={this.prevQuest}> Previous </Button>
              <Button className="btnspacing" type="primary" onClick={this.submitAns}> Submit Answer </Button>
              <Button className="btnspacing" type="primary" onClick={this.nextQuest}> Next </Button>
              <Button className="btnspacing" type="primary" onClick={this.submitAns}> Show Answer </Button>


            </div>




          </div>
        }
        <div className="footer">
          <Button type="primary"
            onClick={this.toggleAssignment}>
            Assignment Shift
          </Button>

        </div>
      </div>
    )
  }


}

