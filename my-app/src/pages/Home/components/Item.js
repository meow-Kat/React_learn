// 傳入 list 內容
const Item = ({ id, note, date, time, deleteData , submittingStatus }) =>{

    submittingStatus.current = true

    function deleteItem() {
        deleteData(function (prev) {
            // 刪除指定的 id 使用 filter
            return prev.filter(item => item.id !== id)
        })
    }

    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
}

export default Item