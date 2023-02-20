import React , {useState, useRef} from "react";

const BookList = () => {

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
            <li
            key = {list.id}>
                {list.text}
            </li>
        ));

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
            <ul>{input_list}</ul>
            <h2>{input_list.length} 권의 책을 읽었어요.</h2>
          </div>  
        );

}

export default BookList;