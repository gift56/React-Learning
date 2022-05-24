import React, { useState } from "react";

const Count = () => {
    const [dark, setDark] = useState(false);
    const [myMood, setGreen] = useState(false);

    const toggleDarkMode = () => {
        setDark((current) => !current)
    }
    const toggleGreenMode = () => {
        setGreen((current) => !current)
    }

    return (
        <div>
            <button onClick={toggleDarkMode}>Toggle dark Mode</button>
            <div className={dark ? "dark" : "light"}>
                <h2>Hello Today is my toggle theme mood project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore repudiandae molestias nihil ducimus beatae quam pariatur, consectetur praesentium reprehenderit dolore, natus nulla laudantium? Omnis unde eaque dignissimos eum voluptas ipsa ducimus asperiores, hic natus corporis vitae dolores doloribus esse debitis alias. Quibusdam commodi, asperiores explicabo optio doloribus ullam? Unde inventore magni beatae. Consectetur, similique quae ratione eius amet dignissimos velit doloremque fugiat, voluptatibus consequuntur, tempora ab nulla harum vero cumque corporis laboriosam ducimus odit necessitatibus quo quidem iure pariatur eos? Consequatur adipisci repudiandae amet enim, soluta vero sapiente, voluptatibus eaque perspiciatis facilis, velit quaerat perferendis atque minus ea temporibus quia praesentium asperiores eos reprehenderit tempora ipsum. Necessitatibus distinctio provident eius vitae nostrum? Fugiat libero, aliquid sint maiores perferendis ullam.</p>
            </div>

            <button onClick={toggleGreenMode}>Toggle green Mode</button>

            <div className={myMood ? "green" : "red"}>
                <h3>Green mood</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, sed! Autem saepe veritatis doloribus repudiandae, accusamus harum minus aperiam magni cumque commodi maxime dignissimos natus, soluta quaerat similique tenetur explicabo quibusdam sed omnis consequatur dolorem assumenda nulla! Illo ad ipsa ex. Quam laboriosam tenetur placeat ea ullam illo, incidunt impedit repellendus omnis voluptates reiciendis quis, laudantium tempora. Adipisci maiores eaque magni dicta quidem ducimus unde eum, provident necessitatibus natus eius sunt veniam error assumenda? Nam veniam perferendis inventore saepe ipsam eum, veritatis asperiores aliquam vitae distinctio corporis quaerat perspiciatis libero?</p>
            </div>
        </div >
    )

}

export default Count;