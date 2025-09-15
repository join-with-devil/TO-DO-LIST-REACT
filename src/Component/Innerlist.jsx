
import React from 'react'

const Innerlist = ({name,remove,done}) => {
  return (
    <>
        <div className='center'>
            <div className='t1'>
                <section>
                    <p>{name}</p>
                    <span>
                        <button className='btn1' onClick={()=>{done(name)}}>Over</button>
                        <button className='btn2' onClick={()=>{remove(name)}}>POP</button>
                    </span>
                </section>
            </div>
            <hr />
            
        </div>
    
    </>
  )
}

export default Innerlist









