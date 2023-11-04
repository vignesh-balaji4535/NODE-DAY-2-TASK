1.CREATE A ROOM WITH....
<---------POST------>https://hall-booking-api-3ubk.onrender.com/postroom<-----ENDPOINTS----->
<---------GET------>https://hall-booking-api-3ubk.onrender.com/getroom<-----ENDPOINTS----->
postman document={
"id" : 1, [ PRIMARY KEY ]
"room_name": "a-block-2",
"seats" : 7,
"price_1Hrs" : 400,
"amenities" : ["fan","bed"]
}
----------------------------------------------------------------------------------------
2.BOOKING A ROOM WITH...
<------POST------>https://hall-booking-api-3ubk.onrender.com/postbooking<-----ENDPOINTS----->
<------GET------>https://hall-booking-api-3ubk.onrender.com/getbooking<-----ENDPOINTS----->
postman document={
"customer_name" : "VIGNESH",
"customer_id" : "",
"start_time" : "10am",
"end_time" : "12am",
"booking_status" : true,
"room_id" : 1, [ FOREIGN KEY ]
"booking_id" : 1003
}
----------------------------------------------------------------------------------------------
3.LIST ALL ROMM WITH BOOKED DATA...
<----GET-----https://hall-booking-api-3ubk.onrender.com/getbookedroom<----ENDPOINTS----->
---------------------------------------------------------------------------------------

4.LIST ALL CUSTOMERS WITH BOOKED DATA ...
<-----GET----->https://hall-booking-api-3ubk.onrender.com/getbookedcustomer<-----ENDPOINTS----->
-------------------------------------------------------------------------------------------------------------

5.LIST HOW MANY TIMES A CUSTOMER BOOK'S A ROOM.....
<-----GET----->https://hall-booking-api-3ubk.onrender.com/bookingcount<-----ENDPOINTS----->
----------------------------------------------------------------------------------------------
