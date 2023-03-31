import React from "react";

const QuestionsAndAnswer = () => {
  return (
    <div className="lg:px-20 px-3">
      <h1 className="lg:text-5xl font-semibold italic text-center lg:mt-10 lg:mb-16 my-5">
        Questions And Answer
      </h1>

      <div className="props-vs-state">
      <h1 className="text-lg lg:text-3xl text-center font-bold my-10">Props Vs State</h1>
        <div>
          <img
            className="w-full lg:h-96 h-72"
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gCfSTMaxWyM_uiej4QGKeg.jpeg"
            alt=""
          />
        

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
            component.Props are a read-only. Read-only means we cant change
            their value in child components. Thats why we can called this is a
            immutable and also we cant modified. Props is a valid
            <span className="bg-green-500 lg:p-1 rounded-lg text-white font-bold">
              JavaScript Object.
            </span>
            It stores the value of attributes of a tag and work similar to the
            HTML attributes.It is similar to function arguments and can be
            passed to the component the same way as
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
          On the Other hand,state is used to manage data within a component. It
          is
          <span className="bg-green-500 lg:p-1 rounded-lg text-white font-bold">
            mutable
          </span>
          and can be modified by the component itself. When the state of a
          component changes,
          <span className="bg-green-500 lg:p-1 rounded-lg text-white font-bold">
            React will re-render the component to update the view
          </span>
          <h1 className="lg:text-2xl mt-5">Example State:</h1>
          <img className="h-96" src="state.png" alt="" />
        </p>

        <h1 className="lg:text-2xl mt-5">
          Here are some key differences between props and state:
        </h1>

        <ul className="mt-5 mb-5">
          <p>
            Props are passed down from a parent component to a child component,
            whereas state is managed within a component itself. Props are
            read-only and cannot be modified by the child component, while state
            is mutable and can be modified within a component using setState()
            method. Props flow downwards from parent to child components,
            whereas state flows upwards via events and callbacks.
          </p>
        </ul>
      </div>

      <div className="Use-state">
      <h1 className="text-lg lg:text-3xl my-10 text-center font-bold">How does useState work?</h1>
        <div>
          <img
            className="w-full lg:h-96 h-72"
            src="https://daveceddia.com/images/useState-hook.png"
            alt=""
          />
    

          <p>
            In React, the useState hook is a built-in function that allows
            functional components to have state variables. It provides a way to
            declare state variables and update their values within a functional
            component.
            <h1 className="text-lg lg:text-3xl my-5">
              Here how useState work externally:
            </h1>
            <p>
              At first import the useState in our component. Then we can declier
              a state variable. Likhe const [count,setCount] = useState(0). here
              useState return a array. and their is two peramiter. at first the
              initial value of useState function . at second one is a function
              which can be change the initial value .
            </p>
            <h1 className="text-lg lg:text-3xl my-5">
              Here how useState work internally:
            </h1>
            <p>
              Internally, the useState hook in React uses a concept called
              "closure" to manage state.
            </p>
            <h1 className="text-lg lg:text-3xl my-5">
              Example how useState Internally work.
            </h1>
            <p>
              First of all react create a useState function. And this fuction
              take a initialState value. Like useState(0). and then they decliar
              e variable like state.and set the state value == initialState. So
              the state value is now initial value.
              <br />
              <br />
              and react also declare a setState function. And setState function
              get the newState peramiter. and aslo set the state == newState
              peramiter and re-render it.
              <br />
            </p>
            <img
              className="h-96"
              src="https://media.graphassets.com/AyJLadrgSFGtKmaeZuvU"
              alt=""
            />
          </p>

          <br />
        </div>
      </div>

      <div className="useEffect">
        <div>
          <h1 className="text-lg lg:text-3xl my-10 text-center font-bold">
            Purpose of useEffect other than fetching data.?
          </h1>

          <img
            className="w-full lg:h-96 h-72"
            src="https://daveceddia.com/images/useEffect-hook.png"
            alt=""
          />

          <p className="mt-5">
            The useEffect hook in React is primarily used for fetching data from
            APIs or updating the DOM after a component renders. However, it has
            other use cases as well.
          </p>

         <div className="space-y-4 mt-4">
         <p>
            1. Whenever we need to make use of side effects in our application,
            useEffect is the way to go.
          </p>

          <p>
            2. We can use useEffect to add event listeners to the window or
            document objects.
          </p>

          <p>
            3. We can use useEffect to set up timers that trigger a function
            after a certain amount of time has elapsed.
          </p>
          <p>
            4. We can use useEffect to read or write data to local storage.
            Suppose we can show the data if the user close the browser and again visit our site.
            In this case useEffect role is very important. We can easyli deploy the functionality useing useEffect.
          </p>

          <p>
            5. On the most important role in useEffect is Suppose we need the re-render the useEffect when the specific state change or any value change . we easily we can declare it useEffect dependency. Like we have a state and we want if the state value has change then the page re-render so user can display the dynamic value
          </p>
         </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAnswer;
