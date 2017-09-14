const navSwitch = (
    props: {
        actions: { setMenuState: Function; setBottomNavState: Function };
        history: { push: Function };
    },
    routers: Array<string>,
    event: Event | any
) => {
    event.preventDefault();
    props.actions.setMenuState({ open: false });
    const href = event.currentTarget.getAttribute('href');
    props.actions.setBottomNavState({
        selectedIndex: routers.indexOf(href)
    });
    props.history.push(href);
};

export {
    navSwitch
};
