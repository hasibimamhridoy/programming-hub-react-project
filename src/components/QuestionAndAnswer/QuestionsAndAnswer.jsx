import React from "react";

const QuestionsAndAnswer = () => {
  return (
    <div className="lg:px-20 px-3">
      <h1 className="lg:text-5xl font-semibold italic text-center lg:mt-10 lg:mb-16 my-5">
        Questions And Answer
      </h1>

      <div className="props-vs-state">
        <h1 className="text-lg lg:text-3xl text-center font-bold my-10">
          Props Vs State
        </h1>
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
        <h1 className="text-lg lg:text-3xl my-10 text-center font-bold">
          How does useState work?
        </h1>
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
              className="lg:h-96 mt-5"
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
              1. Whenever we need to make use of side effects in our
              application, useEffect is the way to go.
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
              Suppose we can show the data if the user close the browser and
              again visit our site. In this case useEffect role is very
              important. We can easyli deploy the functionality useing
              useEffect.
            </p>

            <p>
              5. On the most important role in useEffect is Suppose we need the
              re-render the useEffect when the specific state change or any
              value change . we easily we can declare it useEffect dependency.
              Like we have a state and we want if the state value has change
              then the page re-render so user can display the dynamic value
            </p>
          </div>

          <br />
        </div>
      </div>

      <div className="reactWork">
        <div>
          <h1 className="text-lg lg:text-3xl my-10 text-center font-bold">
            How Does React work?
          </h1>

          <img
            className="w-full lg:h-96 h-72"
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />

          <p className="mt-5">
            React is a JavaScript library for building user interfaces. It uses
            a virtual DOM to efficiently render components and update the UI in
            response to changes in state.
          </p>

          <div className="space-y-4 mt-4">
            <p className="font-bold">There are some core concept in react:</p>

            <p>1. Components</p>
            <p>2. State</p>
            <p>3. JSX</p>
            <p>4. React hooks like useEffect,useState</p>
            <p>5. Event Handaling in react</p>
            <p>6. Props</p>
            <p>7. Emport Export</p>
            <p>8. Virtual Dom</p>
            <p>9. Rendering</p>
          </div>

          <div className="mt-5">
            <h1>
              <span className="font-bold"> Components: </span>
              React is based on the idea of components, which are reusable
              building blocks for user interfaces. A component can be a simple
              button or a complex form, and it can contain other components.
            </h1>
            <h1 className="mt-5">
              <span className="font-bold"> Jsx: </span>
            </h1>
            React uses a syntax extension called JSX, which allows you to write
            HTML-like code in your JavaScript. JSX allows you to define the
            structure and appearance of your components in a declarative way.
            <h1 className="font-bold mt-5">Rules Of jsx :</h1>
            <div className="space-y-3">
              <p className="mt-5">
                1. JSX return onlu one element like one h1. But if we need to
                multiple element then we can wrap it and div container or react
                has provide <></> react fragment so we can easily wrap and
                return multiple element.
              </p>
              <p>
                2. The jsx syntex is like html but we cant tell it is 100% html
                tag. Some of the html tag doest have any closeing tag but in the
                jsx we can close the every element to closeing tag.
              </p>
              <p>3. A react component name must be Capitel lattter</p>
              <p>
                4. If we need to any valid JavaScript code in jsx then this code
                wrap in curly brackets
              </p>
            </div>
            <h1>
              <span className="font-bold"> State: </span>
              <p>
                On the Other hand,state is used to manage data within a
                component. It is
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
            </h1>
            <h1 className="font-bold mt-5">Vitual Dom :</h1>
            <p>
              React maintains a virtual DOM which is a lightweight copy of the
              actual DOM. The virtual DOM allows React to efficiently update the
              UI in response to changes in state. When a component's state
              changes reeact calculates the difference between the virtual DOM
              and the actual DOM and updates only the necessary parts of the UI.
            </p>
            <h1 className="font-bold mt-5">Rendering :</h1>
            <p>
              When we define a component in React, we create a function that
              returns a JSX expression. React takes this function and "renders"
              it into the DOM, creating a tree of elements that represents the
              component hierarchy.
            </p>
          </div>
          <br />

          <p className="mb-10">
            Finnaly we can say that react provides a powerful and flexible way
            to build user interfaces in JavaScript. By using a declarative
            syntax a virtual DOM, and a rich set of lifecycle methods and hooks,
            React allows you to create complex UIs that are easy to reason about
            and maintain.if we say that how react works internally then can say
            react works by useing a vitual dom to eficcianttly ender components
            and update the UI in response to changes in state.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAnswer;
