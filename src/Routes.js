import AuthPage from "./pages/AuthPage"
import ForumPage from "./pages/ForumPage"
import PostPage from "./pages/PostPage"
import ProfilePage from "./pages/ProfilePage"
import {
    CATEGORIES_ROUTE,
    FORUM_ROUTE,
    LOGIN_ROUTE,
    POST_ROUTE,
    PROFILE_ROUTE,
    RATING_ROUTE,
    REGISTRATION_ROUTE,
    SETTING_ROUTE
} from "./utils/ConstPath"
import RatingPage from "./pages/RatingPage";
import CategoriesPage from "./pages/CategoriesPage";
import SettingPage from "./pages/SettingPage";

export const authRoutes = [
    {
        path: PROFILE_ROUTE + '/:id',
        Component: <ProfilePage/>
    }
]

export const adminRoutes = [
    {
        path: SETTING_ROUTE,
        Component: <SettingPage/>
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <AuthPage/>
    },
    {
        path: FORUM_ROUTE,
        Component: <ForumPage/>
    },
    {
        path: POST_ROUTE + '/:id',
        Component: <PostPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <AuthPage/>
    },
    {
        path: RATING_ROUTE,
        Component: <RatingPage/>
    },
    {
        path: CATEGORIES_ROUTE,
        Component: <CategoriesPage/>
    }
]