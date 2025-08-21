# 🎨 Dynamic Templates Notes & Practice

This folder contains notes and examples on **Dynamic Templating** in Express.js, enabling the creation of dynamic HTML pages rendered on the server.

---

## 🧠 What’s Inside?

This directory covers core concepts and usage of templating engines, including:

- 🏗️ **Template Engines Setup** — Installing and configuring engines like EJS, Pug, Handlebars  
- 📄 **Views Folder Structure** — Organizing templates and partials  
- 🔄 **Rendering Templates** — Sending dynamic data from server to templates  
- 🧩 **Template Syntax** — Using variables, loops, conditionals in templates  
- 🔗 **Layouts & Partials** — Reusing common components across pages  

---

## 📝 Important Notes & Tips

### Template Engine Setup

- Common engines:
  - **EJS:** `npm install ejs`
  - **Pug:** `npm install pug`
  - **Handlebars:** `npm install express-handlebars`
- Set view engine in Express:
  ```js
  app.set('view engine', 'ejs'); // or 'pug', 'hbs', etc.
  app.set('views', './views'); // default folder for templates
- The first argument is the template file name (without extension), second is an object with data.

---
### Template Syntax Examples (EJS)

- Insert variable:
```ejs
<h1>Welcome, <%= user %>!</h1>
```
- Loop through array:
```ejs
<ul>
  <% items.forEach(item => { %>
    <li><%= item %></li>
  <% }) %>
</ul>
```
- Conditional rendering:
```ejs
<% if(user) { %>
  <p>Hello, <%= user %>!</p>
<% } else { %>
  <p>Please log in.</p>
<% } %>
```
---

### Layouts & Partials

- Layouts provide a common page structure (header, footer, etc.)

- Partials are reusable snippets (navbars, footers) included in templates

- Engines like Handlebars and Pug support layouts/partials natively

- In EJS, partials are included with:
```ejs
<%- include('partials/header') %>
```
---

### 🎯 Learning Goals

-  Understand how to configure and use templating engines
-  Pass dynamic data from Express routes to views
-  Use loops, conditionals, and variables in templates
-  Organize templates using layouts and partials
-  Build server-rendered dynamic web pages

---
### 🛠️ Tools & Techniques Used

- ⚙️ Express.js with EJS/Pug/Handlebars

- 🏗️ Modular views and partial templates

- 🔄 Dynamic data binding and rendering

- 🧪 Testing with browser and Postman
---
> 💡 “Dynamic templates make your web app more interactive and responsive by rendering HTML with real-time data on the  server.”

Happy Templating! 🖌️🚀