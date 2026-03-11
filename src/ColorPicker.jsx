import { useState } from "react"
import './ColorPicker.css'

function ColorPicker() {

    const [color, setColor] = useState("#ffffff");

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <>
            <div className="container">
                <h1><u>Color Picker:</u></h1>
                <p className="chosen-color">Color: {color}</p>
                <div className="color-body" style={{ backgroundColor: color }}>
                </div>
                <div className="footer">
                    <p>Select color:</p>
                    <input type="color" value={color} onChange={handleColorChange} />
                </div>
            </div>

        </>
    )
}

export default ColorPicker
