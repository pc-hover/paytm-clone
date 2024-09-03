
## Basic version of PayTM BACKEND
1. Created Routes 
2. jwt config
3. Adding routes for user signup,signin,etc
# Reference to the user in accountSchema means if the user with xxx id does not exist in the user database than the db will not allow account db to perform anything.

Step 10: Transaction database
1. Both edits on account after transfering money needs to be consistent +amount and -amount.

Step 13: 
1. Assuming that the node and mongoose server will never crash which is wrong assumption this is a very naive solution
2. Create a SESSIONS which will ensure either the transaction will happen all together or will never partially happnen in case of any error it will role backand it will solve multiple transaction at same time problem also.

# Axios and Fetch
Axios POST: const response = await axios.get(url,headers); 
                             await axios.post(url,body,headers);
                             await axios.put(url,body,headers);


-CONTINUE: Postman request not handles           



ADD ONS:
1. ADD AN OTP CHECK WHEN USER SIGNUP TO VERIFY THAT THE ENTERED EMAIL IS HIS OR ITS JUST ANY MADUP EMAIL.
2. USE BCRYPT TO STORE THE PASSWOR DIN DATABASE INSTEAD OF PLAIN TEXT USE SALTING ROUNDS ALSO


## Build a basic version of PayTM FRONTEND


2.  In order to send Data to Bavckend i will use Axios.
3. Storing the token in local Storage.

ADDONS: De-bouncing


PROBLEMS :
Balance 
Transfer Money # paytm-clone
