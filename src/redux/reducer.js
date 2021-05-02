import { createSlice } from "@reduxjs/toolkit";





const usersContainer = createSlice({
    name:"users",
    initialState:{
        userCredentials:[],
        userData:[],
        isLoggedIn:false,
        sessionId:""
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
              const { name, address, number, birthday, profilePic, uniqueId } = action.payload;
              const existingUser = state.userData.find((user) => user.uniqueId === uniqueId);
              if(existingUser){
                  existingUser.name = name;
                  existingUser.address = address;
                  existingUser.number = number;
                  existingUser.profilePic = profilePic;
                  existingUser.birthday = birthday
              }
          }
    }

});
export const { userCred, userInfo, userStatus, userSessionId, userInfoUpdate } = usersContainer.actions

export const reducer = usersContainer.reducer;