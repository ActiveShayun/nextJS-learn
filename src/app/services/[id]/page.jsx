
const ServicesDetails = async ({ params }) => {
    const id = await params?.id;
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
    const singleData = users.find(s => s.id == id);
    if (singleData) {
        return (
            <div>
                id: {id}
                <p>Email : {singleData?.email}</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>Page Not Found</h2>
            </div>
        )
    }

};

export default ServicesDetails;