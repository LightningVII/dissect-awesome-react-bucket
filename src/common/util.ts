const navSwitch = (
    props: {
        actions: { setMenuState: Function; setBottomNavState: Function };
        history: { push: Function };
    },
    routers: Array<string>,
    event: Event | any
) => {
    if (event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        props.actions.setBottomNavState({
            selectedIndex: routers.indexOf(href)
        });
        props.history.push(href);
    }

    props.actions.setMenuState({ open: false });
};

export { navSwitch };
