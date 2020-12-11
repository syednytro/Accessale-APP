import { Navigation } from "react-native-navigation";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { RNNDrawer } from "react-native-navigation-drawer-extension";
import Wrapper from './Wrapper'
import Splash from "./screens/Splash";
import MainScreen from "./screens/auth/MainScreen";
import Logsign from "./screens/auth/Logsign";
import ForgotPassword from './screens/auth/ForgotPassword'
import UserInfo from "./screens/auth/UserInfol";
import ImagePick from "./component/userprofile/ImagePick";
import AvatarImages from "./component/userprofile/AvatarImages";
import RadioButton from "./component/userprofile/RadioButton";
import ProfileImages from "./component/userprofile/ProfileImages";
import Home from "./screens/Home/Home";
import Overlay from "./app_stack/Overlay";
import App from "./App";
import UserProfile from "./screens/auth/UserProfile";
import UserScreen from "./screens/Home/UserScreen";
import ReportPage from "./component/ReportPage";
import CustomDrawer from "./drawer/CustomDrawer";
import Setting from "./screens/Setting/Setting";
import AddHome from "./screens/Add/AddHome";
import AddForm from "./screens/Add/AddForm";
import AddPreview from "./screens/Add/AddPreview";
import AdsPackage from "./screens/Add/AdsPackage";
import AllPackage from "./screens/Add/AllPackage";
import AdsReview from "./screens/Add/AdsReview";
import AllChat from "./screens/chat/Allchat";
import ChatCall from "./screens/chat/chatCall";
import Messages from "./screens/chat/Messages";
import CustomTopbar from "./component/CustomTopbar";
import Call from "./screens/chat/Call";
import AddSuccess from "./screens/Add/AddSuccess";
import PaymentCard from "./screens/payment/PaymentCard";
import AddCard from "./screens/payment/addCard";
import DeleteCard from "./component/DeleteCard";
import SuccessCreate from "./component/SuccessCreate";
import Checkout from "./screens/payment/checkout";
import ProfileEdit from "./screens/Setting/ProfileEdit";
import HelpDesk from "./screens/Setting/HelpDesk";
import PrivacyPolicy from "./screens/Setting/PrivacyPolicy";
import TermsCondition from "./screens/Setting/TermsCondition";
import About from "./screens/Setting/About";
import Feedback from "./screens/Setting/Feedback";
import BugReport from "./screens/Setting/BugReport";
import PostingAds from "./screens/Setting/PostingAds";
import ViewingProfile from "./screens/Setting/ViewProfile";
import Safety from "./screens/Setting/Safety";
import AdsPost from "./component/Ads/AdsPost";
import AdsImage from "./component/Ads/AdsImage";
import AdsVideo from "./component/Ads/AdsVideo";
import AdsEffective from "./component/Ads/AdsEffective";
import AdsPromote from "./component/Ads/AdsPromote";
import AdsPromoteBenifit from "./component/Ads/AdsPromoteBenifit";
import AdsPromoteCost from "./component/Ads/AdsPrommoteCost";
import AdsPayment from "./component/Ads/AdsPayment";
import CategoryDrawer from "./drawer/CategoryDrawer";
import UserForm from "./screens/Home/Userform";
import Filter from "./screens/Home/Filter";
import BottomTab from "./app_stack/BottomTab";
import AlertNotification from "./screens/auth/Alert-Notification";
import CategoryDetail from "./screens/Home/Category";
import ProductDetail from "./screens/Home/ProductDetail";
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import AdsCategory from "./component/AdsComponent/AddCategory";
import AdsPrice from "./component/AdsComponent/AdsPrice";
import AdsLocation from "./component/AdsComponent/AdsLocation";
import AdsStates from "./component/AdsComponent/AdsState";
import AdsCity from "./component/AdsComponent/AdsCity";
import AdsCountry from "./component/AdsComponent/AdsCountry";
import AdsView from "./screens/Add/AdsView";
import CustomAdTopBar from "./component/AdsComponent/CustomAdTopbar";
import Cards from "./screens/payment/Cards";
import PaymentCheckout from "./screens/payment/PaymentCheckout";
import AllImages from "./screens/Home/AllImages";

Navigation.registerComponent("CustomDrawer", () => gestureHandlerRootHOC(RNNDrawer.create(CustomDrawer)));
Navigation.registerComponent("categorydrawer", () => gestureHandlerRootHOC(RNNDrawer.create(CategoryDrawer)));
Navigation.registerComponent('app', () => App );
Navigation.registerComponent('splash', () =>gestureHandlerRootHOC(Wrapper(Splash)));
Navigation.registerComponent('adsCategory', () =>gestureHandlerRootHOC(Wrapper(AdsCategory)));
Navigation.registerComponent('adslocation', () =>gestureHandlerRootHOC(Wrapper(AdsLocation)));
Navigation.registerComponent('adscountry', () =>gestureHandlerRootHOC(Wrapper(AdsCountry)));
Navigation.registerComponent('adsstate', () =>gestureHandlerRootHOC(Wrapper(AdsStates)));
Navigation.registerComponent('adscity', () =>gestureHandlerRootHOC(Wrapper(AdsCity)));
Navigation.registerComponent('adsPrice', () =>gestureHandlerRootHOC(Wrapper(AdsPrice)));
Navigation.registerComponent('login', () =>gestureHandlerRootHOC(Wrapper(Login)));
Navigation.registerComponent('signup', () =>gestureHandlerRootHOC(Wrapper(SignUp)));
Navigation.registerComponent('overlay', () =>gestureHandlerRootHOC(Overlay));
Navigation.registerComponent('alert-notification', () => AlertNotification)
Navigation.registerComponent('home', () =>gestureHandlerRootHOC(Wrapper(Home)));
Navigation.registerComponent('mainscreen', () => gestureHandlerRootHOC(MainScreen));
Navigation.registerComponent('logsign', () => gestureHandlerRootHOC(Wrapper(Logsign)));
Navigation.registerComponent('forgot', () => gestureHandlerRootHOC(ForgotPassword));
Navigation.registerComponent('userinfo', () => gestureHandlerRootHOC(Wrapper(UserInfo)));
Navigation.registerComponent('imagepick', () => gestureHandlerRootHOC(Wrapper(ImagePick)));
Navigation.registerComponent('paymentcheckout', () => gestureHandlerRootHOC(Wrapper(PaymentCheckout)));
Navigation.registerComponent('adsview', () => gestureHandlerRootHOC(Wrapper(AdsView)));
Navigation.registerComponent('avatar',() =>gestureHandlerRootHOC(AvatarImages))
Navigation.registerComponent('allimages',() =>gestureHandlerRootHOC(AllImages))
Navigation.registerComponent('adtopbar',() =>gestureHandlerRootHOC(Wrapper(CustomAdTopBar)))
Navigation.registerComponent('radio',() =>gestureHandlerRootHOC(Wrapper(RadioButton)))
Navigation.registerComponent('profileimages',() =>gestureHandlerRootHOC(Wrapper(ProfileImages)));
Navigation.registerComponent('userprofile',() =>gestureHandlerRootHOC(Wrapper(UserProfile)));
Navigation.registerComponent('userscreen',() =>gestureHandlerRootHOC(UserScreen));
Navigation.registerComponent('report',() =>gestureHandlerRootHOC(ReportPage));
Navigation.registerComponent('setting',() =>gestureHandlerRootHOC(Wrapper(Setting)));
Navigation.registerComponent('addhome',() =>gestureHandlerRootHOC(Wrapper(AddHome)));
Navigation.registerComponent('addform',() =>gestureHandlerRootHOC(Wrapper(AddForm)));
Navigation.registerComponent('addpreview',() =>gestureHandlerRootHOC(AddPreview));
Navigation.registerComponent('adspackage',() =>gestureHandlerRootHOC(Wrapper(AdsPackage)));
Navigation.registerComponent('allpackage',() =>gestureHandlerRootHOC(AllPackage));
Navigation.registerComponent('adreview',() =>gestureHandlerRootHOC(AdsReview));
Navigation.registerComponent('allchat',() =>gestureHandlerRootHOC(AllChat));
Navigation.registerComponent('chatcall',() =>gestureHandlerRootHOC(ChatCall));
Navigation.registerComponent('messages',() =>gestureHandlerRootHOC(Messages));
Navigation.registerComponent('customtopbar',() =>gestureHandlerRootHOC(CustomTopbar));
Navigation.registerComponent('call',() =>gestureHandlerRootHOC(Call));
Navigation.registerComponent('card',() =>gestureHandlerRootHOC(Cards));
Navigation.registerComponent('addsuccess',() =>gestureHandlerRootHOC(AddSuccess));
Navigation.registerComponent('paymentcard',() =>gestureHandlerRootHOC(Wrapper(PaymentCard)));
Navigation.registerComponent('addcard',() =>gestureHandlerRootHOC(Wrapper(AddCard)));
Navigation.registerComponent('delete',() =>gestureHandlerRootHOC(DeleteCard));
Navigation.registerComponent('sucesscard',() =>gestureHandlerRootHOC(SuccessCreate));
Navigation.registerComponent('checkout',() =>gestureHandlerRootHOC(Checkout));
Navigation.registerComponent('editProfile',() =>gestureHandlerRootHOC(Wrapper(ProfileEdit)));
Navigation.registerComponent('helpdesk',() =>gestureHandlerRootHOC(HelpDesk));
Navigation.registerComponent('privacypolicy',() =>gestureHandlerRootHOC(PrivacyPolicy));
Navigation.registerComponent('termscondition',() =>gestureHandlerRootHOC(TermsCondition));
Navigation.registerComponent('about',() =>gestureHandlerRootHOC(About));
Navigation.registerComponent('feedback',() =>gestureHandlerRootHOC(Feedback));
Navigation.registerComponent('bug',() =>gestureHandlerRootHOC(BugReport));
Navigation.registerComponent('postingads',() =>gestureHandlerRootHOC(PostingAds));
Navigation.registerComponent('viewprofile',() =>gestureHandlerRootHOC(ViewingProfile));
Navigation.registerComponent('safety',() =>gestureHandlerRootHOC(Safety));
Navigation.registerComponent('userform',() =>gestureHandlerRootHOC(UserForm));

Navigation.registerComponent('adspost',() =>gestureHandlerRootHOC(AdsPost));
Navigation.registerComponent('adsimage',() =>gestureHandlerRootHOC(AdsImage));
Navigation.registerComponent('adsvideo',() =>gestureHandlerRootHOC(AdsVideo));
Navigation.registerComponent('adseffective',() =>gestureHandlerRootHOC(AdsEffective));
Navigation.registerComponent('adspromote',() =>gestureHandlerRootHOC(AdsPromote));
Navigation.registerComponent('adspromotebenifit',() =>gestureHandlerRootHOC(AdsPromoteBenifit));
Navigation.registerComponent('adscost',() =>gestureHandlerRootHOC(AdsPromoteCost));
Navigation.registerComponent('adspayment',() =>gestureHandlerRootHOC(AdsPayment));
Navigation.registerComponent('categorydetail',() =>gestureHandlerRootHOC(Wrapper(CategoryDetail)));
Navigation.registerComponent('productdetail',() =>gestureHandlerRootHOC(Wrapper(ProductDetail)));

Navigation.registerComponent('filter',() =>gestureHandlerRootHOC(Filter));
Navigation.registerComponent('bottomtab',() =>gestureHandlerRootHOC(Wrapper(BottomTab)));


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'splash',
                            options: {
                                statusBar: {
                                    backgroundColor: '#fff',
                                    style: 'dark',
                                },
                                topBar: {
                                    visible: false
                                }
                            }
                        }
                    }
                ]
            }
        }
    });
});
