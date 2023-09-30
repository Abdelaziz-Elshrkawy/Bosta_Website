import { useDispatch } from 'react-redux'
import logo from '../assets/logo.svg'
import { viewReducer } from '../redux/reducer'
import { ActionDispatching } from '../redux/dispatching'


export function Footer() {
    const dispatch = useDispatch()

    return (
        <div id='footer-div'>
            <footer>
                <div id='img-div'>
                    <img src={logo} alt="logo" />
                </div>
                <div id='footer-links'>
                    <div id='products-footer'>
                        <p>Products</p>
                        <a onClick={ ActionDispatching(dispatch).solutionsView}>Solutions</a>
                        <a onClick={ActionDispatching(dispatch).dashboardView}>Dashboard</a>
                        <a onClick={ActionDispatching(dispatch).mobileAppView}>Mobile App</a>
                    </div>
                    <div id='integration-footer'>
                        <p>Integrations</p>
                        <a onClick={ActionDispatching(dispatch).shopifyView}>Shopify</a>
                        <a onClick={ActionDispatching(dispatch).wooCommerceView}>WooCommerce</a>
                        <a onClick={ActionDispatching(dispatch).customApisView}>Custom APIs</a>
                    </div>
                    <div id='use-case-footer'>
                        <p>Use Cases</p>
                        <a onClick={ActionDispatching(dispatch).SMEsView}>SMEs</a>
                        <a onClick={ActionDispatching(dispatch).businessesView}>Businesses</a>
                    </div>
                    <div id='company-footer'>
                        <p>Company</p>
                        <a>About us</a>
                        <a>Businesses</a>
                        <a>Pricing</a>
                        <a>FAQ</a>
                        <a>Help Center</a>
                    </div>
                    <div id='track-shipment-footer'>
                        <a id='track-shipment-a'>Track Shipment</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}