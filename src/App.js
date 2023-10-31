import { useState,useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ListItems from './components/ListItems';
import TextSub from './components/TextSub';
import SearchIcon from './components/SearchIcon';
import ApiReq from './components/ApiReq';
import api from './api/posts'

function App() {
  const API_URL = 'http://localhost:3500/items'
  const [events, setEvents] = useState([])
  const [submitItem, setSubmitItem] = useState('')
  const [search, setSearch] = useState('')
  

  useEffect(()=>{
    const fetchItem = async ()=>{
      try{
        const response = await api.get('/items')
        setEvents(response.data)
        
      }catch(err){
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }else{
          console.log(`error: ${err.message}`)
        }
      }
      
    }
    fetchItem()
  },[])

  const addItem = async (item)=>{
    const id = events.length ? events[events.length-1].id +1 :1
    const addnew = {id,check:false,item}
    const list = [...events,addnew]
    setEvents(list)
  }
  const handlecheck = (id)=>{
    const val = events.map((newState)=>newState.id===id ? {...newState,check:!newState.check}:newState)
    setEvents(val)   
      
}
const handleDelete = (id)=>{
    const valNew = events.filter((del)=>del.id!==id)
    setEvents(valNew)
    
}
const handlesubmit = (e)=>{
  e.preventDefault()
   if(!submitItem)return;
   addItem(submitItem)
   setSubmitItem('')
   }
  return (
    <div className="App">
      <Header/>
      <TextSub
      submitItem = {submitItem}
      setSubmitItem = {setSubmitItem}
      handlesubmit = {handlesubmit}
      />
      <SearchIcon
      search = {search}
      setSearch = {setSearch}
      />
      <ListItems 
      events = {events.filter((item)=>(item.item).toLowerCase().includes(search.toLowerCase()))}
      handlecheck = {handlecheck}
      handleDelete = {handleDelete}
      />
      <Footer 
      length = {events.length}
      />
      
    </div>
  );
}

export default App;
