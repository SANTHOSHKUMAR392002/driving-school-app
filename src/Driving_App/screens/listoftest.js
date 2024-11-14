import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import List from "../../driving_app.json"
import "./listoftest.css"
const ListOfTest=()=>{

    const nav=useNavigate();

    const backtoinfo=()=>{
        nav("/rootlayout/info")
    }

    const test=(id)=>{
        nav(`/rootlayout/learn/listoftest/testi/${id}`)
    }

    return (
        <div className="listoftest-container">
            <div className="listoftest-section">
            <div className="listoftest-topbar">
                <div className="listoftest-icon" onClick={backtoinfo}><IoIosArrowBack/></div>
                <h1>List Of Test</h1>
            </div>
            <div className="listoftest-card-section">
                {
                    List.ListOfTest.map((a,i)=>{
                        return(
                            <div className="listoftest-cardi" key={i} onClick={()=>test(a.id)}>
                                <h3>Test {i+1}</h3>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default  ListOfTest;