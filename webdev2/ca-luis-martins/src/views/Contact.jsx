export const Contact = () => (
    <>
        {/* < !--Main content section for registration form-- > */}
        <main className="flex-1 p-3 overflow-auto">
            {/* <!-- Registration Form --> */}
            <form id="registration-form"
                className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md my-auto h-100 overflow-auto"
                onsubmit="validateForm()">
                <h2 className="text-2xl font-semibold text-center mb-4">Gym Registration</h2>

                {/* <!-- Grid layout for first and last name --> */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label for="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
                        <input type="text" id="firstName" placeholder="Enter your first name"
                            className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label for="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                        <input type="text" id="lastName" placeholder="Enter your last name"
                            className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="mb-4">
                    <label for="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-4">
                    <label for="password" className="block text-sm font-medium text-gray-600">Password</label>
                    <input type="password" id="password" placeholder="Enter your password"
                        className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/* <!-- Confirm Password input --> */}
                <div className="mb-4">
                    <label for="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm your password"
                        className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/* <!-- Password error list --> */}
                <ul id="passwordErrorList" className="list-disc list-outside mx-3 text-red-500 mb-3"></ul>

                {/* <!-- Phone Number input --> */}
                <div className="mb-4">
                    <label for="phoneNumber" className="block text-sm font-medium text-gray-600">Phone Number</label>
                    <input type="tel" id="phoneNumber" placeholder="Enter your phone number"
                        className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/* <!-- Date of Birth input --> */}
                <div className="mb-4">
                    <label for="dob" className="block text-sm font-medium text-gray-600">Date of Birth</label>
                    <input type="date" id="dob" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/* <!-- Membership Option dropdown --> */}
                <div className="mb-4">
                    <label for="membership" className="block text-sm font-medium text-gray-600">Membership Option</label>
                    <select id="membership" className="mt-1 p-2 w-full border rounded-md">
                        <option value="copper">Copper</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="titanium">Titanium</option>
                    </select>
                </div>

                {/* <!-- Terms and Conditions checkbox --> */}
                <div className="mb-4">
                    <div className="flex items-center">
                        <p className="hidden">Terms and Conditions</p>
                        <input type="checkbox" id="terms" className="form-checkbox" />
                        <label for="terms" className="ml-2 text-sm text-gray-600">I accept the terms and conditions</label>
                    </div>
                </div>

                {/* <!-- Register button --> */}
                <button type="submit"
                    className="w-full bg-orange-700 hover:bg-orange-800 text-white p-2 rounded-md">Register</button>

                {/* <!-- Form validation error and empty field lists --> */}
                <div id="formMessage" className="mt-4 text-red-500"></div>
                <ul id="emptyFieldsList" className="list-disc mx-3 text-red-500 list-outside [&>li]:cursor-pointer"></ul>
            </form>
        </main>
    </>
)