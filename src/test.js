import React from "react";
import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import Btn2 from "./components/Btn2";
// import DelHandler from './components/DelHandler';

function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "리액트 공부하기",
            details: "리액트 기초에 대하여",
            isDone: false,
        },
        {
            id: 2,
            title: "러닝 40분",
            details: "3:1 비율로 인터벌",
            isDone: false,
        },
    ]);

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    const detailsChangeHandler = (e) => {
        setDetails(e.target.value);
    };
    const addHandler = () => {
        const addContent = {
            id: todo.length + 1,
            title: title,
            details: details,
            isDone: false,
        };
        setTodo([...todo, addContent]);
        //클릭시 inputTag 리셋
        setTitle("");
        setDetails("");
    };

    const delHandler = (id) => {
        const newTodo = todo.filter((todo) => todo.id !== id);
        setTodo(newTodo);
    };
    // const passHandler = (props) => {
    //     const newTodo2 = todo.isDone ? "취소" : "완료";
    //     // console.log(newTodo2);

    //     function completeBtn() {
    //         todo({ isDone: true });
    //     }
    //     function cancelBtn() {
    //         todo({ isDone: false });
    //     }
    //     const todosIsDone = todo.isDone;
    //     let changebtn;
    //     if (todosIsDone) {
    //         changebtn = <completeBtn />;
    //     }
    // };

    return (
        <div className="bodyTag">
            <div className="titleTag">
                <h3>My ToDoList</h3>
                <h3>React</h3>
            </div>
            <div className="inputMom">
                <div className="inputTag">
                    <p>제목</p>
                    <input value={title} onChange={titleChangeHandler} />
                    <br />
                    <p>내용</p>
                    <input value={details} onChange={detailsChangeHandler} />
                    <Btn2 addHandler={addHandler}>등록하기</Btn2>
                </div>
            </div>
            <div>
                <h1 style={{ padding: "10px 0 0 20px" }}>Working On 🔥</h1>
                <div className="app-style">
                    {todo.map((fd) => {
                        return (
                            <Todo
                                fd={fd}
                                delHandler={delHandler}
                                passHandler={passHandler}
                                key={todo.id}
                            />
                        );
                    })}
                </div>
                <h1 style={{ padding: "10px 0 0 20px" }}>Finally Done 🎉🎉</h1>
                <div className="appDone-style">
                    {/* {user2.map((fd) => {
                        return (
                            <User2
                                fd={fd}
                                delHandler={delHandler}
                                key={user2.id}
                            />
                        );
                    })} */}
                </div>
            </div>
        </div>
    );
}

export default App;
