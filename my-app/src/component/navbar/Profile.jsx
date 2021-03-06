import React, { useEffect, useState } from 'react';
import style from './css/Profile.module.css';

const Profile = () => {
    let url = 'https://randomuser.me/api/';

    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetchingData(url);
    }, []);

    const fetchingData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setPerson(data.results[0]);
                console.log(data)
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div className={style.container}>
            <h1>Profile Generator</h1>
            <div className={style.myCard}>
                <div className={style.card}>
                    <img src={person?.picture.large} alt="" />
                    <h3>{`${person?.name.title}. ${person?.name.first} ${person?.name.last}`}</h3>
                    <h3>Email: {person?.email}</h3>
                    <p>Gender: {person?.gender}</p>
                    <button onClick={() => fetchingData(url)}>Get New User</button>
                </div>
                <div className={style.card}>
                    <img src={person?.picture.large} alt="" />
                    <h3>{`${person?.name.title}. ${person?.name.first} ${person?.name.last}`}</h3>
                    <h3>Email: {person?.email}</h3>
                    <p>Gender: {person?.gender}</p>
                    <button onClick={() => fetchingData(url)}>Get New User</button>
                </div>
                <div className={style.card}>
                    <img src={person?.picture.large} alt="" />
                    <h3>{`${person?.name.title}. ${person?.name.first} ${person?.name.last}`}</h3>
                    <h3>Email: {person?.email}</h3>
                    <p>Gender: {person?.gender}</p>
                    <button onClick={() => fetchingData(url)}>Get New User</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
