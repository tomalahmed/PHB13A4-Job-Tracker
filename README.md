Questions:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:
        The main difference is what they return and how they find elements.
   getElementById: it's a call for ID selector for that it can catch the ID in html and change it.
   getElementsByClassName: it's the same as ID but it will catch the class attributes.
   querySelector / querySelectorAll : it's basically usedd to catch the selectors such as ID, class, tag, or complex relationships.
   

   
2. How do you create and insert a new element into the DOM?
   Answer:
       Create a dom: to create DOM we need to add the element into the memory  [ createElement() ]  ` EX: const myTag = document.createElement('h1');`
   then we have to tell what will be inside the memory [ textContent / innerHTML ] : `EX: myTag.textContent = "Hello Student!"; myTag.classList.add('my-style');`
   and then When Inserting the element we have to tell where will the elements insert.. either in top or last. [ appendChild() / prepend() ]
   for insert into top:` EX: parent.prepend(myTag);`
   for insert in last: ` EX: parent.appendChild(myTag);`
   

   
3. What is Event Bubbling? And how does it work?
   Answer:
       Event Bubbling: it's a process that after get clicks it's can get to the parent
   Working Process:
   You need a Button inside a Div. Then,
   The Target: When you click the Button, the click happens there first.
   The Bubble: The click then moves up to the Div.
   The Top: Finally, it moves up to the Body and the Document.
   if you want to click and don't want to go on parrent then have to use- `event.stopPropagation(); `

   
4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:
       it's a technique where we can attach single listener to parent elements insted of adding multiple listeners into child.
   it iss useful because of it is clean,memory efficient and have dynamic element.
   

5. What is the difference between preventDefault() and stopPropagation() methods?
  Answer:
      The main difference is  preventDefault() -Stops the default browser behavior associated with an event.
and stopPropagation() -stops the event from moving through the DOM.


` The END `
