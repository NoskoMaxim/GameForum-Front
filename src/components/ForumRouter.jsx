import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../index";
import {adminRoutes, authRoutes, publicRoutes, se} from "../Routes";
import { FORUM_ROUTE } from '../utils/ConstPath.js';

export default function ForumRouter() {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {user.isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path="*" element={<Navigate to ={FORUM_ROUTE} />}/>
        </Routes>
    );
}