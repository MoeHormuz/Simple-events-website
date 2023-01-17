const db = require('../config/database')
const Event = require('../models/Evnet')


let newEvents = [

    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    new Event({
        title: 'Website Author',
        description: "Hi, i'm Moe Hormuz, a Back-End developer, i use Node js technology with the Express framework and the MongoDB for back-end development, you can contact me at the following mail: moehormuz@gmail.com it's a pleasure working with you",
        location: 'jeddah',
        date: Date.now(),
        user_id: "63c3d0c1c8e45c4480c49607",
        created_at: Date.now()
    }),
    
]

newEvents.forEach( (event)=> {
    event.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})
// let newEvent = new Event({
//     title: ' this is event 1',
//     description: ' ths is the best event in world',
//     location: 'oman',
//     date: Date.now()

// })


// newEvent.save( (err)=> {
    
//     if(!err) {
//         console.log('record was added')
//     } else {
//         console.log(err)
//     }
    
// })




