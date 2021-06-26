import React, {useState} from 'react'
import {List, ListItem, ListItemText, ListItemAvatar, Button, Modal, Input, FormControl, Tooltip} from '@material-ui/core'
import db from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'relative',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: 'none',
		boxShadow: theme.shadows[10],
		padding: theme.spacing(2, 3, 6),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '30vh auto',
		color: "black"
	},
}));

function Todo(props) {

	/* 
		This is the function which we can declare instead of just directly passing the command in the onClick value
		const deleteTodo = (e) => {
			db.collection('todos').doc(props.todo.id).delete();
		}
	*/

   const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");

	/*const handleOpen = () => {
		setOpen(true);
	};*/
	
	/*
		const handleClose = () => {
			setOpen(false);
		};
	*/

		const updateTodo = () => {
			// update the todo with the new input text
			db.collection('todos').doc(props.todo.id).set({
				text: input
			}, { merge: true});     // This merge prevents us from overwriting whatever is in that(means that it will not update the existing id but it will append the new one to it)
			setOpen(false);
		}

	return (
		<>
			<Modal
				open={open}
				onClose={e => setOpen(false)}
			>
				<div className={classes.paper}>
					<h1>Edit this Todo</h1>
					<FormControl>
						{/* <InputLabel>{props.todo.text}</InputLabel> */}
						<Input 
							type="text" 
							value={input} 
							onChange={e => setInput(e.target.value)} 
							placeholder={props.todo.text}
							style={{width: "100%"}}
						/>
					</FormControl>
					 <Button 
						onClick={updateTodo} 
						style={{ 
							backgroundColor: 'Background', 
							color: 'white',
							marginTop: '30px',
							width: '50%'
						}}
					>Update this</Button>   
				</div>
			</Modal>
			<List>
				<ListItem
					style={{ 
						width: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "word",
						wordWrap: "break-word",
						margin: "20px auto 0",
						backgroundImage: "linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)"
					}}
				>
					<ListItemAvatar>👉</ListItemAvatar>
					<ListItemText 
						style={{color: "white"}}
						primary={props.todo.text}
						secondary={props.todo.timestamp}
					></ListItemText>     {/* Here todo is the object that to which we go and the text is the text field of the database */}
					<Tooltip title="Edit">
						<Button onClick={e => setOpen(true)} style={{ marginLeft: "10px" }}>
							<EditIcon style={{ color: "white" }}></EditIcon>
						</Button>
					</Tooltip>
					<Tooltip title="Delete">
						<Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>
							<DeleteForeverIcon style={{ color: "white" }}></DeleteForeverIcon>
						</Button>
					</Tooltip>
				</ListItem>
			</List>
		</>
	)
}

export default Todo