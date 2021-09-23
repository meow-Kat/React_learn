// 引入 item
import Item from "./Item"

// 用陣列去做很多個 item 在裡面秀
// const arr = [ 'meow', 'cute' , 'cat']

const List = ({ listData, deleteData }) =>{
    console.log('listData',listData);
    return <div className="list">
        {
            // listData.map((item,index) => <Item key={index}/>)
            // 使用 map 要加 key，為了效能最佳化，需要唯一值，不能用index，東西刪除後會更新
            listData.map((item) => {
                const { note, date, time, id } = item
                // 左邊的 note 取值要拿的東西 右邊的 note 是上面那行的 note
                return <Item key={id} id={id} note={note} date={date} time={time} deleteData={deleteData}/>
            })
        }

        {/* 可以這樣試看看
        {
            arr.map(item => <Item />)
        }
        {
            arr.map(item => <div>{item}</div>)
        } */}
    </div>
}

// 把 function export 出去
export default List