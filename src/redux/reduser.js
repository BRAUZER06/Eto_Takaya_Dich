//interface State {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }

// const initState: State[] = [
//   {
//     id: 0,
//     name: "",
//     username: "",
//     email: "",
//     address: {
//       street: "",
//       suite: "",
//       city: "",
//       zipcode: "",
//       geo: {
//         lat: "",
//         lng: "",
//       },
//     },
//     phone: "",
//     website: "",
//     company: {
//       name: "",
//       catchPhrase: "",
//       bs: "",
//     },
//   },
// ];

// export const getUserReducer = (state = initState, action:any):any => {
//   switch (action.type) {
//     case "GET_USER_INFO":
//       return { ...state, state: action.payload };

//     default:
//       return state;
//   }
// };
