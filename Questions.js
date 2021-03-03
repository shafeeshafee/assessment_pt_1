// Why does React utilize the virtual-dom?

/* ANSWER:


Performance, it's faster and efficient than updating the real dom, because with the real dom, manipulation is expensive and performance heavy. The virtual dom observes the state and prop changes happening around the app. It's not the real DOM, and so since it's because it's virtual, everytime the state of an application changes, the virtual DOM gets updated instead of the real DOM.

*/

// 2a How is data flowed in React?

/* ANSWER:

Data flows unidirectionally in React. What this basically means is, data flows one way from a parent to a child. In a react app, a component passes the state information down to its child component.

*/

// 2b. Why is React architected this way?

/* ANSWER:

React is architected this way because of the concept of using states in a one-way data binding method, i.e., sending props down. The advantages of this are having more control over your data. It's easier to debug, unlike Angular. It's more efficient because the library knows what each components role are.

*/

// 3. What is the purpose for lifting state up in React? Give an example of this

/* ANSWER:

It could be possible that some other components in your React tree needs to use a part of state, which can raise some issues and complexity. This is what the Redux (which is not a part of React) library attempts to solve. It could be possible that a child component of a React app has a state exclusive to its component. 

*/

// 4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.

/* ANSWER:

Many startups utilize a navbar. In a react app, the best way to do navigate between rendering components is react router dom. With it, you can click on a <Link> renders you a component based on what path you put for it on the App.js Router. This can all be done while having a navbar and footer static to the website.

React router gives the option to have many views inside a single page application. So altough it may seem you clicking on a nav link takes you to another page - with React, it just rerenders on that same view, in essence everything is still working inside the #root div. 


*/

// 5. Can browsers read JSX? Why?

/* ANSWER: 

JSX isn't valid JavaScript. It looks like HTML, but it's not HTML either. It's simply a method of how React allows us to write HTML-looking things  in JavaScript.

Because of that, React utilizes something to parse the code, called Babel. In a technical term, it gets transpiled via Babel so that browsers can read it.

*/

// 6. What is the significance of keys in React?

/* ANSWER:

Keys allow Reac to help it identify which items have changed when we map over a dataset.

Perhaps we would like to delete a todo item off of a todolist, and having a key on the div or li would help us to filter (delete) it out when a person is done with a todo task.

*/

// 7. What is the difference between Props and State?

/* ANSWER:

A state is an observable property that we can control to later manipulate our app. 

For example, to set a state, we can do this:

const [] = useState([
    {id: 'exam', assessment: 1},
    {id: 'website', assessment: 2}
])

And props are variables (information) that are sent down. 

State is also variables, but it is something managed by the component itself. Meaning it is exclusive to the component. Meanwhile, the status of the props also have the power to initialize a state.

In a nutshell, props pass data from parent to child, and state is something only for interactive manipulation of data.

*/

// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant.

// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )

// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

/* ANSWER:

In both codeblocks we are mapping over a set of data.

In the first codeblock, we are using a modern way to implement an anonymous function, which is to use an arrow function. Since the code is simple, we don't have to explicitly say return on it. 

On the second codeblock, it's doing the same function as the first code expression. However, in terms of React, the arrow function prevents issues related to the 'this' keyword. There's no need to bind it. ES6 is the more compatible way to go about doing things for React.


*/

// 9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map()
// Show 3 test runs, with at least 2 edge cases.
// function properNames(names) {

// }

function properNames(names) {
	let capitalized = [];

	for (let name of names) {
		capitalized.push(name.charAt(0).toUpperCase() + name.slice(1));
	}

	return capitalized;
}

console.log(properNames(["jon", "adil", "shafee"]));

// 10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Show 3 test runs, with at least 2 edge cases.

function smallWordsOnly(arr) {
	let newArr = arr.filter((item) => {
		return item.length <= 6;
	});

	return newArr;
}

console.log(smallWordsOnly(["watermelon", "kitty", "shafee", "sixletters", "jonathan"]));
