import { createSlice } from "@reduxjs/toolkit";
import { Home } from "../components/Home";
import { Solutions } from "../components/Solutions";
import { DashBoard } from './../components/DashBoard';
import { MobileApp } from "../components/Mobile_App";
import { Shopify } from './../components/Shopify';
import { WooCommerce } from "../components/WooCommerce";
import {CustomAPIs} from '../components/Custom_APIs'
import { SMEs } from './../components/SMEs';
import { Businesses } from './../components/Businesses';
import { Pricing } from "../components/Pricing";
import { Blog } from "../components/Blog";


export const viewReducer = createSlice({
    name: 'view',
    initialState: <Home />,
    reducers: {
        home() {
            return <Home />
        },
        solutions() {
            return <Solutions />
        },
        dashboard() {
            return <DashBoard />
        },
        mobileApp() {
            return <MobileApp />
        },
        shopify() {
            return <Shopify />
        },
        wooCommerce() {
            return <WooCommerce />
        },
        customAPIs() {
            return <CustomAPIs />
        },
        SMEs() {
            return <SMEs />
        },
        businesses() {
            return <Businesses />
        },
        pricing() {
            return <Pricing />
        },
        blog() {
            return <Blog />
        },
    }
})