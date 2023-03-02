### API documentations

#### route "/auth/student" 
- Student Sign Up ```/signup``` (POST)
  - required fields :- { name, email, password, institute }
- Student Sign In ```/signin``` (POST)
  - required fields :- { email, password }
- Student Sign Out ```signout``` (GET)


#### route "/staff"
- Get All Students *Requires signin* ```/allStudents``` (GET)
- Student Sign Up ```/signup``` (POST)
  - required fields :- { name, email, password, secretkey, institute }
- Student Sign In ```/signin``` (POST)
  - required fields :- { email, password }
- Student Sign Out ```signout``` (GET)


### route "/docs"
- Data uploading by students (STILL IN DEVELOPMENT)