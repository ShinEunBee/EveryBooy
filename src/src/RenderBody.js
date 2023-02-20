import React, {useState} from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import moment from "moment";
import BookList from "./BookList";

// React 컴포넌트 대문자로 시작할 것. 아니면 오류남 ㅠ
function RenderBody() {
    const [value, onChange] = useState(new Date()); 

    return (
        <div className="cal-mainBody">
            <Calendar onChange={onChange} value={value} />
            <div className="cal-body">
                {moment(value).format("YYYY년 MM월 DD일")}
            </div>
            <BookList className="cal-body" day={moment(value).format("YYYY년 MM월 DD일")}></BookList>
        </div>
    );
}


export default RenderBody;