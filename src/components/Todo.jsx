const Todo = ({ fd, delHandler, passHandler }) => {
    return (
        <div className="div-content">
            <div key={fd.id} className="div-style">
                <h1>{fd.title}</h1>
                <p>{fd.details}</p>
                <div className="btns">
                    <button className="red" onClick={() => delHandler(fd.id)}>
                        삭제
                    </button>
                    <button className="blue" onClick={() => passHandler(fd.id)}>
                        완료
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
