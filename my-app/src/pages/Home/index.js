//       新增狀態               唯一的值
import { useState , useEffect , useRef} from "react"
// 把路由匯進來
import { API_GET_DATA } from "../../global/constants"

// 引入剛剛寫好的 2 個元件
import Edit from "./components/Edit"
import List from "./components/List"
import './index.css'

// 補充更簡潔的方式 ( 這個接在寫完路由匯進來後 )，這樣是一個 promise 包裝，和下面fetch一樣效果，把 setData 放進去
async function fetchData( setData ) {
    const res = await fetch(API_GET_DATA)
    // 拿到後解構 await 等待資料
    const { data } = await res.json()
    setData (data)
    // 只要 data 有變動，透過 useEffect post 資料
}

async function fetchSetData( data ) {
    await fetch(API_GET_DATA,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({ data })
    })
}


// 可以這樣寫 CSS 用物件方式寫 ，除了這個方法可以去查 style component
const app = {
    color:'red'
}

// 這種方式加入
/*  return <div style={app}>
        <Edit />
        <List />
    </div>
*/

// 寫一個組件，宣告一個 function
const Home = () =>{
    // let a = 100
    // 更新狀態要這樣寫
    const [a , setA] = useState(100)
    function plus() {
        // setA( a + 200) 一般是這樣寫，可是這樣很母湯，因為react會把程式都整理，假設多行，結果會變得很奇怪
        
        // 執行上次結果
        setA(function (prev) {
            return prev + 200
        })
    }
    // 有 幾個項目所以畫面會秀幾個 
    const[data, setData] = useState([])
        
    // useRef 部分
    // 永遠維持在最新狀態，而不影響到渲染，因為上面那行會一直變動，我們需要一個標準值
    //                      保證永遠都是 ↓
    const submittingStatus = useRef(false)
    // 可4新增東西的時候要變成 true ( 要下放到新增按鈕，還有刪除按鈕 )

    
    // 這邊是有新增也要跟著動
    useEffect(() =>{
        // 如果84送資料的狀態
        if ( !submittingStatus.current ){
            return
        }
        // 這邊把 data 完成的東西變成 false 新增東西變成 true
        fetchSetData(data).then(data => submittingStatus.current = false)
    // data 變動後，把資料塞進去
    },[data])


    // useState 變化的時候執行 useEffect 的東西，畫面進來後一定會被執行一次
    useEffect(() =>{
        // // 綁定的事情
        // window.alert('新增成功')
        // // 做一個清除的功能，執行下次渲染之前要做的
        // return () =>{
        //     // 取消綁定
        // }

        // 這邊可以這樣執行 但上面的部分比較好
        // fetch('http://localhost:3000/posts/1')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
        // 之後再拿來用
        fetchData(setData)


    // 變成 [] 只會畫面出來時做一次，這邊會做完全清空，可4不能這樣所以要在上面另外用 useRef 保持資料存在
    },[])
    // ↑ 綁定上面的 data，只有 data 變了才會被執行，或改成 [data , data1] 只要這兩個其一有變化就執行
    
    // return HTML ( JSX )，都在裡面匯進去
    return <div className="app">
        {/*       ↓  因為不能有 - 所以要大駝峰寫 */}
        {a}<button onClick={plus}>++</button>


        {/* prop 方式傳遞     下放 submittingStatus 功能 */}
        <Edit add={setData} submittingStatus = {submittingStatus}/>
        {/* prop 方式傳遞     下放 submittingStatus 功能 */}
        <List listData={data} deleteData={setData} submittingStatus = {submittingStatus}/>
    </div>
}

// 把 function export 出去
export default Home