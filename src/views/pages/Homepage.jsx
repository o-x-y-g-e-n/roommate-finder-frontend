import React from 'react';
import RoomCard from 'components/rooms/RoomCard';
import { Typography } from '@mui/material';
import LocationCard from 'components/common/LocationCard';
import RoomsData from '../../assets/data/rooms.json';
import { Outlet, Link } from 'react-router-dom';
import RoommateCard from 'components/roommates/RoommateCard';
import RoommateData from '../../assets/data/person.json';
const Homepage = () => {
    return (
        <div>
            <Typography component="span" variant="h4">
                Popular Locations
            </Typography>
            <div className="parent1">
                <LocationCard location="California" />
                <LocationCard location="Boston" />
                <LocationCard location="Maryland" />
            </div>
            <Typography component="span" variant="h4">
                Featured Rooms
            </Typography>
            <Link to="/rooms">
                <Typography component="span" style={{ fontSize: '14px', marginLeft: '10px', color: 'blue' }}>
                    View all {'>>'}
                </Typography>
            </Link>
            <div className="parent">
                <RoomCard room={RoomsData[0]} />
                <RoomCard room={RoomsData[1]} />
                <RoomCard room={RoomsData[2]} />
            </div>
            <Typography component="span" variant="h4">
                Profiles
            </Typography>
            <Link to="/roommates">
                <Typography component="span" style={{ fontSize: '14px', marginLeft: '10px', color: 'blue' }}>
                    View all {'>>'}
                </Typography>
            </Link>
            <div className="parent">
                <RoommateCard person={RoommateData[0]} />
                <RoommateCard person={RoommateData[1]} />
                <RoommateCard person={RoommateData[2]} />
            </div>
        </div>
    );
};

export default Homepage;
