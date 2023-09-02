import React, { Component, useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Review(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    age: "",
    count: 5,
  });

  useEffect(() => {
    const { steps } = props;
    const { name, age } = steps;

    setState((prevState) => ({ ...prevState, name, age }));

    // dispatch({
    //   type: "addName",
    //   payload: name.value,
    // });

    // dispatch({
    //   type: "addAge",
    //   payload: age.value,
    // });

    dispatch({
      type: "addData",
      payload: steps,
    });

    const timer = setInterval(() => {
      setState((prevState) => {
        if (prevState.count > 0) {
          return { ...prevState, count: prevState.count - 1 };
        } else {
          navigate("/studentdata");
          return prevState;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [props, navigate, dispatch]);

  return (
    <div style={{ width: "100%" }}>
      <p>Countdown: {state.count} seconds</p>
      {/* <p>Name: {state.name.value}</p>
      <p>age: {state.age.value}</p> */}
    </div>
  );
}

// class Review extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       age: "",
//       count: 5,
//     };
//   }

//   componentWillMount() {
//     const { steps } = this.props;
//     const { name, age } = steps;

//     this.setState({ name, age });
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       if (this.state.count > 0) {
//         this.setState((prevState) => ({ count: prevState.count - 1 }));
//       }
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     // const { name, age } = this.state;
//     // <td>{name.value}</td>

//     return (
//       <div style={{ width: "100%" }}>
//         <p>Countdown: {this.state.count} seconds</p>
//       </div>
//     );
//   }
// }

class Chatbot extends Component {
  render() {
    const steps = [
      {
        id: "1",
        message: "Hello, Welcome to student info system!",
        trigger: "2",
      },
      {
        id: "2",
        options: [{ value: "Got it", label: "Got it", trigger: "3" }],
        trigger: "3",
      },
      {
        id: "3",
        message: "Enter Your Name",
        trigger: "name",
      },
      {
        id: "name",
        user: true,
        trigger: "4",
      },
      {
        id: "4",
        message: "Hi {previousValue}, nice to meet you!",
        trigger: "5",
      },
      {
        id: "5",
        message: "Enter Your Age",
        trigger: "age",
      },
      {
        id: "age",
        user: true,
        trigger: "6",
        validator: (value) => {
          if (isNaN(value)) {
            return "value must be a number";
          } else if (value < 0) {
            return "value must be positive";
          } else if (value > 120) {
            return `${value}? Come on!`;
          }

          return true;
        },
      },
      {
        id: "6",
        message: "Thank you. In 5 seconds, bot will exit",
        trigger: "review",
      },
      {
        id: "review",
        component: <Review />,
        asMessage: true,
        end: true,
      },
    ];
    return (
      <div className="chat-bot">
        <ChatBot steps={steps} />
      </div>
    );
  }
}

export default Chatbot;
