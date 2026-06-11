Notes: 

1. CSS Font Weight
    The font-weight property controls the thickness (boldness) of text.
       Syntax:
            selector{
                font-weight: value;
            }
2. CSS Pseudo Classes
    Pseudo-classes select elements based on their state or position.
        Syntax:
            selector:pseudo-class{
                property:value;
            }
        Example:
            button:hover{
                background:red;
            }
    Pseudo-classes begin with single colon (:)
        {:hover,:focus,:first-child,:last-child,:nth-child(),:visited,:checked}
          i) :first-child
                Selects the first child element inside a parent.
          ii) :first-of-type
                Selects first occurrence of a particular element type.
          iii) :hover
                Applied when mouse pointer is over element.
                    button:hover{
                        background:red;
                        color:white;
                    }
           iv) :focus
                Applied when input field is selected.
                    input:focus{
                        border:2px solid blue;
                    }
                    Example:
                        <input type="text">  //When clicked, blue border appears.
            v) :active
                Applied when element is being clicked.
                    button:active{
                        transform:scale(0.95);
                    }
            vi) :visited
                For links already visited.
                    a:visited{
                        color:purple;
                    }
            vii) :link
                For unvisited links.
                    a:link{
                        color:blue;
                    }
            viii) :checked
                For checked checkbox/radio button.
                    input:checked{
                        width:20px;
                        height:20px;
                    }
                   Example:
                        <input type="checkbox" checked>
3. CSS Pseudo Elements
    Pseudo-elements style specific parts of an element.
        Syntax:
            selector::pseudo-element{
                property:value;
            }
    Pseudo-elements use double colon (::)
        Examples:
            {::before,::after,::first-letter,::first-line,::selection}
        i) ::before -> Adds content before element.
                h1::before{
                    content:"★ ";
                }  
        ii) ::after -> Adds content after element.
        iii) ::first-letter -> Styles first letter.
        iv) ::first-line ->Styles first line only.
        v) ::selection -> Styles selected text.