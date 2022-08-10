import React, { useRef, useState } from "react";
import Resume from "./Resume";

export default function Createresume() {
  const [data, setData] = useState({});

  const x1 = useRef();
  const x2 = useRef();
  const x3 = useRef();
  const x4 = useRef();
  const x5 = useRef();
  const x6 = useRef();
  const x7 = useRef();
  const x8 = useRef();
  const x9 = useRef();
  const x10 = useRef();
  const x11 = useRef();
  const x12 = useRef();
  const x13 = useRef();
  const x14 = useRef();


  const myfunc = (ev) => {
    ev.preventDefault();
    // console.log("hello")

    const obj = {
      name: x1.current.value,

      Lastname: x2.current.value,

      Gmail: x3.current.value,

      Contact: x4.current.value,

      Address: x5.current.value,

      DOB: x6.current.value,

      Education: x7.current.value,

      Skills: x8.current.value,

      MaritalStatus: x9.current.value,

      Hobbies: x10.current.value,

      Project: x11.current.value,

      Language: x12.current.value,

      Designation: x13.current.value,

      Photo: x14.current.value,

    };
    window.localStorage.setItem("obj", JSON.stringify(obj));
    console.log(obj);
    setData(obj);
    window.location.assign("/resume");
  };

  return (
    <div className="container">
      <div className="box-1">
        <form className="form">
        
          <div class="mb-3">
            <label
              for="formGroupExampleInput"
              class="form-label"
              className="label-1"
            >
              {" "}
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="First Name"
              ref={x1}
            />
          </div>

          <div class="mb-3">
            <label
              for="formGroupExampleInput2"
              class="form-label"
              className="label-2"
            >
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Last Name"
              ref={x2}
            />
          </div>
          <div class="mb-3">
            <label
              for="formGroupExampleInput2"
              class="form-label"
              className="label-2"
            >
              {" "}
              <i class="fa-regular fa-at"></i>Gmail
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Gmail"
              ref={x3}
            />
          </div>

          <div class="mb-3">
            <label
              for="formGroupExampleInput2"
              class="form-label"
              className="label-2">

              <i class="fa-solid fa-phone"></i> Contact no
            </label>
            <input
              type="tel"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Contact"
              ref={x4}
              />
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              className="label-2"
            >
              <i class="fa-solid fa-location-dot"></i> Address
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              className="textarea"
              placeholder="Address"
              ref={x5}
            ></textarea>
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              className="label-2"
            >
              Date of birth
            </label>
            <input
              type="Date"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="DOB"
              ref={x6}
            />
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              className="label-2"
            >
              {" "}
              <i class="fa-solid fa-building-columns"></i>Education
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              className="textarea"
              placeholder="Education"
              ref={x7}
            ></textarea>
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              className="label-2"
            >
              Technical Skills
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              className="textarea"
              placeholder="Skills"
              ref={x8}
            ></textarea>
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              className="label-2"
            >
              Marital staus
            </label>
            <select
              class="form-select"
              id="inputGroupSelect01"
              ref={x9}
              placeholder="MaritalStatus"
            >
              <option selected> select</option>
              <option>YES</option>
              <option>No</option>
            </select>
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              className="label-2"
            >
              Hobbies
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              className="textarea"
              placeholder="Hobbies"
              ref={x10}
            ></textarea>
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              className="label-2"
            >
              Project
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              className="textarea"
              placeholder="Project"
              ref={x11}
            ></textarea>
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              className="label-2"
            >
              Language
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              className="textarea"
              placeholder="Languages"
              ref={x12}
            ></textarea>
          </div>
          <div class="mb-3">
            <label
              for="formGroupExampleInput2"
              class="form-label"
              className="label-2"
            >
              Designation
            </label>
            <input
              type="tel"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Designation"
              ref={x13}
            />
              <div class="mb-3">
            <label for="formFile" class="form-label">
            Photo
            </label>
            <input class="form-control" type="file" id="formFile" ref={x14}/>
          </div>

          </div>

          <p>
            <button
              class="btn btn-danger"
              onClick={(ev) => {
                myfunc(ev);
              }}
            >
              Submit
            </button>
          </p>

          {/* <Resume /> */}
        </form>
      </div>
    </div>
  );
}
