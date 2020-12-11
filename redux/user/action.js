import {
  Product_Category,Ads_Offer,User_Image,User_radio_button,USER_INFO, User_Avatar,User_Avatar_Url,USER_TOKEN
  } from '../types';
  
  export function actionToken(arg) {
    return {
      type: USER_TOKEN,
      payload: arg
    }
  }

  export function actionCategory(arg) {
    return {
      type: Product_Category,
      payload: arg
    }
  }

  export function actionAdsOffer(arg) {
    return {
      type: Ads_Offer,
      payload: arg
    }
  }
  
  export function actionImage(arg) {
    return {
      type: User_Image,
      payload: arg
    }
  }

   export function actionImageAvatar(arg) {
    return {
      type: User_Avatar,
      payload: arg
    }
  }

  export function actionUserAvatarUrl(arg) {
    return {
      type: User_Avatar_Url,
      payload: arg
    }
  }

  export function actionUser(arg) {
    return {
      type: USER_INFO,
      payload: arg
    }
  }

  export function actionRadio(arg) {
    return {
      type: User_radio_button,
      payload: arg
    }
  }

