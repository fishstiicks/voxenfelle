# voxenfelle

## Database Schema Design
![image](https://github.com/user-attachments/assets/87cc2a77-7626-45b6-ab52-a8047853adcd)

## Wireframe
![0108 vxf wireframe](https://github.com/user-attachments/assets/3cf74090-5a9b-4dc6-aa13-2c4e3aab54ef)

## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

- Request: endpoints that require authentication
- Error Response: Require authentication

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Authentication required"
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

- Request: endpoints that require proper authorization
- Error Response: Require proper authorization

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Forbidden"
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

- Require Authentication: false
- Request

  - Method: GET
  - Route path: /session
  - Body: none

- Successful Response when there is a logged in user

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": {
        "id": 1,
        "email": "john.smith@gmail.com",
        "username": "JohnSmith"
      }
    }
    ```

- Successful Response when there is no logged in user

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": null
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

- Require Authentication: false
- Request

  - Method: POST
  - Route path: /session
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "credential": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": {
        "id": 1,
        "email": "john.smith@gmail.com",
        "username": "JohnSmith"
      }
    }
    ```

- Error Response: Invalid credentials

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Invalid credentials"
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

- Require Authentication: false
- Request

  - Method: POST
  - Route path: /users
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": {
        "id": 1,
        "email": "john.smith@gmail.com",
        "username": "JohnSmith"
      }
    }
    ```

- Error response: User already exists with the specified email or username

  - Status Code: 500
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "User already exists",
      "errors": {
        "email": "User with that email already exists",
        "username": "User with that username already exists"
      }
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "email": "Invalid email",
        "username": "Username is required"
      }
    }
    ```

# CHARACTERS
### Get all characters
Returns all the characters.

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /characters
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Characters": [
        {
          "id": 1,
          "mun": "emil",
          "state": "npc",
          "picrew": "picrew url",
          "name": "timmy",
          "full_name": "timmy turner",
          "pronouns": "he/him",
          "height": 160,
          "lineage": "noble",
          "source": "aura",
          "hexcode": "#FFFFF",
          "weapon": "sword",
          "power": "antigravity",
          "reputation": "loser",
          "class": "2-A",
          "dorm": 104,
          "str": 3,
          "dex": 2,
          "con": 2,
          "cha": 0,
          "int": 1,
          "mag": 1,
          "soulbond": false,
          "souldrop": false,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
      ]
    }
    ```


### Create a character

Creates and returns a new character.

* Require Authentication: true
* Request
  * Method: POST
  * Route path: /characters/new
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "state": "npc",
          "picrew": "picrew url",
          "name": "timmy",
          "full_name": "timmy turner",
          "pronouns": "he/him",
          "height": 160,
          "lineage": "noble",
          "source": "aura",
          "hexcode": "#FFFFF",
          "weapon": "sword",
          "power": "antigravity",
          "reputation": "loser",
          "class": "2-A",
          "dorm": 104,
          "str": 3,
          "dex": 2,
          "con": 2,
          "cha": 0,
          "int": 1,
          "mag": 1,
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "id": 1,
          "mun": "emil",
          "state": "npc",
          "picrew": "picrew url",
          "name": "timmy",
          "full_name": "timmy turner",
          "pronouns": "he/him",
          "height": 160,
          "lineage": "noble",
          "source": "aura",
          "hexcode": "#FFFFF",
          "weapon": "sword",
          "power": "antigravity",
          "reputation": "loser",
          "class": "2-A",
          "dorm": 104,
          "str": 3,
          "dex": 2,
          "con": 2,
          "cha": 0,
          "int": 1,
          "mag": 1,
          "soulbond": false,
          "souldrop": false,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "state": "state is required",
        "picrew": "picrew link is required"
        "name": "name is required",
        "full_name": "full name is required",
        "pronouns": "pronouns are required",
        "height": "height in cm are required",
        "lineage": "lineage is required",
        "source": "source is required",
        "hexcode": "hexcode is required",
        "weapon": "weapon is required",
        "power": "power is required",
        "reputation": "reputation is required",
        "class": "class is required",
        "dorm": "dorm is required",
        "str": "strength stat is required",
        "dex": "dexterity stat is required",
        "con": "constitution stat is required",
        "cha": "charisma stat is required",
        "int": "intelligence stat is required",
        "mag": "magic stat is required",
      }
    }
    ```
  
### Edit a character

Updates and returns an existing character.

* Require Authentication: true
* Require proper authorization: character must belong to the current user
* Request
  * Method: PUT
  * Route path: characters/:name/update
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "state": "npc",
          "picrew": "picrew url",
          "name": "timmy",
          "full_name": "timmy turner",
          "pronouns": "he/him",
          "height": 160,
          "lineage": "noble",
          "source": "aura",
          "hexcode": "#FFFFF",
          "weapon": "sword",
          "power": "antigravity",
          "reputation": "loser",
          "class": "2-A",
          "dorm": 104,
          "str": 3,
          "dex": 2,
          "con": 2,
          "cha": 0,
          "int": 1,
          "mag": 1,
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "id": 1,
          "mun": "emil",
          "state": "npc",
          "picrew": "picrew url",
          "name": "timmy",
          "full_name": "timmy turner",
          "pronouns": "he/him",
          "height": 160,
          "lineage": "noble",
          "source": "aura",
          "hexcode": "#FFFFF",
          "weapon": "sword",
          "power": "antigravity",
          "reputation": "loser",
          "class": "2-A",
          "dorm": 104,
          "str": 3,
          "dex": 2,
          "con": 2,
          "cha": 0,
          "int": 1,
          "mag": 1,
          "soulbond": false,
          "souldrop": false,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "state": "state is required",
        "picrew": "picrew link is required"
        "name": "name is required",
        "full_name": "full name is required",
        "pronouns": "pronouns are required",
        "height": "height in cm are required",
        "lineage": "lineage is required",
        "source": "source is required",
        "hexcode": "hexcode is required",
        "weapon": "weapon is required",
        "power": "power is required",
        "reputation": "reputation is required",
        "class": "class is required",
        "dorm": "dorm is required",
        "str": "strength stat is required",
        "dex": "dexterity stat is required",
        "con": "constitution stat is required",
        "cha": "charisma stat is required",
        "int": "intelligence stat is required",
        "mag": "magic stat is required",
      }
    }
    ```

* Error response: Couldn't find a character with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "character couldn't be found"
    }
    ```

### Delete a character

Deletes an existing character.

* Require Authentication: true
* Require proper authorization: character must belong to the current user
* Request
  * Method: DELETE
  * Route path: characters/:name
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find a character with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "character couldn't be found"
    }
    ```


# ART
### Get all art

Returns all art.

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /art
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Art": [
        {
          "id": 1,
          "mun": "emil",
          "url": "url",
          "character": "timmy",
          "reference": true
        }
      ]
    }
    ```

### Get art by character

Returns all art of character.

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /art/:characterName
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Art": [
        {
          "id": 1,
          "mun": "emil",
          "url": "url",
          "character": "timmy",
          "reference": true
        }
      ]
    }
    ```

### Get art by user

Returns all art by user

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /art/:user
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Art": [
        {
          "id": 1,
          "mun": "emil",
          "url": "url",
          "character": "timmy",
          "reference": true
        }
      ]
    }
    ```


### Create art

Creates and returns new art.

* Require Authentication: true
* Request
  * Method: POST
  * Route path: /art/new
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "url": "url",
          "character": "timmy",
          "reference": true
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {
          "id": 1,
          "mun": "emil",
          "url": "url",
          "character": "timmy",
          "reference": true,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "url": "url is required",
        "character": "character is required",
        "reference": "reference is required",
      }
    }
    ```
  
### Edit art

Updates and returns existing art.

* Require Authentication: true
* Require proper authorization: character must belong to the current user
* Request
  * Method: PUT
  * Route path: art/:id/update
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "url": "url",
          "character": "tom",
          "reference": true
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "id": 1,
          "mun": "emil",
          "url": "url",
          "character": "tom",
          "reference": true,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-20 20:39:36",
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "url": "url is required",
        "character": "character is required",
        "reference": "reference is required",
      }
    }
    ```

* Error response: Couldn't find art with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "art couldn't be found"
    }
    ```

### Delete art

Deletes art.

* Require Authentication: true
* Require proper authorization: art must belong to the current user
* Request
  * Method: DELETE
  * Route path: art/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find art with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "art couldn't be found"
    }
    ```


# CLUBS
### Get all clubs

Returns all clubs.

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /clubs
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Clubs": [
        {
          "id": 1,
          "name": "equestrian club",
          "description": "horses horses and more horses",
          "creator": "emil",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
      ]
    }
    ```


### Create club

Creates and returns new club.

* Require Authentication: true
* Request
  * Method: POST
  * Route path: /clubs/new
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "name": "equestrian club",
          "description": "horses horses and more horses",
          "creator": "emil",
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {
          "id": 1,
          "name": "equestrian club",
          "description": "horses horses and more horses",
          "creator": "emil",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "name": "name is required",
        "description": "description is required",
      }
    }
    ```
  
### Edit club

Updates and returns existing club.

* Require Authentication: true
* Require proper authorization: character must belong to the current user
* Request
  * Method: PUT
  * Route path: art/:id/update
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "name": "equestrian club",
          "description": "only ponies now",
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "id": 1,
          "name": "equestrian club",
          "description": "only ponies now",
          "creator": "emil",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "name": "name is required",
        "description": "description is required",
      }
    }
    ```

* Error response: Couldn't find club with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "club couldn't be found"
    }
    ```

### Delete club

Deletes club.

* Require Authentication: true
* Require proper authorization: club must belong to the current user
* Request
  * Method: DELETE
  * Route path: clubs/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find club with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "club couldn't be found"
    }
    ```

    
# MEMBERSHIPS
### Get memberships by club

Returns all memberships for club.

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /clubs/:clubName/members
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Memberships": [
        {
          "id": 1,
          "club": "equestrian club",
          "character": "timmy",
        }
      ]
    }
    ```
    
### Get memberships by character

Returns all memberships for character.

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /characters/:characterName/members
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Memberships": [
        {
          "id": 1,
          "club": "equestrian club",
          "character": "timmy",
        }
      ]
    }
    ```


### Create membership

Creates and returns new membership.

* Require Authentication: true
* Request
  * Method: POST
  * Route path: /clubs/:clubName/:characterName
  * Headers:
    * Content-Type: application/json
  * Body: none

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {
          "id": 1,
          "club": "equestrian club",
          "character": "timmy",
        }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
        "club": "club is required",
        "character": "character is required",
      }
    }
    ```

### Delete membership

Deletes membership.

* Require Authentication: true
* Require proper authorization: membership must belong to the current user
* Request
  * Method: DELETE
  * Route path: clubs/:clubName/:characterName
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find club with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "membership couldn't be found"
    }
    ```

# RELATIONSHIPS
### Get relationships by character
Returns all relationships for character.

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /characters/:characterName/relationships
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Relationships": [
        {
          "id": 1,
          "you": "timmy",
          "them": "wanda",
          "special": "soulbond",
          "description": "i hate you",
          "lastUpdate": "2021-11-19 20:39:36",
        }
      ]
    }
    ```
    
### Get relationship between two characters

Returns relationship between two characters.

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /characters/:characterName/relationships/:otherCharacterName
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Relationships": [
        {
          "id": 1,
          "you": "timmy",
          "them": "wanda",
          "special": "soulbond",
          "description": "i hate you",
          "lastUpdate": "2021-11-19 20:39:36",
        }
      ]
    }
    ```


### Create relationship

Creates and returns new relationship.

* Require Authentication: true
* Request
  * Method: POST
  * Route path: /characters/:characterName/relationships/:otherCharacterName
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "special": "soulbond",
          "description": "i hate you"
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {
          "id": 1,
          "you": "timmy",
          "them": "wanda",
          "special": "soulbond",
          "description": "i hate you",
          "lastUpdate": "2021-11-19 20:39:36",
        }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
          "special": "soulbond",
          "description": "description is required",
      }
    }
    ```

### Edit relationship

Updates and returns existing relationship

* Require Authentication: true
* Require proper authorization: relationship must belong to the current user
* Request
  * Method: PUT
  * Route path: /characters/:characterName/relationships/:otherCharacterName
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "special": "soulbond",
          "description": "you smell weird",
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "id": 1,
          "you": "timmy",
          "them": "wanda",
          "special": "soulbond",
          "description": "you smell weird",
          "lastUpdate": "2021-11-19 20:39:36",
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
      "errors": {
          "special": "soulbond",
          "description": "description is required",
      }
    }
    ```

* Error response: Couldn't find relationship with the specified ids
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "relationship couldn't be found"
    }
    ```

### Delete relationship

Deletes relationship

* Require Authentication: true
* Require proper authorization: relationship must belong to the current user
* Request
  * Method: DELETE
  * Route path: characters/:characterName/relationships/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

* Error response: Couldn't find relationship with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "membership couldn't be found"
    }
    ```

# ATTENDANCE
### Get attendance for user
Returns all attendances for user

* Require Authentication: false
* Request
  * Method: GET
  * Route path: /attendance
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Attendances": [
        {
          "id": 1,
          "username": "emil",
          "story": "an audience",
          "createdAt": "2021-11-19 20:39:36",
        }
      ]
    }
    ```

### Create attendance

Creates and returns new attendance.

* Require Authentication: true
* Request
  * Method: POST
  * Route path: /story/:storyName
  * Headers:
    * Content-Type: application/json
  * Body: none

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {
          "id": 1,
          "username": "emil",
          "story": "an audience",
          "createdAt": "2021-11-19 20:39:36",
        }
    ```
