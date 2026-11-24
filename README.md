# Collar
<b>About:-</b>
Collar is an app for independents and self employeed indviduals working with project based/ freelance/gig based environments.
 
Collars goal is to simplify the administrative side of independent work by making documentation, tracking, and organization easier and more accessible.

Instead of spending hours at the end of each month sorting through scattered notes, disorganized logs, and forgotten work details, Collar aims to make documentation a continuous and effortless part of the working day.


## App functionalities/ actions user can preform:-

-   user can choose app language
-   user can log in with gmail/android/apple Oauth OR Local account
-   Enable account recovery
-   user can have multiple sessions on different devices per account
-   user has to verify email to activate account 
-   draft terms of usage and service
-   user can log and document work/gig/project/ on a per project basis
-   user can view thier data on a dashboard based on a weekly/monthely/annuall/ all times basis
-   user can view/download/share pdf file format with others via whatsapp and other apps
-   user can collect and agregate work data based on set dates
-   user prompted to set reminder to close out work/ project
-   user can set and view work locations per project
-   user can designate other users as workers that day

## Expected business data entities
```json 
    User: 
        { 
            id,
            first_name,
            last_name,
            email,
            recovery_Email,
            varified,
            DOB, //=> date of birth
            googleId,
            appleId,
            hashed_password,
            createdAt,
        },
    Role:{
            id,
            name,
            discription
        },
    team_member:{
            id,
            team_id,
            user_id,
            role_id,
            joined_at,
        },
    Team:{
            id,
            name,
            manager_id,
            created_at,
        },
    Location:{
            id,
            address_name,
            longitude,
            latitude,
            created_at,
        },
    work_type:{
            id,
            name,
            discreption,
            preset_meta:{}
        },
    project:{
            id,
            name => if no name givin assign (start date + workType.name )as default name,
            work_type,
            start_date,
            end_date,
            duration,
            Locations[],
            teams[],
            Entries[]
        },
    Work_entery:{
            id
            project_id
            user_id
            title,
            discription,
            start_time
            end_time,
            duration,
            meta:{},

        },
    Reminders:{}
```
