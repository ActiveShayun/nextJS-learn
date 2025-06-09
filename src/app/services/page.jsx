import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
    const users = [
        {
            id: 1,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            age: 28,
            isActive: true
        },
        {
            id: 2,
            name: "Bob Smith",
            email: "bob.smith@example.com",
            age: 35,
            isActive: false
        },
        {
            id: 3,
            name: "Charlie Rose",
            email: "charlie.rose@example.com",
            age: 22,
            isActive: true
        },
        {
            id: 4,
            name: "Diana Prince",
            email: "diana.prince@example.com",
            age: 30,
            isActive: true
        },
    ]
    console.log(users);
    return (
        <div>
            <h2>All Users</h2>
            {
                users.map(u => {
                    return (
                        <Link href={`/services/${u.id}`}>
                            <div key={u.id} className='mb-4'>
                                <p>Name : {u.name}</p>
                            </div>
                        </Link>
                    )

                })
            }
        </div>
    );
};

export default ServicesPage;