export const Contact = () => {

    const handleFormSubmit = (formData) => {
       // console.log(formData.entries());  // returns iterator of key-value pairs of formData
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData);  //will return the data of form as an object  
    }
    return (
        <section className="section-contact">
            <h2 className="container-title"> Contact Us</h2>

            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input type="text" className="form-control" required autoComplete="off" placeholder="Enter Your Name" name="username" />
                    <br />
                    <input type="email" className="form-control" required autoComplete="off" placeholder="Enter Your Email" name="email" />
                    <br />
                    <textarea name="message"
                        className="from-control" rows='10' placeholder="Enter your message..."
                        required autoComplete="off"
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

        </section>
    )
}