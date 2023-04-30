import React,{useState} from "react";


const App=() =>{
  const[users, setUser]=useState([]);
  const[isLoading,setLoading]=useState(false);
  const loadUsers=async()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  const response=await fetch ("https://reqres.in/api/users?page=1");
  const jsonResponse=await response.json();
  setUser(jsonResponse.data);
  };
  return(
    <div classname="App">
      <header>
        <h1>LGM VIP</h1>
        {isLoading ? "" : 
        (<button className="getUsers" onClick={loadUsers}>Get Data</button>)}
        {isLoading ? <div><br />
        <img style={{width:"100%", height:"500px"}} src="./images/loader.gif" /> </div>: ''
        }
      </header>
      
      <div className="container">
        {users.map(({id,email,first_name,last_name,avatar})=>(
          <div className="card">
            <img className="image" src={avatar} alt=""/><br />
            <div className="card_id" key={id}>ID: {id}</div>
            <h5
            className="card_title"
            key={id}>{`${first_name} ${last_name}`}</h5>
            <p className="text" key={id}> {email}</p><br />
          </div>  
        ))}
    </div>
    </div>
  );
}
export default App;