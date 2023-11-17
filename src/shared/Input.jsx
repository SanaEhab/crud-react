import React from 'react'

export default function Input({id,name,value,type,title,handelData,customClass,errors}) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{title}</label>
        <input type={type} name={name} value={value} className={`form-control ${customClass}`} id={id} onChange={handelData}/>
        {errors[name] && <p className='text-danger'>{errors[name]}</p>}
    </div>
  )
}
