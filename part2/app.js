// const news = React.createElement("h1", {
//     id:"head"
// }, "hello duniya!")
// const renderElement = ReactDOM.createRoot(document.getElementById("root"))
// renderElement.render(news);
// the work of render is to take the react hading element and make it readable to browser and convert it into a ahtml and make it\


// react element is nothing bu a simple javascript object

// props are children plus attriburte that we pass

// ("h1", {
//    id:"head"
// }, "hello duniya!")     // this is props

// hello duniya is a children 


// how to  create a nested element
 
const newElement = React.createElement(
    "div",
    {id:"one"},
    React.createElement(
        "div",
        {id:"two"}, 
        React.createElement(
            "h1",{}, "heyooo")));
const rend = ReactDOM.createRoot(document.getElementById("root"));
rend.render(newElement);
