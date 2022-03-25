import React from 'react';
import { NewRoomForm } from './NewRoomForm';
import { HOUSE_IMAGES } from '../shared/data';


export const House = (props) => {

	const { house, updateHouse} = props;

	function deleteRoom(roomId) {
		const updatedHouse={
			...house,
			rooms: house.rooms.filter((x) => x._id!==roomId)
		};
		updateHouse(updatedHouse);
	}

	const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

	const rooms = () => (
		<ul>
			{house.rooms.map((room, index) => (
				<li key={index}>
					<label> {`${room.name} Area: ${room.area}`}</label>
					<button onClick={(e) => deleteRoom(room._id)}>Delete</button>
				</li>
			))}
		</ul>
	);
	

	return (
		<div>
			<h2>{house.name}</h2> 
			<img src={HOUSE_IMAGES._id} alt="houseImage" />
			{
			rooms({ rooms, houseId: house._id, deleteRoom})
			}
			<NewRoomForm addNewRoom={addNewRoom} />
		</div>
	);

}