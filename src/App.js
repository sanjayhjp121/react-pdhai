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

import React from 'react';

function Table() {
  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
