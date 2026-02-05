import React, { useState } from 'react'
import Button from '../components/Button'

export default function FormBuilder({ schema, onSubmit }:{
  schema: any,
  onSubmit: (data:any)=>void
}){
  const init = {}
  schema.fields.forEach((f:any)=> init[f.name] = f.default || '')
  const [data, setData] = useState(init)

  function change(name:string, value:any){
    setData(d => ({...d, [name]: value}))
  }

  return (
    <form onSubmit={(e)=>{ e.preventDefault(); onSubmit(data) }}>
      <h3 className="font-semibold text-xl text-text-heading mb-4">{schema.title}</h3>
      {schema.fields.map((f:any)=>(
        <div key={f.name} className="mb-4">
          <label htmlFor={f.name} className="block text-sm font-medium text-text-DEFAULT mb-1">{f.label}</label>
          <input
            id={f.name}
            name={f.name}
            defaultValue={f.default || ''}
            readOnly={f.readOnly}
            onChange={(e)=> change(f.name, e.target.value)}
            type={f.type || 'text'}
            className="block w-full p-2 border border-secondary-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-DEFAULT text-base"
          />
        </div>
      ))}
      <Button type="submit" className="mt-6">
        Submit
      </Button>
    </form>
  )
}
