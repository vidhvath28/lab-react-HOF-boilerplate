import React, { Component } from "react";

class HighOrderFunctions extends Component{
  constructor(){
    super();
    this.state = {
      userData: [
          { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
          { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
          { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
          { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
          { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

      ]
  }
  }
  renderItems = () => {
    const data = this.state.userData;
    const prog1 = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return prog1;
};


renderUserType = () => {
  const data2 = this.state.userData;
  const prog2 = data2.filter((item)=>{
    return item.user_type==="Designer"

  }).map((item)=>(
    <div key={item.id}>
    <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>

        </div>

  ))
  return prog2



}

renderUserByJ = () => {
  const data2 = this.state.userData;
  const prog3 = data2.filter((item)=>{
    return item.name[0]==="J"

  }).map((item)=>(
    <div key={item.id}>
    <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>

        </div>

  ))
  return prog3



}

getDataByAge = () => {
  const data3 = this.state.userData;
  const prog4 = data3.filter((item)=>{
    return (item.age>28 && item.age<=50)
      
    
    }).map((item)=>(
    <div key={item.id}>
    <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>

        </div>

  ))
  return prog4



}
designerExperience = () => {
  const data3 = this.state.userData;
  const lastProg = data3.reduce((count,item)=>{
    if(item.user_type==="Designer"){
      count+=item.years
    }
    return count
  },0)
  return lastProg



}


render() {
    return (
    
      <>
      <div>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderItems()} </ul>
        </div>
        </div>

        <div>
          <h1>Progression 2</h1>
          <div className="display-box">
            <ul>{this.renderUserType()}</ul>
          </div>
        </div>
        <div>
          <h1>Names starting with J</h1>
          <div className="display-box">
            <ul>{this.renderUserByJ()}</ul>
          </div>
        </div>
        <div>
          <h1>Data by Age</h1>
          <div className="display-box">
            <ul>{this.getDataByAge()}</ul>
          </div>
        </div>
        <div>
          <h1>
            Designer Exprience
          </h1>
          <div className="display-box">
            <ul>{this.designerExperience()}</ul>
          </div>
        </div>
        </>

    )}

}
export default HighOrderFunctions