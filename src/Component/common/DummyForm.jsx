import React, { useState } from 'react';

const DummyForm = () => {

    const [googleData, setGoogleData] = useState({
        firstName: '',
        lastName: '',
        number: '',
        gmail: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(googleData);

       
        setGoogleData({
            firstName: '',
            lastName: '',
            number: '',
            gmail: '',
        });
    };

    return (
        <div className='min-h-screen bg-zinc-100'>
            <div className="mx-auto max-w-[1200px] px-4 xl:px-0 py-14">
                <h1 className='text-4xl text-red-600 text-center'>Google Form</h1>
                <form onSubmit={handleSubmit} className='flex flex-col max-w-[500px] mx-auto gap-2'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder='Enter your first name'
                        className='leading-none outline-none p-3 rounded-md'
                        required
                        value={googleData.firstName}
                        onChange={(e) => setGoogleData({ ...googleData, firstName: e.target.value })}
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        placeholder='Enter your last name'
                        className='leading-none outline-none p-3 rounded-md'
                        value={googleData.lastName}
                        onChange={(e) => setGoogleData({ ...googleData, lastName: e.target.value })}
                    />

                    <label htmlFor="gmail">Gmail</label>
                    <input
                        type="email"
                        name="gmail"
                        id="gmail"
                        required
                        placeholder='Enter your email'
                        className='leading-none outline-none p-3 rounded-md'
                        value={googleData.gmail}
                        onChange={(e) => setGoogleData({ ...googleData, gmail: e.target.value })}
                    />

                    <label htmlFor="number">Number</label>
                    <input
                        type="text"
                        name="number"
                        id="number"
                        required
                        placeholder='Enter your number'
                        className='leading-none outline-none p-3 rounded-md'
                        value={googleData.number}
                        onChange={(e) => setGoogleData({ ...googleData, number: e.target.value })}
                    />

                    <input type="submit" value="Submit" className='bg-red-600 p-3 rounded-md mt-3 text-white' />
                </form>
            </div>
        </div>
    );
};

export default DummyForm;
