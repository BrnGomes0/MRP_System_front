import React from "react"
import Header from "./components/Header/Header"
import CreateAItem from "./components/Title/CreateAItem"
import Table from "./components/Table/Table"
import ButtonT from "./components/Button/Button"


function App() {
  return (
    <>
    <Header/>
    <br />
        <div className="mt-[60px]">
            <div className= "ml-[620px]">
                <CreateAItem title="Create a Item" style={{ fontSize: "40px", fontWeight: "bold" }}/>
            </div>
            <Table/>
        </div>

        <div className="ml-[710px] mt-[15px]">
            <ButtonT title="Create"/>
        </div>
      </>
  )
}

export default App
