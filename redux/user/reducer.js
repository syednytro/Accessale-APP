import { Ads_Offer,Product_Category,USER_TOKEN, User_Image, User_Avatar,User_Avatar_Url, User_radio_button, USER_INFO } from '../types';

export default function (state = {

  userToken: null,
  userimage: null,
  useravatar: null,
  useravatarurl: null,
  userradio: '',
  productCategory: [],
  userData: {},
  offer : 0

}, action) {
  switch (action.type) {

    case USER_TOKEN:
      return { ...state, userToken: action.payload };

    case Product_Category:
      return { ...state, productCategory: action.payload };

      case Ads_Offer:
      return { ...state, offer: action.payload };

    case User_Image:
      return { ...state, userimage: action.payload };

    case User_Avatar:
      return { ...state, useravatar: action.payload };

    case User_Avatar_Url:
      return { ...state, useravatarurl: action.payload };

    case USER_INFO:
      return { ...state, userData: action.payload };

    case User_radio_button:
      return { ...state, userradio: action.payload };

    default:
      return state;
  }
}