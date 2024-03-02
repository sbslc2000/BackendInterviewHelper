
const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:id" component={User} />
        </Switch>
        </BrowserRouter>
    );
}