import { viewReducer } from "./reducer";


export function ActionDispatching(dispatch) {
    const actions = viewReducer.actions
    return {
        homeView() {
            dispatch(actions.home())
        },
        solutionsView() {
            dispatch(actions.solutions())
        },
        mobileAppView() {
            dispatch(actions.mobileApp())
        },
        dashboardView() {
            dispatch(actions.dashboard())
        },
        shopifyView() {
            dispatch(actions.shopify())
        },
        wooCommerceView() {
            dispatch(actions.wooCommerce())
        },
        customApisView() {
            dispatch(actions.customAPIs())
        },
        SMEsView() {
            dispatch(actions.SMEs())
        },
        businessesView() {
            dispatch(actions.businesses())
        },
        pricingView() {
            dispatch(actions.pricing())
        },
        blogView() {
            dispatch(actions.blog())
        }
    }
}