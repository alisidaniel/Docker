

const routes = app => {
    app.get("/user", async (req, res, next) => {
        return res.json({message: "hello user route is working..."});
    });
}

export default routes;