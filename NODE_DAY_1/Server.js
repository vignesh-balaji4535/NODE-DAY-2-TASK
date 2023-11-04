const express=require("express");
const bodyParser=require("body-parser");
const PORT=3000;
const App=express();
App.use(bodyParser.json());

const Room=[];
const Booking=[];



// creating a room with ...
App.post("/postroom", (req,res)=>{

        let newRoom=req.body;
        let allow=true;
 if(!newRoom.id||!newRoom.room_name||!newRoom.seats||!newRoom.price_1Hrs||!newRoom.amenities){
      return  res.status(500).send("NEED ALL DEATIALS FOR CREATING A ROOM --SOME FEILD'S MISSING!!!")
    }

    Room.map(room=>{
        if(room.id===newRoom.id&&room.room_name===newRoom.room_name){
         allow=false;
        return    res.status(500).send("ROOM ID ALREADY EXISIST !!!")
        }
    })
    if(allow){
        Room.push(newRoom);
        res.status(200).send("ROOM CREATED SUCCESSFULLY")
    }
   
    
})

App.get("/getroom",(req,res)=>{
    res.json(Room)
})
//booking a room with

App.post("/postbooking",(req,res)=>{
    const newBooking=req.body;
    newBooking.date=Date().toString();
    newBooking.customer_id=Math.random();

 if(!newBooking.customer_name||!newBooking.start_time||!newBooking.end_time||!newBooking.booking_status||!newBooking.room_id||!newBooking.booking_id){
    return  res.status(500).send("NEED ALL DEATIALS FOR BOOKING A ROOM --SOME FEILD'S MISSING!!!")

    }

    
    else{
        let allow=true;
        Booking.map(booked=>{
            if(booked.room_id==newBooking.room_id&&(booked.start_time===newBooking.start_time&&booked.end_time===newBooking.end_time)){;
                allow=false;
            }           
        });
        if(allow){
            Booking.push(newBooking);
            return    res.status(200).send("ROOM BOOKED SUCCESSFULLY !!!") 
        }
        else{
            return  res.status(500).send("ROOM ID ALREADY EXISIST !!!-PLEASE CHANGE TIMING OR ROOM");
        }
    
    }

})


App.get("/getbooking",(req,res)=>{
res.json(Booking)
})

//list all room with booked data

App.get("/getbookedroom",(req,res)=>{

    const bookedRooms=[];
let allow=false;
Booking.map(booking=>{
    
    Room.map(room=>{ 
        if(room.id===booking.room_id){
            allow=true;
        return    booking.room_name=room.room_name;
 }})
 
if(allow){
    bookedRooms.push(booking);
}
    
})
res.json(bookedRooms)


})

//list all customer with booked data

App.get("/getbookedcustomer",(req,res)=>{

const bookedCustomer=[];

    Booking.map(booking=>{
let custom={
    customer_name:booking.customer_name,
    date:booking.date,
    start_time:booking.start_time,
    end_time:booking.end_time       
}
Room.map(room=>{ 
    if(room.id===booking.room_id){
        custom.room_name= room.room_name;}}),
bookedCustomer.push(custom);
    })
res.json(bookedCustomer);
})

//list how many times the customer booked a room

App.get("/bookingcount",(req,res)=>{
    const no_of_times_booked=[];


    Booking.map(booking=>{

let custom={
    customer_name:booking.customer_name,
    Date:Date().toString(),
    start_time:booking.start_time,
    end_time:booking.end_time,
    booking_id:booking.booking_id,
    booking_status:booking.booking_status ,
    date:booking.date,

}
Room.map(room=>{ 
    if(room.id===booking.room_id&&(room.start_time===booking.start_time&&room.end_time===booking.end_time)){
        custom.room_name= room.room_name;}}),
no_of_times_booked.push(custom);
    })
res.json(no_of_times_booked);
})

App.listen(PORT,()=>{
    console.log("SERVER CONNECTED")
})