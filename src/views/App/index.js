import React, { useState, useEffect } from 'react';
import "./App.css";
import firebase from 'firebase';
import db from '../../firebase.js';
import FlipMove from 'react-flip-move';
import { SendIcon } from '@material-ui/icons';
import Message from '../../components/Message';
import { IconButton, FormControl, InputLabel, Input } from '@material-ui/core';

const Index = (props) => {
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState("");
	const [messageText, setMessageText] = useState("");

	function sendMessage(evt) {
		evt.preventDefault();
		db.collection("messages").add({
			username,
			text: messageText,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});
		setMessageText("");
	}

	useEffect(() => {
		db.collection('messages')
			.orderBy('timestamp')
			.onSnapshot(snapShot => {
			setMessages(snapShot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data()
				}
			}));
		})
	}, []);

	useEffect(() => {
		setUsername(prompt("Please enter your name"));
	}, [] );

	useEffect(() => {
		document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight;
	}, [messages]);

	return (
		<div className="App">
			<img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Messenger icon"/>
			<h1>FB Messenger clone</h1>
			{ username?.trim() ? <h2>Welcome {username}</h2> : null }
			<FlipMove typeName="div">
				{
			   		messages.map((message, index) => (
			   			<Message 
			   				key={message.id} 
			   				username={message.username} 
			   				text={message.text}
			   				alignRight={message.username === username}
			   			/>
			   		))
			   	}
			</FlipMove>
		   	<form onSubmit={sendMessage} className="App__Form">
		   		<FormControl>
					  <InputLabel>Enter a message</InputLabel>
					  <Input 
					  	className="App__Form__Control"
					  	onChange={evt => setMessageText(evt.target.value)} 
		   				value={messageText} 
		   			/>				
		   		</FormControl>
		   		<IconButton 
		   			className="App__SubmitBtn"
		   			variant="contained" 
		   			color="primary" 
		   			disabled={!messageText.trim()} 
		   			type="submit"
		   			> <SendIcon/>
		   		</IconButton>
		   	</form>
		</div>
	)
}

export default Index;