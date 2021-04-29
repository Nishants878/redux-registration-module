const initialState = {
    user:[],
    UserData:[],
    Logged:false
}

const reducer = (state =initialState, action) =>{

    switch(action.type){
        case "User_Info":
            return{
                ...state,
                user:[...state.user, action.payload]
            };
            case "User_Form":
                return{
                    ...state,
                     UserData:[...state.UserData, action.payload]
                };
                case "User_Logged":
                    return{
                        ...state,
                        Logged: action.payload
                    }
           
            default:
                return state
    }

}

export default reducer