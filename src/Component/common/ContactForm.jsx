import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: "",
        number: '',
        email: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            firstName: '',
            lastName: '',
            number: '',
            email: '',
        })
    }
    return (
        <div className='min-h-screen bg-gray-200 '>
            <div className="mx-auto max-w-[1200px] px-4 xl:px-0 py-14">
                <h1 className='text-center text-5xl'>ContactForm</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[600px] mx-auto">
                    <label htmlFor="firstName">First Name</label>
                    <input id='firstName'
                        
                        name='firstName'
                        type="text"
                        placeholder='enter your name'
                        className='p-2 text-xl leading-none outline-none'
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} // Update search query
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input id='lastName'
                     required
                        name='lastName'
                        type="text"
                        placeholder='enter your last name'
                        className='p-2 text-xl leading-none outline-none'
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    <label htmlFor="number">Number</label>
                    <input id='number'
                     required
                        name='number'
                        type="number"
                        placeholder='enter your number'
                        className='p-2 text-xl leading-none outline-none'
                        value={formData.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    />
                    <label htmlFor="email">Email</label>
                    <input id='email'
                     required
                        name='email'
                        type="email"
                        placeholder='enter your email'
                        className='p-2 text-xl leading-none outline-none'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input type="submit" value="Submit" className='bg-blue-200 py-3 cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default ContactForm