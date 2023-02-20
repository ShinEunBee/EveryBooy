import React , {useState, useRef} from "react";

const BookList = (props) => {

        const [text, setText] = useState('');
        const [lists, setLists] = useState([]);
        const [nextId, setNextId] = useState(0);
        const inputName = useRef(null);

        const onChange = (e) => {
            setText(e.target.value);
        };

        const submit = (e) => {
            e.preventDefault();
            const about_list = lists.concat({
                id : nextId,
                text : text,
            });
            setNextId(nextId+1);

            setLists(about_list);
            setText('');
        };

        const input_list = lists.map((list) => (
            list.text
        ));

        localStorage.setItem('list', input_list);
        const list = localStorage.getItem('list');

        return (
          <div>
            <form onSubmit={submit}>
                <h2>책 제목 : </h2>
                <input
                    name="list"
                    type="text"
                    placeholder="입력 ..."
                    value={text}
                    onChange={onChange}
                    ref={inputName} />
                    <button type="submit" className="btn_style">확인</button>
            </form>
            <hr />
            <h2>{props.day} 에 {input_list.length} 권의 책을 읽었어요.</h2>
            <h2>{list}</h2>
          </div>  
        );

}

export default BookList;