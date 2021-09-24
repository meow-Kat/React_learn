import { useState } from "react"
const edit = (add) =>{

    const [note, setNote] = useState('')
    function noteChange(e) {
        setNote(e.target.value)
    }
    function addItem() {
        add(function () {
            
        })
    }


    return <div>
        <input type="text" value={note} onChange={noteChange} />
        <button className="add" onClick={addItem}>新增</button>
    </div>
}

export default edit