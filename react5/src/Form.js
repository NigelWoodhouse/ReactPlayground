import React from "react";

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            newsletter: false,
        }
    )

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     (formData.password === formData.confirmPassword) ? console.log("Successfully signed up") : console.log("Passwords do not match")
    //     if (formData.newsletter) {console.log("Thanks for signing up for our newsletter")}
    // }

    function handleSubmit(event) {
        (formData.password === formData.confirmPassword) ? console.log("Successfully signed up") : console.log("Passwords do not match")
        if (formData.newsletter) {console.log("Thanks for signing up for our newsletter")}
        console.log(formData)
        event.preventDefault()

    }
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(preFormData => {
            return {
                ...preFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br/>

                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br/>

                <input
                    type="text"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <br/>

                <div className="preference">
                    <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="newsletter">I want to join the newseltter</label>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}