window.onload = function () {
  console.log("DOM loaded");

  var Router = (name, routes) => {
    return {
      name: name,
      routes: routes,
    };
  };

  var myFirstRouter = new Router("myFirstRouter", [
    {
      path: "/",
      name: "root",
    },
    {
      path: "/about",
      name: "about",
    },
    {
      path: "/contact",
      name: "contact",
    },
  ]);
  console.log(myFirstRouter);
};
