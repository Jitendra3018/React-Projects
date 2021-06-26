import React, {useState, useEffect} from 'react'
import { Button, FormControl, Input, InputLabel, Tooltip } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase'

function App() {
	// useState is used to set the initial state
	const [todos, setTodos] = useState([]);		//Todos is the array in which we will store our lists in the short term memory and setTodos is used to append the items in the list
	const [input, setInput] = useState('');		//The empty string in the useState function means that it will keep everything empty or blank even if we type 

	// when we load the app, we want to listen from the database and fetch the new todos as they get added/removed
	useEffect(() => {		// UseEffect has 2 parameters, i.e, function and the dependencies (Here the function is the arrow function and dependencies is the array)
		// This code here fires when the code in the  app.js loads
		db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {		// snapshot just gives us the snap of the database
			// setTodos will not work because we have passed the static array in the useState above
			setTodos(snapshot.docs.map(doc => ({id: doc.id, text: doc.data().text})));		//docs here is all the todo list which we have created in the database and we have mapped this because we have to just go through all the docs in the database, so for every single doc with the key todo in the database, it will give us back the object of the data
		});
	}, []);		// if the array is empty, then the function will run once when the app loads and if we put input in the array, the function will run whenever we pass the input

	const addTodos = (event) => {
		// This will fire off when we click the button
		event.preventDefault();		// This will prevent the browser from refreshing the page agin and again

		db.collection('todos').add({
			text: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()		//This indicates that when our server is stored, so that time is used. and this is also good to use because it doesn't matter where we are in the world, the timestamp will be the same
		});
		// console.log('Hello');
		// setTodos([...todos, input]);		//... means that we are appending the input at the end of the array but this is still in the short term memory, so when we refresh the page, everything goes away
		setInput('');		//This clears the input after hitting the enter key on the keyboard or the button on the browser
	}

	return (
		<div className="App">
			<h1>Welcome to your TODO LIST APP🚀</h1>
			<form>		{/* We have wrapped our input and te button inside the form so that when we hit that enter button from the keyboard , then  it should submit hwt we have written */}
				{/* <input type="text" value={input} onChange={event => setInput(event.target.value)}/>		Here we mean that when we type something, we are targeting the input field and we are setting it's value to the value which we are typing */}
				<FormControl 
					style={{ 
						display: 'flex',
						width: "30%", 
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginLeft: "auto",
						marginRight: "auto"
						}}
				>
					<InputLabel style={{color: 'white'}}>✅ Write a Todo</InputLabel>
					<Input 
						type="text" 
						value={input} 
						onChange={event => setInput(event.target.value)}
						style={{
							color: 'white',
							width: "70%"
						}}
					/>
					<Tooltip title="Add">
						<Button
							type="submit"
							onClick={addTodos}
							variant="contained"
							color= 'primary'
							disabled={!input}
							// style={{width: "100%"}}
						>
							Add Todo
						</Button>
					</Tooltip>
				</FormControl>
				{/* <button type="submit" onClick={addTodos}></button> */}
			</form>
				{
					todos.map(todo => (	//map function just loops through the array and returns the item of the array.
						<Todo todo={todo} />		// We have just moved the code to the different component, i.e, Todo.js to clean up the code and make it look even better
						// <li>{todo}</li>
					))
				}
		</div>
	);
}

export default App;
