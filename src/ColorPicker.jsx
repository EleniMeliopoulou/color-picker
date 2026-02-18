import { useState } from "react"
import './ColorPicker.css'

function ColorPicker() {

    const [color, setColor] = useState("");

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <>
            <div className="container">
                <h1><u>Color Picker:</u></h1>
                <div className="color-body" style={{ backgroundColor: color }}>
                    <p>Color: {color}</p>
                </div>
                <div className="footer">
                    <p>Select color:</p>
                    <input type="color" id="chosen-color" onChange={handleColorChange} />
                </div>
            </div>

        </>
    )
}

export default ColorPicker
