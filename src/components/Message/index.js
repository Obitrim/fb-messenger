import React, { forwardRef } from 'react';
import "./Message.css";
import { Card, CardContent, Typography } from '@material-ui/core';

const Index = forwardRef(({ text, username, alignRight }, ref) => {
	return (
		<Card className={`MessageCard ${alignRight && 'MessageCard--ShiftRight'}`} ref={ref}>
			<CardContent>
				<Typography 
					component="p" 
					align="left"
					>
					<sup>{ username }</sup>
					{ text }
				</Typography>
			</CardContent>
		</Card>
	)
});

export default Index;