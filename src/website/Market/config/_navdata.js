import ROUTES from "@config/_routes";

const stringCombine = (input) => ROUTES.MARKET.base + '/' + input;

export const navdata = [
    {
        id: '1',
        name: 'Home',
        to: ROUTES.MARKET.base,
    },
    {
        id: '2',
        name: 'Sales',
        to: stringCombine(ROUTES.MARKET.sale),
    },
    {
        id: '3',
        name: 'User Account',
        children: [
            {
                id: '11',
                name: 'Setting',
                to: ROUTES.MARKET.base,
                dynamic: false,
            },
            {
                id: '12',
                name: "Orders",
                children: [
                    {
                        id: '31',
                        name: 'Order List',
                        to: stringCombine(ROUTES.MARKET.orders),
                        dynamic: true,
                    },
                    {
                        id: '32',
                        name: "Order Details",
                        to : stringCombine(ROUTES.MARKET.orders),
                        dynamic: true,
                    }
                ]
            },
            {
                id: '13',
                name: "Profile",
                children: [
                    {
                        id: '41',
                        name: 'View Profile',
                        to: stringCombine(ROUTES.MARKET.profile),
                        dynamic: false,
                    },
                    {
                        id: '42',
                        name: "Edit Profile",
                        to : stringCombine(ROUTES.MARKET.profile),
                        dynamic: true,
                    }
                ]
            },
            {
                id: '14',
                name: 'Account Setting',
                to: ROUTES.MARKET.base,
                dynamic: false,
            }
        ]
    },
    {
        id: '4',
        name: 'Shop',
        to: stringCombine(ROUTES.MARKET.shop)
    }
]