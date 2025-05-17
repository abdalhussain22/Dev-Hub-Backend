// const userData = [
//     {
//         id: "1",
//         name: "Abdal",
//         age: "23",
//         address: "Tarnab Farm Peshawar"
//     },
//     {
//         id: "2",
//         name: "Shahzad",
//         age: "18",
//         address: "Tarnab Farm Peshawar"
//     },
//     {
//         id: "3",
//         name: "Addel ",
//         age: "24",
//         address: "Tarnab Farm Peshawar"
//     },
//     {
//         id: "4",
//         name: "Saad ",
//         age: "14",
//         address: "Tarnab Farm Taru"
//     },
// ]



//Showing data on frontend, also show the specific data
// const getAllUser = (req,res) =>{
    //     const data = userData.map((user)=>`
    //             Id: ${user.id}<br>
    //             Name: ${user.name}<br>
    //             Age: ${user.age}<br>
    //             Address: ${user.address}<br><br>
    //     `).join("")
    //     res.send(data);
    // }

// Filter the specific object through routs
// const getAllUser = (req,res)=>{
    
//     const filterObject = userData.filter(user => user.age >= 20).map((user) => 
//         `
//             Id: ${user.id}<br>
//             Name: ${user.name}<br>
//             Age: ${user.age}<br>
//             Address: ${user.address}<br><br>
//         `
//     ).join("")
//     res.send(filterObject);
// }


import { userAPI } from "../config/api.js";

const getAllUser = async (req, res) => {
    try {
        const response = await fetch(userAPI);
        const userData = await response.json();

        const data = userData.filter(user => user.address.city == "Aliyaview")
            .map(user => `
                Id: ${user.id}<br>
                Name: ${user.name}<br>
                Username: ${user.email}<br>
                Address: ${user.address.city}<br>
                Phone: ${user.phone}<br>
                Website: ${user.website}<br>
                Company: ${user.company.name}<br>
            `)
            .join("");

        res.send(data);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Failed to fetch user data.");
    }
};


export default getAllUser;