import { useEffect, useState } from 'react'

function Letter({ letter, musicName, song }) {

    const [on, setOn] = useState(false)



    const play = () => {

        setOn(prevState => !prevState)
        song.play()

        setTimeout(() => {
            setOn(prevState => !prevState)
        }, 150)
    }

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === letter.toLowerCase()) {
                song.currentTime = 0;

                setOn(prevState => !prevState)
                song.play()

                setTimeout(() => {
                    setOn(prevState => !prevState)
                }, 150)
            }
        });

        return document.removeEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === letter.toLowerCase()) {
                song.currentTime = 0;
                setOn(prevState => !prevState)
                song.play()

                setTimeout(() => {
                    setOn(prevState => !prevState)
                }, 150)
            }
        })
    }, []);

    return (
        <div onClick={play} className={`button ${on === true && "focus"}`}>
            <h2>{letter}</h2>
            <h4>{musicName}</h4>
        </div>
    )
}

export default Letter