import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/logo.svg'
import { viewReducer } from '../redux/reducer'
import { ActionDispatching } from '../redux/dispatching'
import { Pricing } from './Pricing';

export function Nav() {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(selector)
    return (
        <div id='nav-div'>
            <div id='img-div' onClick={ActionDispatching(dispatch).homeView}>
                <img src={logo} alt="logo" />
            </div>
            <div id='links-div'>
                <div class="dropdown">
                    <span class="dropdown-toggle drop-down-label" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Products</span>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="item" onClick={ActionDispatching(dispatch).solutionsView}>Solutions</a></li>
                        <li><a class="item" onClick={ActionDispatching(dispatch).dashboardView}>Dashboard</a></li>
                        <li><a class="item" onClick={ActionDispatching(dispatch).mobileAppView}>Mobile App</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <span class="dropdown-toggle drop-down-label" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Integrations</span>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="item" onClick={ActionDispatching(dispatch).shopifyView}>Shopify</a></li>
                        <li><a class="item" onClick={ActionDispatching(dispatch).wooCommerceView}>WooCommerce</a></li>
                        <li><a class="item" onClick={ActionDispatching(dispatch).customApisView}>Custom APIs</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <span class="dropdown-toggle drop-down-label" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Use Case</span>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="item" onClick={ActionDispatching(dispatch).businessesView}>Businesses</a></li>
                        <li><a class="item" onClick={ActionDispatching(dispatch).SMEsView}>SMEs</a></li>
                    </ul>
                </div>
                <div id='pricing' class='drop-down'>
                    <a onClick={ActionDispatching(dispatch).pricingView} class="item heading drop-down-label">Pricing</a>
                </div>
                <div id='blog' class='drop-down'>
                    <a onClick={ActionDispatching(dispatch).blogView} class="item heading drop-down-label">Blog</a>
                </div>
            </div>
            <div id='shipment-div'>
                <div class="dropdown">
                    <span class="dropdown-toggle drop-down-label" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Track Shipment</span>
                    <ul class="dropdown-menu" id='track-dropdown' aria-labelledby="dropdownMenuButton1">
                        <p>Track your shipment</p>
                        <div class="input-group ">
                            <input type="text" class="form-control" id='track-input' placeholder="Shipment Num" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="track-btn" id="basic-addon2">Track</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div id='logging'>
                <div id='blog' class='drop-down'>
                    <a href='#' class="item heading drop-down-label">Sing In</a>
                </div>
                <div id='sign-up-div'>
                    <button id='sign-up-btn'>
                        Sing Up
                    </button>
                </div>
            </div>
        </div>
    )
}