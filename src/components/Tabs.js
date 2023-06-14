import DefaultBtn from "./DefaultBtn";

function Tabs(props) {
    const { tab, deleBtn, toggleBtn } = props;
    const { id, title, detail, isDone } = tab;

    return (
        <div className={`user-tab ${isDone ? "complete" : ""}`}>
            <div className="tab-title">{title}</div>
            <div className="tab-detail">{detail}</div>
            <div className="btns">
                <DefaultBtn className="redBtn" onClick={() => deleBtn(id)}>
                    삭제
                </DefaultBtn>
                <DefaultBtn className="blueBtn" onClick={() => toggleBtn(id)}>
                    {isDone ? "취소" : "완료"}
                </DefaultBtn>
            </div>
        </div>
    );
}

export default Tabs;
