# drag-drop-library

**Created file**

1. Start building library
    - created MiniLib.js, modular, reusable helper library like jQuery
    - Functions created: makeDraggable() and showCoordinates() which are wrapped inside MiniLib
    -They are exposed and accessed with MiniLib.makeDraggable() similar to jQuery type chaining.

2. Created a text file that contains my Javascript functions 

    - Modularized code into multiple files:

        - MiniLib.js --> helpers
        - Utilities.js --> reusable utilities (showMessage, generateId, )
        - FlowChart.js --> logic to create flowchart boxes
        - GridControl.js -->  logic for creating scrollable/resizable grid
        - app.js --> implement page behavior

    3. Used multiple .js files to store related functions

    4. Created functions that allow youto drag a text box with x, y position tracking

    5. Added a message box that pops up with the new X and Y coordinates

    6. Returns information to the app based on location

    7. Coordinates save to local storage