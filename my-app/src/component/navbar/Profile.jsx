import React, { useEffect, useState } from 'react';

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
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <h1>Profile Generator</h1>
        </div>
    )
}

export default Profile
