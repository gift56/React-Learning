import React, { useState } from "react";

const Count = () => {
    const [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark((current) => !current)
    }

    return (
        <div className="background">
            <button onClick={toggleDarkMode}>Toggle dark Mode</button>
            <div className={dark ? "dark" : "light"}>
                <h2>Hello Today is my toggle theme mood project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore repudiandae molestias nihil ducimus beatae quam pariatur, consectetur praesentium reprehenderit dolore, natus nulla laudantium? Omnis unde eaque dignissimos eum voluptas ipsa ducimus asperiores, hic natus corporis vitae dolores doloribus esse debitis alias. Quibusdam commodi, asperiores explicabo optio doloribus ullam? Unde inventore magni beatae. Consectetur, similique quae ratione eius amet dignissimos velit doloremque fugiat, voluptatibus consequuntur, tempora ab nulla harum vero cumque corporis laboriosam ducimus odit necessitatibus quo quidem iure pariatur eos? Consequatur adipisci repudiandae amet enim, soluta vero sapiente, voluptatibus eaque perspiciatis facilis, velit quaerat perferendis atque minus ea temporibus quia praesentium asperiores eos reprehenderit tempora ipsum. Necessitatibus distinctio provident eius vitae nostrum? Fugiat libero, aliquid sint maiores perferendis ullam.</p>
            </div>
        </div>
    )

}

export default Count;