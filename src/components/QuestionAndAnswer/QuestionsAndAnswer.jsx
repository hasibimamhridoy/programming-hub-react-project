import React from "react";

const QuestionsAndAnswer = () => {
  return (
    <div className="lg:px-20 px-3">
      <h1 className="lg:text-5xl font-semibold italic text-center lg:mt-10 lg:mb-16 my-5">
        Questions And Answer
      </h1>


      <div className="props-vs-state">
      <div>
        <img
          className="w-full lg:h-96 h-72"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gCfSTMaxWyM_uiej4QGKeg.jpeg"
          alt=""
        />
        <h1 className="text-lg lg:text-3xl my-5">Props Vs State</h1>

        <p>
          In React, both props and state are used to manage the data that is
          displayed in a component.
        </p>

        <br />

        <p>
          Props are known as properties it can be used to pass data from one
          component to another. Prop
          <span className="bg-red-500 lg:p-1 rounded-lg text-white font-bold">
            cannot be modified
          </span>
          ,
          <span className="bg-green-500 lg:p-1 rounded-lg text-white font-bold">
            read-only
          </span>
          , and
          <span className="bg-red-500 lg:p-1 rounded-lg text-white font-bold">
            Immutable.
          </span>
        </p>

        <br />
        <p>
          Props is a short for
          <span className="bg-red-500 lg:p-1 rounded-lg text-white font-bold">
            "properties"
          </span>
          .Props are passed down from a parent component to a child
          component.Props are a read-only. Read-only means we cant change their
          value in child components. Thats why we can called this is a immutable
          and also we cant modified. Props is a valid
          <span className="bg-green-500 lg:p-1 rounded-lg text-white font-bold">
            JavaScript Object.
          </span>
          It stores the value of attributes of a tag and work similar to the
          HTML attributes.It is similar to function arguments and can be passed
          to the component the same way as
          <span className="bg-green-500 lg:p-1 rounded-lg text-white font-bold">
            arguments passed in a function.
          </span>
        </p>
      </div>
      <h1 className="lg:text-2xl mt-5"> Props Driling Example in digram:</h1>
      <div className="">
        <img className="h-96" src="prop-drilling.webp" alt="" />
      </div>

      <p>
        On the Other hand,state is used to manage data within a component. It is
        <span className="bg-green-500 lg:p-1 rounded-lg text-white font-bold">
          {" "}
          mutable{" "}
        </span>{" "}
        and can be modified by the component itself. When the state of a
        component changes,
        <span className="bg-green-500 lg:p-1 rounded-lg text-white font-bold">
          {" "}
          React will re-render the component to update the view{" "}
        </span>
        <h1 className="lg:text-2xl mt-5">Example State:</h1>
        <img className="h-96" src="state.png" alt="" />
      </p>

      <h1 className="lg:text-2xl mt-5"> Here are some key differences between props and state:</h1>
    
    <ul className="mt-5 mb-5">
      <p>Props are passed down from a parent component to a child component, whereas state is managed within a component itself.
    Props are read-only and cannot be modified by the child component, while state is mutable and can be modified within a component using setState() method. 
      Props flow downwards from parent to child components, whereas state flows upwards via events and callbacks.  </p>
    </ul>

      </div>



    </div>
  );
};

export default QuestionsAndAnswer;
