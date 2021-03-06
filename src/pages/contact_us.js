import React, { useState } from "react";
import SEO from "../components/seo";

function ContactPage() {
    const functionURL = "https://86rfxjzco8.execute-api.eu-west-2.amazonaws.com/Prod/send";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        if (submitting) return;
        if (name == "" || email == "" || message == "") {
            setError("Name, email and message fields are required.");
            return;
        }
        setSubmitting(true);
        try {
            const response = await fetch(functionURL, {
                method: "post",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    toEmails: ["hope.allotments@gmail.com"],
                    subject: "hopeallotment.org.uk: New contact form message",
                    message: `
                        <h4>New message from HOPE website</h4>
                        <p>Someone has left a message.</p>
                        <hr/>
                        <p>Name: ${name}</p>
                        <hr />
                        <p>Email: ${email}</p>
                        <hr />
                        <p>Phone: ${phone}</p>
                        <hr />
                        <p>Message:<br/> ${message.replace(/(<([^>]+)>)/gi, "<br/>")}</p>`,
                })
            });
            if (response.status === 200 || response.status === 204) {
                setError(false);
                setSubmitting(false);
                setEmail("");
                setName("");
                setPhone("");
                setMessage("");
                setSuccess("Message sent successfully. Someone will be in touch soon!");
            } else {
                setError("Failed to send email. Please try again later.");
                setSubmitting(false);
                setSuccess("");
            }
        } catch (e) {
            console.log(e);
            setError("Failed to send email. Please try again later.");
            setSubmitting(false);
            setSuccess("");
        }

    };

    return (
        <div>
            <SEO
                keywords={[`hope`, `community`, `allotment`, `volunteers`]}
                title="Contact"
            />
            <section className="text-center">
                <h2 className="inline-block p-3 mb-6 text-2xl mx-auto font-bold heading_pattern uppercase">
                    Contact Us
                </h2>
                <div className="font-medium flex flex-col mx-auto tracking-normal md:tracking-wide text-justify w-3/4">
                    <p className="mb-2">
                        We want the people of Sheffield to get involved with our allotments.
                        We are always looking for new people who want to take an active role
                        in our group.
                    </p>
                    <p className="mb-2">
                        If you want to meet new people, get more exercise, or simply have a
                        keen interest in gardening, we want to hear from you.
                    </p>
                    <p className="mb-6">Please leave a contact message below.</p>
                </div>

                <div className=" text-green-700 font-semibold text-2xl mb-3">{success}</div>
                <div className="text-red-600 font-semibold mb-3">{error}</div>
                {!success && <form className="mx-auto md:w-1/2 mt-2" method="post" action={functionURL}>
                    <label
                        className="block mb-2 text-xs text-left font-bold uppercase"
                        htmlFor="name"
                    >
                        Name<span className="text-red-600 font-semibold">*</span>
                    </label>

                    <input
                        className={`w-full mb-6 form-input ${submitting ? "bg-gray-300 opacity-50" : ""}`}
                        id="name"
                        placeholder="Your Name"
                        type="text"
                        disabled={submitting}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />

                    <label
                        className="block mb-2 text-xs text-left font-bold uppercase"
                        htmlFor="email"
                    >
                        Email<span className="text-red-600 font-semibold">*</span>
                    </label>

                    <input
                        className={`w-full mb-6 form-input ${submitting ? "bg-gray-300 opacity-50" : ""}`}
                        id="email"
                        placeholder="Your Email"
                        type="text"
                        disabled={submitting}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />

                    <label
                        className="block mb-2 text-xs text-left font-bold uppercase"
                        htmlFor="phone"
                    >
                        Phone
                    </label>

                    <input
                        className={`w-full mb-6 form-input ${submitting ? "bg-gray-300 opacity-50" : ""}`}
                        id="phone"
                        placeholder="Your Phone Number"
                        type="text"
                        disabled={submitting}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        value={phone}
                    />

                    <label
                        className="block mb-2 text-xs text-left font-bold uppercase"
                        htmlFor="message"
                    >
                        Message<span className="text-red-600 font-semibold">*</span>
                    </label>

                    <textarea
                        className={`w-full mb-6 form-textarea ${submitting ? "bg-gray-300 opacity-50" : ""}`}
                        id="message"
                        placeholder="Say something..."
                        rows="8"
                        disabled={submitting}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        value={message}
                    />

                    <button
                        disabled={submitting}
                        onClick={onSubmit}
                        className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600"
                    >
                        Submit
                    </button>
                </form>
                }
            </section>
        </div>
    );
}

export default ContactPage;
