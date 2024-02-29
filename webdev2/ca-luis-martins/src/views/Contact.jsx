import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
    const [state, handleSubmit] = useForm("xyyrjkoz");

    if (state.result === null) {
        return (
            <div className="flex justify-center p-6">
                <div className="mt-16 w-full lg:w-1/3">
                    <h2 className="text-3xl font-bold font-uncial text-emerald-700">Get in touch.</h2>
                    <div className="mt-6 mb-12">
                        <p>Embark on your Irish adventure with confidence!</p>
                        <p>Have questions about navigating the Emerald Isle or seeking personalised travel advice?</p>
                        <p> Reach out to us!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="max-w-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="text-sm font-medium text-gray-600">
                                <FaUser className="inline-block mr-2" />
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full p-2 border ${state.errors?.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-sm font-medium text-gray-600">
                                <FaEnvelope className="inline-block mr-2" />
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full p-2 border ${state.errors?.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="text-sm font-medium text-gray-600">
                                <FaComment className="inline-block mr-2" />
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={`w-full p-2 border ${state.errors?.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            ></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button type="submit" className="bg-emerald-500 text-white py-2 px-4 rounded-md flex items-center" disabled={state.submitting}>
                            <FaPaperPlane className="mr-2" />
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
    return (
        <div className="flex justify-center p-6">
            <div className="mt-16 w-full lg:w-1/3">
                {state.result.kind === "success"
                    ?
                    <>
                        <h2 className="text-3xl font-bold font-uncial text-emerald-700">Success!</h2>
                        <p>Your message has been successfully sent. We'll get back to you shortly.</p>
                    </>
                    : (
                        <>
                            <h2 className="text-3xl font-bold font-uncial text-red-500">Oops!</h2>
                            <p>Something went wrong while submitting your form. Please try again later.</p>
                        </>
                    )
                }
            </div>
        </div>
    )
};