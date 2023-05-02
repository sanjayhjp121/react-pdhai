// 2. Using api fetch the data.

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>
//           <h2>{item.title}</h2>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;




// 3. Create a react form to make a new item in the table.

// import React, { useState } from 'react';

// function AddItemForm({ addItem }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addItem({ title, description });
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input
//           type="text"
//           value={title}
//           onChange={(event) => setTitle(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Description:
//         <textarea
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Add Item</button>
//     </form>
//   );
// }

// function Table({ items }) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Description</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items.map((item, index) => (
//           <tr key={index}>
//             <td>{item.title}</td>
//             <td>{item.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// function App() {
//   const [items, setItems] = useState([]);

//   const addItem = (item) => {
//     setItems([...items, item]);
//   };

//   return (
//     <div>
//       <AddItemForm addItem={addItem} />
//       <Table items={items} />
//     </div>
//   );
// }

// export default App;




// 4.  Display the slide show of image.

// import React from 'react';
// import Slideshow from './Slideshow';

// function App() {
//   return (
//     <div>
//       <h1>Slideshow</h1>
//       <Slideshow />
//     </div>
//   );
// }

// export default App;



// 5. Display the shopping cart before the online delivery (Add to cart functionality}

// import React, { useState } from 'react';
// import Product from './Product';
// import Cart from './Cart';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <div>
//       <h1>My Online Store</h1>
//       <Product
//         product={{
//           id: 1,
//           name: 'Product 1',
//           price: 10.99,
//           imageUrl: 'https://via.placeholder.com/150',
//         }}
//         onAddToCart={handleAddToCart}
//       />
//       <Product
//         product={{
//           id: 2,
//           name: 'Product 2',
//           price: 19.99,
//           imageUrl: 'https://via.placeholder.com/150',
//         }}
//         onAddToCart={handleAddToCart}
//       />
//       <Cart cartItems={cartItems} />
//     </div>
//   );
// }

// export default App;




// 6. Display the countdown timer

// import React from 'react';
// import Countdown from './Countdown';

// function App() {
//   return (
//     <div>
//       <Countdown countdownTime={60} />
//     </div>
//   );
// }

// export default App;


// // 7. Create the form.
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [showData, setShowData] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setShowData(true);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           value={firstName}
//           onChange={(event) => setFirstName(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input
//           type="text"
//           value={lastName}
//           onChange={(event) => setLastName(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//       {showData && (
//         <div>
//           <p>First Name: {firstName}</p>
//           <p>Last Name: {lastName}</p>
//           <p>Email: {email}</p>
//         </div>
//       )}
//     </form>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>My Form</h1>
//       <Form />
//     </div>
//   );
// }





// 8. Display the progress bar {Analysis of 5 student marks}.

// import React from 'react';
// import ProgressBar from './ProgressBar';

// function App() {
//   const marks = [75, 80, 85, 90, 95];

//   return (
//     <div>
//       <ProgressBar marks={marks} />
//     </div>
//   );
// }

// export default App;




// 9. Display the list of items

// import React, { useState } from 'react';

// function FormWithList() {
//   const [inputValue, setInputValue] = useState('');
//   const [itemsList, setItemsList] = useState([]);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setItemsList([...itemsList, inputValue]);
//     setInputValue('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Add Item:
//           <input type="text" value={inputValue} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <ul>
//         {itemsList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FormWithList;





// 10. Increment/Decrement button 

// import React, { useState } from 'react';

// function IncrementDecrement() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default IncrementDecrement;




// 11. Make a table in react

// import React from 'react';

// function Table() {
//   const data = [
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
//     { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
//     { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' },
//   ];

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item) => (
//           <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default Table;






// 12. Display Current Date and Time in JSX in React JS. Use two buttons for the date and time. While clicking it displays the data and time.
// import { useState } from "react";
// import './App.css'
// const Q3 = () => {
// const [result, setResult] = useState("");

// const handleButtonClick = (e) => {
// setResult(result.concat(e.target.name));
// };

// const handleClear = () => {
// setResult("");
// };

// const handleBackspace = () => {
// setResult(result.slice(0, -1));
// };

// const handleCalculate = () => {
// try {
// setResult(eval(result).toString());
// } catch (error) {
// setResult("Error");
// }
// };

// return (
// <div className="center">
// <div className="calculator">
// <div className="display">{result}</div>
// <div className="buttons">
// <button className="clear btn" onClick={handleClear}>
// AC
// </button>
// <button className="operator btn" name="/" onClick={handleButtonClick}>
// &divide;
// </button>
// <button className="operator btn" name="*" onClick={handleButtonClick}>
// &times;
// </button>
// <button className="backspace btn" onClick={handleBackspace}>
// &larr;
// </button>
// <button className="btn" name="7" onClick={handleButtonClick}>
// 7
// </button>
// <button className="btn" name="8" onClick={handleButtonClick}>
// 8
// </button>
// <button className="btn" name="9" onClick={handleButtonClick}>
// 9
// </button>
// <button className="operator btn" name="-" onClick={handleButtonClick}>
// &minus;
// </button>
// <button className="btn" name="4" onClick={handleButtonClick}>
// 4
// </button>
// <button className="btn" name="5" onClick={handleButtonClick}>
// 5
// </button>
// <button className="btn" name="6" onClick={handleButtonClick}>
// 6
// </button>
// <button className="operator btn" name="+" onClick={handleButtonClick}>
// &#43;
// </button>
// <button className="btn" name="1" onClick={handleButtonClick}>
// 1
// </button>
// <button className="btn" name="2" onClick={handleButtonClick}>
// 2
// </button>
// <button className="btn" name="3" onClick={handleButtonClick}>
// 3
// </button>
// <button className="equal btn" onClick={handleCalculate}>
// &#61;
// </button>
// <button className="zero btn" name="0" onClick={handleButtonClick}>
// 0
// </button>
// <button className="btn" name="." onClick={handleButtonClick}>
// .
// </button>
// </div>
// </div>
// </div>
// )
// }

// export default Q3;






// Q. Create a login form with three entries. When you will click on the submit button on the form it must show form is submitted and all the values that you are storing tn the fields must be shown on the header.  

// import { useState } from "react";
// const Q7 = () => {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const [email, setEmail] = useState('');
// const [isSubmitted, setIsSubmitted] = useState(false);

// const handleSubmit = (event) => {
// event.preventDefault();
// setIsSubmitted(true);
// };

// return (
// <div>
// <form onSubmit={handleSubmit}>
// <div>
// <label htmlFor="username">Username:</label>
// <input
// type="text"
// id="username"
// value={username}
// onChange={(event) => setUsername(event.target.value)}
// />
// </div>
// <div>
// <label htmlFor="password">Password:</label>
// <input
// type="password"
// id="password"
// value={password}
// onChange={(event) => setPassword(event.target.value)}
// />
// </div>
// <div>
// <label htmlFor="email">Email:</label>
// <input
// type="email"
// id="email"
// value={email}
// onChange={(event) => setEmail(event.target.value)}
// />
// </div>
// <button type="submit">Submit</button>
// </form>
// {isSubmitted && (
// <header>
// <h2>Form is submitted</h2>
// <p>Username: {username}</p>
// <p>Password: {password}</p>
// <p>Email: {email}</p>
// </header>
// )}
// </div>
// )
// }
// export default Q7;




// Q. Install the boot strap in your react project and use the bootstrap features. Create a navbar there and open the options given in the navbar when it is clicked.

// import React from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const Q9 = () => {
// return (
// <nav class="navbar navbar-expand-lg bg-body-tertiary">
// <div class="container-fluid">
// <a class="navbar-brand" href="#">Navbar</a>
// <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// <span class="navbar-toggler-icon"></span>
// </button>
// <div class="collapse navbar-collapse" id="navbarSupportedContent">
// <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// <li class="nav-item">
// <a class="nav-link active" aria-current="page" href="#">Home</a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="#">Link</a>
// </li>
// <li class="nav-item dropdown">
// <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// Dropdown
// </a>
// <ul class="dropdown-menu">
// <li><a class="dropdown-item" href="#">Action</a></li>
// <li><a class="dropdown-item" href="#">Another action</a></li>
// <li><hr class="dropdown-divider"></hr></li>
// <li><a class="dropdown-item" href="#">Something else here</a></li>
// </ul>
// </li>
// <li class="nav-item">
// <a class="nav-link disabled">Disabled</a>
// </li>
// </ul>
// <form class="d-flex" role="search">
// <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
// <button class="btn btn-outline-success" type="submit">Search</button>
// </form>
// </div>
// </div>
// </nav>
// );
// }
// export default Q9;






// Q. Demonstrate the use of useEffect and useMemo hook through your code.

// import { useState, useEffect, useMemo } from "react";

// const Q10 = () => {
// const [count, setCount] = useState(0);
// const [text, setText] = useState("");
// const [filteredText, setFilteredText] = useState("");

// useEffect(() => {
// console.log("Component mounted or updated");
// });

// useEffect(() => {
// console.log("Only Component Mounted");
// }, []);

// useEffect(() => {
// console.log("Component Updated");
// }, [count]);

// const filtered = useMemo(() => {
// console.log("Filtering text");
// return text
// .split("")
// .filter((char) => char.toLowerCase() !== "a")
// .join("");
// }, [text]);

// return (
// <div>
// <h1>{count}</h1>
// <button onClick={() => setCount(count + 1)}>Increment</button>
// <button onClick={() => setCount(count - 1)}>Decrement</button>
// <br />
// <input value={text} onChange={(e) => setText(e.target.value)} />
// <p>Original Text: {text}</p>
// <p>Filtered Text: {filtered}</p>
// </div>
// )
// }
// export default Q10;




// Q. Demonstrate the use of useRef,useContext and useReducer hook through your code.


import React, { useContext, useMemo, useReducer, useRef } from "react";
const initialState={
count : 0,
isEven: false
};

const reducer = (state, action)=>{
switch(action.type){
case 'increment' : {
return {
...state,
count: state.count+1,
isEven: (state.count+1)%2===0
};
}
case 'decrement': {
return {
...state,
count: state.count -1,
isEven:(state.count-1)%2===0
};
}
default:
throw new Error('Unsupported action type')
}
}

const AppContext = React.createContext(null);
const ChildComponent = () => {
const {count}=useContext(AppContext);
return (
<div>
<h2>Count: {count}</h2>
</div>
)
}
const Q11 = () => {
const [state, dispatch]=useReducer(reducer, initialState);
const inputRef=useRef(null);
const handleIncrement = () => {
dispatch({type: 'increment'});
};
const handleDecrement =()=>{
dispatch({type: 'decrement'});
};
const handleFocus=()=>{
inputRef.current.focus();
};
const memoizedValue=useMemo(()=>{
return state.isEven ? 'Even' : 'Odd';
},[state.isEven]);
return (
<div>
<h1>Count is {memoizedValue}</h1>
<AppContext.Provider value={state}>
<ChildComponent/>
</AppContext.Provider>
<button onClick={handleIncrement}>Incremenet</button>
<button onClick={handleDecrement}>Decremenet</button>
<input type="text" ref={inputRef}/>
<button onClick={handleFocus}>Focus Input</button>
</div>
)
}
export default Q11;