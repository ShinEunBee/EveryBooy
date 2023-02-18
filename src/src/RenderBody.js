import React, {useState} from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment";


// React 컴포넌트 대문자로 시작할 것. 아니면 오류남 ㅠ
function RenderBody() {
    const [value, onChange] = useState(new Date()); 

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
            <div>
                {moment(value).format("YYYY년 MM월 DD일")}
            </div>
        </div>
    );
}


export default RenderBody;