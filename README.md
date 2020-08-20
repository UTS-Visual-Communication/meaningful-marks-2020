# Class Overview for Generative Design and Interactive Image Task

## Week 11
#### Task 1: Generative Poster Task (Time: Approximately 1hr)
First of all you will be leading students through a generative poster task, this will be familiar to you from your first year. This year we are only doing the 'dot and tape' algorithm. We will be giving the students an algorithm, a set of step by step instructions that they themselves will carry out by hand. This is to give them some insight into the generative possibilities of using code to materialise design. How a single algorithm can create a unique compositional variations from the set of rules.

1. Get students into groups of 4-5 and give them a poster and a pack (includes dots, tape and instructions).
1. Get students to tape up or pin their poster to the wall so it is easy for them to work on as a group.
1. Before they begin please prep them for thoughtfully undertaking the task: Although students are following a set of instructions this does not mean that as designers they can carry out the task in a thoughtless manner and just let the algorithm do its thing. As designers they still have important decisions to make. What colours out of what they are given will they use, how might they combine them? And with each step they can think about how they want to be an input into how the algorithm works, will a line this way rather than another way lead to a more successful composition? At want point is the work finished? To get them started thinking about this they can take a look at what is in their kit and think about what colours they might like to use (they don't have to use all of them).
1. Students will need to show some documentation of this task for their reflection. Get them to nominate someone in their group to document some points in their process. They can just do this with a smart phone.
1. Get them to read through the instructions in full before they begin. 
1. As students are working on their poster, please give them feedback or encouragement with how they are going with the task.
1. Once they have all finished please take a moment to have the groups walk around the room and to see what happened with everyone elses posters so they can see the variation from a simple set of instructions.
1. On UTSOnline we have resources available for this brief available in a folder for Meaningful Marks. Get students to download this.
1. There are two code examples they can open up 'poster-factory' and 'sol-le-wit'
1. This year we are using P5.js which is basically a Javascript based 'version' of Processing. You can read a bit about it here https://p5js.org/get-started/.
1. Get the students to open up the index.html of each example in the browser. They can click on the canvas to generate a new compostion.
1. Get them to open up the sketch.js file in Brackets. This is a basic editor where you can edit the code. I have put some comments in the code, where they can edit the parameters and change the outcome. When they have made their edits, they need to save the sketch.js file in the editor and then go back to the index.html file they have open in the brower and refresh it. They should then see the results of how they have edited the code.
1. When students have finished with the kits, please make sure they are packed away neatly! If students have not done this please take some time to fix up the kits after both morning and afternoon studios.

#### Task 2: An Image That Can Change (Drawing with Code)
You will then get you to introdouce them to the second task. For this task they will be drawing a simple visual symbol with code and getting that symbol to change in response to a mouse click. See the brief for this task here https://monicamonin.github.io/meaningfulmarks/text-and-image-I.html
1. A base file for them to build off is also available in the download from UTSOnline, see 'base-file-no-comments' and 'base-file'. 
1. Get them to open base-file's index.html in the browser. When they click the shape will change.
1. Then get them to opne the sketch.js file in the editor. In this file I have all different drawing commands commented out. First of all get them to uncomment point. Save the file, refresh it in the browser.
1. Explain how they the two parameters in the brackets tell P5 where to draw the point on screen. Explaining how the co-ordinate system works. See the 'point' example here for a visual you can use. https://p5js.org/learn/coordinate-system-and-shapes.html. This is also a nice example as they can edit the code in browser and see what happens.
•	Take them through point(), line(), rect(), ellipse(). Just do one command at a time and get them to play around which changing the position and size of the shapes, and seeing what happens.
•	Then if time triangle() https://p5js.org/reference/#/p5/triangle and quad() https://p5js.org/reference/#/p5/quad
•	They are limited to these shapes for creating their simple interactive visual and its change in states.
•	Tell them we will show them colour next week, how to set the fill and the stroke of the shapes. They can set the background of their sketch to any colour but their shape must be greyscale (black and white)
•	During the week they are to come up with a concept for their visual and how it will change. And sketch it down on paper, or in a graphics program.
•	I will also have a grid on paper (available as a PDF on UTSOnline if they lose it) for them to sketch their ideas and how it will be drawn on paper. This will also explain the co-ordinate system!

### Week 12
1. Take students through the colour, fill and stroke commands. Including fill(), stroke(), noFill, noStroke(). Again there is a file in the folder up on UTSOnline from last week. Similar to going through the draw commands last week you can step through the commands with them.
1.	Get them to play around with this using greyscale only i.e: fill(255) (remember greyscale is a single number between 0 (black) and 255 (white)) 
1	Then introduce them to using r,g,b for the background() function to create different colour backgrounds. If they want to work out colours they can type ‘rgb colour picker’ into Google. This brings up Google’s colour picker where they can set the hue of a colour and then adjust its saturation or brightness. The rgb values are shown on the left.
1. For the computer labs we asked them to bring in their  sketch on paper or in a graphics program of their visual form and how it changes. 
1. With your group do a 'pin-up' in class and get each student to discuss their design and what it does (this could be showing their sketch on paper or in a graphics program or if they have started to program it). They may want to edit their design a little in response to any suggestions from you or their peers. 
1. If they have not done a design they can spend time doing one in class. If they have they can start coding up their designs into the base-file structure from last week.
1. You can then spend the rest of class helping them to code their forms
1. At the end can you please ask them to drop a copy of the folder of their final sketch onto the level 3 Dropbox. Name the folder with their name and student number. It can be at the end of class if they are done, or later in the week. They are also to keep a copy of this for the next semester as we will be using it for another workshop in Text and Image 2.
