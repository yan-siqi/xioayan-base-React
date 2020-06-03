import React, { useState } from "react";
import PubSub from "pubsub-js";
export default function Search() {
 /*  state = {
    searchName: "",
  }; */
  const[searchName,setSearchName]=useState('')
  const handleChange = (e) => {
/*     this.setState({
      searchName: e.target.value.trim(),
    }); */
    setSearchName(e.target.value.trim())
  };
  const handleClick = () => {
    /* const { searchName } = this.state; */
    if (searchName) {
      PubSub.publish("SEARCHNAME", searchName);
    }
  };
 
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </section>
    );
}
