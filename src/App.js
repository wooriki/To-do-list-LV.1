import React from "react";
import { useState } from "react";
import "./Tab.css";

import DefaultBtn from "./components/DefaultBtn";
import Tabs from "./components/Tabs";

const App = () => {
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
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    const addHandler = () => {
        const newTab = {
            id: tabs.length + 1,
            title: title,
            detail: detail,
            isDone: false,
        };

        // 기존 tabs 뒤에 new탭 추가
        setTabs([...tabs, newTab]);

        // 입력값 초기화 ''
        setTitle("");
        setDetail("");
    };

    const deleBtn = (id) => {
        const newTabs2 = tabs.filter((tab) => tab.id !== id);
        setTabs(newTabs2);
    };

    const toggleBtn = (id) => {
        const doneTab = tabs.find((tab) => tab.id === id);

        if (doneTab) {
            doneTab.isDone = !doneTab.isDone;
            const newDoneTab = tabs.filter((tab) => tab.id !== id);
            setTabs([...newDoneTab, doneTab]);
        }
    };

    const workingOnTab = tabs.filter((tab) => !tab.isDone);
    const finallyDoneTab = tabs.filter((tab) => tab.isDone);

    return (
        <div className="app-body">
            <div className="app-header">
                <h1>My ToDoList</h1>
                <h1>React</h1>
            </div>
            <div className="app-input">
                <label className="title-lable">제목</label>
                <input
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="detail-lable">내용</label>
                <input
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                />
                <DefaultBtn onClick={addHandler}>등록하기</DefaultBtn>
            </div>
            <h1 style={{ padding: "10px 0 0 20px" }}>Working On 🔥</h1>
            <div className="tab-body">
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
            <div className="done-body">
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
