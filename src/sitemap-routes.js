import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
        <Route exact path="/login" />
        <Route exact path="/search" />
        <Route exact path="/user/:oauthid" />
        <Route exact path="/" />
        <Route exact path="/shubham-chavan" />
        <Route exact path="/article/:topic" />
    </Route>
);