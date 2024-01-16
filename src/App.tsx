import { useState } from 'react'

import './App.css'


function App() {
  const [url,setUrl]=useState()
  const [shortUrl,setShortURL]=useState(null)
   const handleChange=((e:any)=>{
    setUrl(e.target.value)

  })
  console.log(url,"tt")
const handleSubmit=(async (e)=>{
  e.preventDefault()
  const url = 'https://url-shortener23.p.rapidapi.com/shorten';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'fbce2539fcmsh9ab4fcbb06ef3d5p10f572jsn1136fa0a8f10',
		'X-RapidAPI-Host': 'url-shortener23.p.rapidapi.com'
	},
	// body: {
	// 	url: 'https://www.google.com',
	// 	alias: 'google123'
	// }
  body: JSON.stringify({
    url: 'https://www.google.com',
    alias: 'google123',
  }),

};

try {
	const response = await fetch(url, options);
  const result = await response.text();
  setShortURL(result)
	
	
} catch (error) {
	console.error(error);
}
  

})


  return (
    <>
      <div  className='container'>
        <div className='left' >
          <h2>Vrit URL Shorter</h2>
        </div>
        <div className="form-container">
      <h2 className="form-title">URL shortner form</h2>
      <form onSubmit={handleSubmit} className="custom-form">
      
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            URL
          </label>
          {url}
          <input
            type="text"
            className="form-input"
            id="url"
            name="url"
            value={url}
           onChange={handleChange}
         
            required
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      <div style={{
        display:"flex",
        justifyContent:"",
        flexDirection:"column",
        gap:"2px"
        
      }}>
        <h3>Desired Url</h3>
        <div>{shortUrl}</div>
   

      </div>
    </div>
 
      
       
      </div>
     
    </>
  )
}

export default App
