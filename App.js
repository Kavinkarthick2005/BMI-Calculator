import React, { useState } from "react";

const App = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        if (weight && height) {
            const bmiValue = (weight / (height * height)).toFixed(2);
            setBmi(bmiValue);
        }
    };

    return (
        <div>
            <h1>BMI Calculator</h1>
            <input type="number" placeholder="Weight (kg)" onChange={(e) => setWeight(e.target.value)} />
            <input type="number" placeholder="Height (m)" onChange={(e) => setHeight(e.target.value)} />
            <button onClick={calculateBMI}>Calculate</button>
            {bmi && <h2>Your BMI: {bmi}</h2>}
        </div>
    );
};

export default App;
