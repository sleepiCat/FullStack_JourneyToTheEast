const users = [
    {
        _id: "1",
        name: "user1",
        password: "password1",
        profilePicture: "profile1.jpg",
		username: "username1",
        gender: "male",
    },
    {
        _id: "2",
        name: "user2",
		username: "username2",
        password: "password2",
        profilePicture: "profile1.jpg",
        gender: "female",
    },
    {
        _id: "3",
        name: "user3",
		username: "username3",
        password: "password3",
        profilePicture: "profile1.jpg",
        gender: "male",
    },
    {
        _id: "4",
        name: "user4",
		username: "username4",
        password: "password4",
        profilePicture: "profile1.jpg",
        gender: "female",
    }
]

const transactions = [ 
    {
		_id: "1",
		userId: "1",
		description: "Transaction One",
		paymentType: "CASH",
		category: "Category One",
		amount: 100.0,
		location: "Location One",
		date: "2024-01-01",
	},
	{
		_id: "2",
		userId: "2",
		description: "Transaction Two",
		paymentType: "CARD",
		category: "Category Two",
		amount: 200.0,
		location: "Location Two",
		date: "2024-01-02",
	},
	{
		_id: "3",
		userId: "3",
		description: "Transaction Three",
		paymentType: "CASH",
		category: "Category Three",
		amount: 300.0,
		location: "Location Three",
		date: "2024-01-03",
	},
	{
		_id: "4",
		userId: "4",
		description: "Transaction Four",
		paymentType: "CARD",
		category: "Category Four",
		amount: 400.0,
		location: "Location Four",
		date: "2024-01-04",
	},
	{
		_id: "5",
		userId: "5",
		description: "Transaction Five",
		paymentType: "CASH",
		category: "Category Five",
		amount: 500.0,
		location: "Location Five",
		date: "2024-01-05",
	},
]

export { users, transactions}