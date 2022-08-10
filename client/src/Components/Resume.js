import React from "react";
const datas = window.localStorage.getItem("obj");
const rData = JSON.parse(datas);
// let photopath = rData.Photo
// let photoname = photopath.split('fakepath\\')[1]
// import avatar from "../../../../../../oem/Downloads/CSM.jpg"
// console.log(photoname)

function Resume() {
  const datas = window.localStorage.getItem("obj");
  const rData = JSON.parse(datas);
  return (
    <div className="container">
      <div className="container" class="resume">
        <div className="row">
          <div className="col-xl-4">

             <p className="photo">
               {/* <img src={avatar} alt="image not found"/> */}
              </p>         

            <h1 className="head">CONTACT  ME  AT</h1>             
            <br />
            <pre>
              <i class="fa-solid fa-location-dot"></i>
              {rData.Address}
            </pre>
            <pre>
            <i class="fa-solid fa-phone"></i>{rData.Contact} <br/>
            </pre>
            <pre>

            <i class="fa-regular fa-at"></i>{rData.Gmail}<br />

            </pre>



            <h1 class="head">  <i class="fa-solid fa-building-columns"></i>Education </h1><br/>
             <pre>
              {rData.Education}
            </pre>
            <h1 className="head">Hobbies</h1>
                   <br/>
            <pre>
              {rData.Hobbies} <br/>
            </pre>
                <h1 className="head"> Language</h1>   <br/>
            <pre>
                {rData.Language}
            </pre>

          </div>
          
          <div className="col-xl-8">
            <pre className="name">
            {rData.name} {rData.Lastname}
            </pre>
            <hr/>
            <pre class="Des">
          {rData.Designation}<br/>
          </pre>
          <h1 className="head-3"> Project: </h1> <br/>
            <pre><br/>  
            {rData.Project}
            </pre> 
          <hr/>

            <h1 className="head-4">Technical Skills:</h1>
             
            <pre> <br/>
              {rData.Skills}
            </pre>

          </div>                                         
        </div>
      </div>
      <p>
  <button className="button" onClick={(ev)=>{myfunc1(ev)}}><i class="fa-solid fa-download"></i> Download</button>
</p>
    </div>
  );
}
function myfunc1(ev){
ev.preventDefault()

}



export default Resume;

{
  /* <div className='upper-1'>
          <div class='col-3'><h1 class="head">Contact- </h1>  </div>
          <div class="col-9" className='name'>
            {rData.name} {rData.Lastname}<br />
            <i class="fa-regular fa-at"></i>{rData.Gmail}<br />
            <i class="fa-solid fa-phone"></i>{rData.Contact} <br />
            <i class="fa-solid fa-location-dot"></i>{rData.Address}<br />

          </div>
          <hr />
        </div>
        <div className='upper-2'>
          <div className='col-3'><h1 class="head">Education-</h1></div>
          <div className='col-9'>{rData.Education}</div>
          <hr />
        </div>
        <div className='upper-3'>
          <div className='col-3'><h1 class="head">Skills-</h1></div>
          <div className='col-9'>{rData.Skills}</div>
          <hr />
        </div>
        <div className='upper-4'>
          <div class='col-3'><h1 class="head">Marital staus-</h1></div>
          <div class='col-9'>{rData.MaritalStatus}</div>
          <hr />
           
        </div>
        <div className='upper-5'>
          <div className='col-3'><h1 class="head">Hobbies-</h1></div>
          <div className='col-9'>{rData.Hobbies}</div>
          <hr />

        </div>
        <div className='upper-6'>
          <div className='col-3'><h1 class="head">Project-</h1></div>
          <div className='col-9'>{rData.Project}</div>
          <hr />

        </div>
        <div className='upper-7'>
          <div className='col-3'><h1 class="head">Languages-</h1></div>
          <div className='col-9'>{rData.Language}</div>
          <hr />

        </div> */
}

{
  /* <div className='col-1' class="one">
        <li> Name :-{rData.name} {rData.Lastname} </li>
        </div>

        <div className='col-1' class="Two">
        <li> Gmail:-  {rData.Gmail}</li>
        </div>

        <div className='col-1' class="Three">
        <li> Address:-{rData.Address} </li>
        </div>

        <div className='col-1' class="Four">
       
         <li>date of Birth:- {rData.DOB} </li>
        </div>

        <div className='col-1' class="Five">
        <li> Qualification:- {rData.Qualification} </li>
        </div>

        <div className='col-1' class="Six">
          <li> Skills:-{rData.Skills}  </li>

        </div>

        <div className='col-1' class="Seven">
        <li> MaritalStatus:-  {rData.MaritalStatus}</li>
        </div>
        <div className='col-1' class="Eight">
        
        <li> Hobbies:- {rData.Hobbies} </li>
        </div>
      */
}
