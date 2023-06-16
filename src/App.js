import React from "react";
import { useState } from "react";
import "./Tab.css";

// 빼놓은 Tabs, DefaultBtn 컴포넌트를 불러온다;
import Tabs from "./components/Tabs";
import DefaultBtn from "./components/DefaultBtn";

const App = () => {
    // 초기값을 넣어주었다. useState(''); 해도 무방;
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: "React 공부하기",
            detail: "React 기초에 대하여",
            isDone: false,
        },
        {
            id: 2,
            title: "JS 공부하기",
            detail: "문제 풀기 & 복습",
            isDone: false,
        },
        {
            id: 3,
            title: "러닝 40분",
            detail: "3:1 비율로 인터벌",
            isDone: false,
        },
    ]);

    // 제목과 세부내용 각 input값에 들어가게 될 useState를 선언해준다;
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    // 초기값 tabs 이후에 추가되는 tabs을 만들어줄 함수를 선언해준다;
    const addHandler = () => {
        if (title === "" || detail === "") {
            alert("입력란을 채워 주세요.");
            return;
        }
        // id는 기존 tabs의 길이에 +1 씩 더해주기;
        // isDone : false는 초기값으로 지정;
        const newTab = {
            id: tabs.length + 1,
            title: title,
            detail: detail,
            isDone: false,
        };
        // 기존 tabs(...스프레드 배열) 뒤에 새로 들어갈 newTab 추가
        setTabs([...tabs, newTab]);

        // 추가된 후 input의 내부는 비워주기 ("");
        setTitle("");
        setDetail("");
    };
    // delete 버튼 함수 선언해주기;
    // 다른 이름으로 새로운 선언을 해줘야 하는데 여러 이름으로 선언하다 보면 헷갈릴거 같아서 [2]만 붙였다;
    // tabs를 filter 해준다 //  (!==id) 는 id가 아닌 값만 필터해줘;
    // 변경된 Tabs / setTabs에 이 filterd된 선언을 넣어준다;
    // id에 해당하지 않는 값만 남긴 결과를 보여준다;
    const deleBtn = (id) => {
        const newTabs2 = tabs.filter((tab) => tab.id !== id);
        setTabs(newTabs2);
    };

    // ** on & off 할 수 있는 토글 기능의 버튼(함수)을 선언한다;
    // tabs.find 는 : tab.id 와 일치하는 id를 찾아온다. 이 값을 선언한다;
    // 눌린 tab : id가 일치하면 if : isDone의 상태를 바꿔줘 (뒤집어줘); - 이 값은 빠지게 되고
    // 다시 변경된 Tabs를 저장;

    // if 문을 통해 새로 선언된 doneTab의 isDone의 값이
    // tabs에서 해당 id값이 다른 tab만 남겨준 값을 재차 변경된 setTabs에 ["...앞에 넣어주고","doneTab을 넣어준다" ]
    const toggleBtn = (id) => {
        const doneTab = tabs.find((tab) => tab.id === id);

        if (doneTab) {
            doneTab.isDone = !doneTab.isDone;
            const newDoneTab = tabs.filter((tab) => tab.id !== id);
            setTabs([...newDoneTab, doneTab]);
        }
    };
    // isDone의 상태에 따라 filterd 될 각 값들을 선언해준다.
    const workingOnTab = tabs.filter((tab) => !tab.isDone);
    const finallyDoneTab = tabs.filter((tab) => tab.isDone);

    return (
        <div className="appBody">
            <header className="appHeader">
                <h1>My ToDoList</h1>
                <h1>React</h1>
            </header>
            <div className="appInput">
                <label className="titleLable">제목</label>
                <input
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="detailLable">내용</label>
                <input
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                />
                <DefaultBtn onClick={addHandler}>등록하기</DefaultBtn>
            </div>
            <h1 style={{ padding: "10px 0 0 20px" }}>Working On 🔥</h1>
            <div className="tabBody">
                {workingOnTab.map((tab) => (
                    <Tabs
                        tab={tab}
                        key={tab.id}
                        deleBtn={deleBtn}
                        toggleBtn={toggleBtn}
                    />
                ))}
            </div>
            <h1 style={{ padding: "10px 0 0 20px" }}>Finally Done 🎉🎉</h1>
            <div className="doneBody">
                {finallyDoneTab.map((tab) => (
                    <Tabs
                        tab={tab}
                        key={tab.id}
                        deleBtn={deleBtn}
                        toggleBtn={toggleBtn}
                    />
                ))}
            </div>
        </div>
    );
};
export default App;
