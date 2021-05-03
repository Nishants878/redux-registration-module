import { createSlice } from "@reduxjs/toolkit";





const usersContainer = createSlice({
    name:"users",
    initialState:{
        userCredentials:[],
        userData:[],
        isLoggedIn:false,
        sessionId:"",
       
    },
    reducers:{
        userCred: (state, action) =>{
            state.userCredentials.push(action.payload);
        },
        userInfo: (state, action) =>{
            state.userData.push(action.payload)
        },
        userStatus: (state, action) =>{
          state.isLoggedIn = action.payload 
        },
        userSessionId: (state, action) =>{
            state.sessionId = action.payload 
          },
          userInfoUpdate: (state, action) =>{
           
            let identificationId = action.payload.uniqueId;
            let existingUser = state.userData.find((user) => user.uniqueId === identificationId)
            if(existingUser){
                existingUser.name = action.payload.name;
                existingUser.address = action.payload.address;
                existingUser.number = action.payload.number;
                existingUser.birthday = action.payload.birthday;
                existingUser.profilePic = action.payload.profilePic;
            }
           
          }
    }

});
export const { userCred, userInfo, userStatus, userSessionId, userInfoUpdate } = usersContainer.actions

export const reducer = usersContainer.reducer;