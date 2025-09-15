import React, { useEffect, useState } from 'react'
import Innerlist from './Innerlist'
import { jsxs } from 'react/jsx-runtime';

const Todolist = () => {

    const [list,setList]=useState(()=>{
        const saved=localStorage.getItem('todo-list');
        return saved ?JSON.parse(saved):["Reading task","Event task","Import note","Class note"];
    });

    const[user,setUser]=useState('');

    const[complete,setComplete]=useState(()=>{
        const saved=localStorage.getItem('todo-complete');
        return saved ? JSON.parse(saved):[] ;
    });

    useEffect(()=>{
        localStorage.setItem('todo-list',JSON.stringify(list))
    },[list])

    useEffect(()=>{
        localStorage.setItem('todo-complete',JSON.stringify(complete))
    },[complete])


    function inpt(e){
        let data=e.target.value
        // console.log(data);
        setUser(data)
    }
    function btn(){
        // console.log('User data',user);
        if(user==""){
            alert("There is not event !")
        }
        else{
            const loc = prev=>[...prev,user]
            setList(prev=>[...prev,user]);

        }
        setUser('')

    }
    // Removes a task from the main list
    function pop(del){
        let afterpop = list.filter(x => x != del);
        setList(afterpop);
    }

    // Removes a task from the completed list
    function popComplete(del){
        let afterpop = complete.filter(x => x != del);
        setComplete(afterpop);
    }
    function over(don){
       setComplete(prev=>[...prev,don])
       setList(prev=>list.filter(x=>x!==don))
           
    }
  return (
    <>
        <div className='main'>
            <div className='inner'>
                <div className='nav'>
                    <h2>To Do List</h2> 
                    <div className='filed'>
                        <input type="text" placeholder='Ceate the task' onChange={(e)=>{inpt(e)}} value={user}/>
                        <button onClick={()=>{btn()}}>ADD.</button>
                    </div>
                    <h1>List items</h1>           
                    
                    {
                        list.map((e,i)=>(
                            <Innerlist name={e} key={i} remove={pop} done={over}/>
                        ))
                    }
                    
                    <h1>Complete Task</h1>           
                    {
                        complete.map((e,i)=>(
                            <Innerlist name={e} key={i} remove={popComplete} done={over}/>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Todolist































// import React, { useState } from 'react'
// import Innerlist from './Innerlist'

// const Todolist = () => {
//     let[inpt,setInpt]=useState("");
//     let[list,setList]=useState(["readingbooks","Write note","Home work","Event note"]);
//     let[complete,setComplete]=useState([])

//     // Handles input field changes and updates the input state
//     function user_inp(e) {
//         let data = e.target.value;
//         setInpt(data);
//     }

//     // Adds the current input value to the list of tasks
//     function addbtn() {
//         setList(prev => [...prev, inpt]);
//         setInpt(""); // Clears the input field after adding the task
//     }

//     // Deletes a task from the list by filtering it out
//     function deleteitem(del) {
//         let afterpop = list.filter(x => x != del);
//         setList(afterpop);
//     }
    
//     // Marks a task as complete: moves it from the list to the complete array
//     function doneitem(don) {
//         setComplete(prev => [...prev, don]);
//         setList(prev => prev.filter(x => x !== don));
//     }

//     return (
//         <>
//             <div className='body'>
//                 <div className='inner'>
//                     <h2>To-Do-List</h2>
//                     <div className='search'>
//                         <input type="text" placeholder='ADD TASK' onChange={(e) => { user_inp(e) }} value={inpt} />
//                         <button onClick={() => { addbtn() }}>ADD</button>
//                     </div>
//                     <ul>
//                         <h3>list items</h3>
//                         {
//                             list.map((e, i) =>
//                                 <Innerlist content={e} key={i} pop={deleteitem} over={doneitem} />
//                             )
//                         }
//                     </ul>
//                     <ul>
//                         <h3>Complete task</h3>
//                         {
//                             complete.map((e, i) =>
//                                 <Innerlist content={e} key={i} pop={deleteitem} over={doneitem} />
//                             )
//                         }
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Todolist