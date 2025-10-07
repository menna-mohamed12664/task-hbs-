const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "hbs");

const pathDirectory = path.join(__dirname, "../template/views");
app.set("views", pathDirectory);

var hbs = require("hbs");
const { title } = require("process");
const pathPartails = path.join(__dirname, "../template/views/partials");
hbs.registerPartials(pathPartails);

// /
app.get("/", (req, res) => {
  res.render("index", {
    logo: "home page",
    title: "Programmed using HBS",
    desc: "Beautiful language and easy to learn",
  });
});

// about
app.get("/about", (req, res) => {
  res.render("about", {
    logo: "about page",
    name: "HBS learning methods",
    arr: [
      {
        place: "📘 Handlebars الموقع الرسمي",
        url: "https://handlebarsjs.com/guide/",
      },
      {
        place: "🎓 دورات مجانية على Udemy و Codeacademy",
        url: "https://www.udemy.com/",
      },
      {
        place: "🛡️ مقال Xygeni عن الاستخدام الآمن",
        url: "https://xygeni.io/ar/blog/handlebars-js-safe-usage-to-avoid-injection-flaws/",
      },
    ],
  });
});

// users
app.get("/users", (req, res) => {
  res.render("users", {
    logo: "users page",
    arr: [
      { name: "menna", age: "21", city: "mansoura" },
      { name: "manar", age: "22", city: "cairo" },
      { name: "amany", age: "19", city: "mansoura" },
      { name: "khaled", age: "15", city: "alex" },
    ],
  });
});

app.get(/.*/, (req, res) => {
  res.render("404", {
    type: "Erorr",
    logo: " Erorr 404",
    title: "الصفحة مش موجودة",
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
