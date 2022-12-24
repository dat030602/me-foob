const homeRouter = require("./Home");
const restaurantsRouter = require("./Restaurants");
const restaurantRouter = require("./Restaurant");
const registerRouter = require("./Register");
const checkoutRouter = require("./Checkout");
const contactRouter = require("./Contact");
const branchRouter = require("./Branch");
const manageCartRouter = require("./ManageCart");
const manageDriverRouter = require("./ManageDriver");
const followOrderRouter = require("./FollowOrder");
const earningTrackingRouter = require("./EarningTracking");
const manageCoopRouter = require("./ManageCoop");
const loginRouter = require("./Login");
<<<<<<< Updated upstream
const ListCoopRouter = require("./ListCoop");
=======
const statisticsRouter = require("./Statistics");
>>>>>>> Stashed changes

function route(app) {
	app.use("/register", registerRouter);
	app.use("/login", loginRouter);
	app.use("/checkout", checkoutRouter);
	app.use("/contact", contactRouter);
	app.use("/list-coop", ListCoopRouter);
	app.use("/branch", branchRouter);
	app.use("/manage-cart", manageCartRouter);
	app.use("/manage-driver", manageDriverRouter);
	app.use("/follow-order", followOrderRouter);
	app.use("/earning-tracking", earningTrackingRouter);
	app.use("/manage-coop", manageCoopRouter);
	app.use("/restaurant", restaurantRouter);
	app.use("/restaurants", restaurantsRouter);
	app.use("/home", homeRouter);
	app.use("/statistics", statisticsRouter);
}

module.exports = route;
