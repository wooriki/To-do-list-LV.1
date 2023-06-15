// DefaultBtn 컴포넌트를 불러온다.
import DefaultBtn from "./DefaultBtn";

// Tabs 안에 들어갈 내용들을 props로 받아오고 재선언 해준다.
function Tabs(props) {
    const { tab, deleBtn, toggleBtn } = props;
    const { id, title, detail, isDone } = tab;

    // 삼항연산자를 사용했다;
    // className isDone 값이 참이면 complete 아니면 ""빈값 반환
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
