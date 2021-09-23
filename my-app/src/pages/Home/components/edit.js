// 匯入 useState 並且在原件上各自綁定 useState
import { useState } from "react" 
// 引入 uuid
import { v4 } from "uuid"

const Edit = ({ add }) =>{

    // 使用 input 做的事情
    // 初始值為空字串，透過這邊的 note 取得最後結果 新增到下面的list一樣
    // 記事input
    const [note, setNote] = useState('')
    // noteChange 會 set note
    function noteChange(e) {
        setNote(e.target.value)
    }

    // 日期 input
    const [date, setDate] = useState('')
    function dateChange(e) {
        setDate(e.target.value)
    }

    // 時間 input
    const [time, setTime] = useState('')
    function timeChange(e) {
        setTime(e.target.value)
    }

    console.log(time);
        

    function addItem() {
        // index 透過 setData 傳元件，按下新增跑出
        // 這邊要使用物件的形式
        add( function (prevData) {
            return[...prevData,{
                id:v4(),
                note, date, time
            }]
        })
    }

    return <div>
        <h1>備忘錄</h1>
        <p>記事：</p>
        {/* 設定變化的時候要發生事情 雙向綁定的概念↓    這邊的 note 又會把值給帶進去*/}
        <input type="text" value={note} onChange={noteChange}/>
        <p>日期：</p>
        <input type="date" value={date} onChange={dateChange}/>
        <p>時間：</p>
        <input type="time" value={time} onChange={timeChange}/>
        <button onClick={addItem} className="add">新增</button>
    </div>
}

// 把 function export 出去
export default Edit