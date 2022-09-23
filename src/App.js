import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import dataReducer  from './reducers/addData';
import { add , Del } from './actions/index';

import { useEffect } from 'react';

function App() {
  
  const selector = useSelector(state=>state.dataList)

 

  const dis = useDispatch()

  const addUser = (event)=>{
    event.preventDefault()
    let t = {
      name : event.target.name.value,
      address : event.target.address.value
    }

    dis(add(t))
  }

  useEffect(()=>{
    console.log(selector)
  })


  
  
  
  return (
    <div className="App">
      <div onSubmit={addUser}>
        <h1>Add Contact</h1>
        <form className='form'>
          <div>
            <h5>Name:</h5>
            <input required type='text' name='name' />
          </div>
          <div>
            <h5>Address:</h5>
            <input required type='text' name='address' />
          </div>
          <div>
            <h5>City:</h5>
            <input required type='text' name='city' />
          </div>
          <div>
            <h5>Phone:</h5>
            <input required type='tel' name='phone' />
          </div>
          <div>
            <h5>Email:</h5>
            <input required type='email' name='email' />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className='list'>
        <h1>Contact List </h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
        {
          selector.map((item,i)=>
            <tr key={JSON.stringify(item + i)}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td><button onClick={()=>dis({type : 'delete' , payload: i})}>DELETE</button></td>
            </tr>
          )
        }
        </tbody></table>
      </div>
    </div>
  );
}

export default App;
