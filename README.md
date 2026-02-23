<!-- Questions 1 -->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
<!-- Ans 1 -->
getElementById ::	শুধুমাত্র ID দিয়ে (যেমন: myId)	একটি সিঙ্গেল এলিমেন্ট (Object).

getElementsByClassName ::	শুধুমাত্র Class Name দিয়ে (যেমন: myClass)

querySelector ::	যেকোনো CSS Selector (যেমন: #id, .class, div > p)	প্রথম একটি এলিমেন্ট যা শর্ত পূরণ করে

querySelectorAll ::	যেকোনো CSS Selector	একটি স্ট্যাটিক NodeList (সবগুলো এলিমেন্ট)




<!-- Questions 2 -->

2. How do you create and insert a new element into the DOM?


<!-- Ans 2 -->
document.createElement(); 

const myPara = document.createElement("p");
myPara.textContent = "Hello PH tim"; 
myPara.classList.add("my-style"); 



<!-- <!-- Questions 3 --> -->
3. What is Event Bubbling? And how does it work?

<!-- Ans 3 -->

ইভেন্ট বাবলিং (Event Bubbling) হলো DOM-এর একটি মেকানিজম, যেখানে কোনো এলিমেন্টে ইভেন্ট (যেমন: ক্লিক) ঘটলে সেটি প্রথমে ওই এলিমেন্টে ট্রিগার হয় এবং তারপর পর্যায়ক্রমে তার প্যারেন্ট (Parent) এলিমেন্টগুলোর দিকে উপরের দিকে উঠতে থাকে।



