const PREFIX = "user/";
const SIGN_UP_IN = `${PREFIX}SIGN_UP_IN`;
const SIGN_OUT = `${PREFIX}SIGN_OUT`;
const UPDATE_INFO = `${PREFIX}UPDATE_INFO`;
const FAILED_LOGIN = `${PREFIX}FAILED_LOGIN`;
const INITIAL_FETECHED_USER_POST = `${PREFIX}INITIAL_FETECHED_USER_POST`;
export const signUpInSetState = (payload) => ({ type: SIGN_UP_IN, payload });
export const signOutSetState = (payload) => ({ type: SIGN_OUT, payload });
export const initialFetchedUserPost = (payload) => ({
  type: INITIAL_FETECHED_USER_POST,
  payload
});
export const updateUserInfoSetState = (payload) => ({ type: UPDATE_INFO, payload });
export const failedLoginSetState = (payload) => ({ type: FAILED_LOGIN, payload });

const initialValue = {
  currentUser: false,
  email: "",
  uid: "",
  userName: "",
  photoUrl: "",
  intro: "",
  comment: [
    {
      category: "",
      imgurl: "",
      text: "",
      date: ""
    }
  ]
};

const user = (state = initialValue, action) => {
  switch (action.type) {
    case SIGN_UP_IN:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return initialValue;
    case UPDATE_INFO:
      return action.payload;
    case INITIAL_FETECHED_USER_POST:
      return { ...state, comment: action.payload };
    case FAILED_LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default user;
