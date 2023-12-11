import { useState } from "react";


export default function LoginForm () {

    const [userName, setUserName] = useState("");

    const handleFormSubmission = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setUserName(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmission}>
                <label>User Name</label>
                <input type="text" value={userName} onChange={handleChange}/>
                <label>Password</label>
                <input type="text" />
                <button>Submit</button>
            </form>
        </div>
    );
}