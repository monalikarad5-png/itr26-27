(1) CSS Fonts,COLORS,SELECTORS.
(2) SPECIFICITY,BORDER,BOX MODEL.
(3) BLOCK,INLINE,INLINE BLOCK ELEMENTS.
(4) CSS Text Properties, Inheritance.
(5) Pseudo Classes And ELements.
What is CSS?
Cascading Style Sheets.
Html Creates Structure Of Our WebPage.
CSS turns Our Boring Looking HTML Web Pages To Good Looking Websites.
It is Impossible to Create Website without Html.
1996 : CSS1
1998 : CSS2
1998 : CSS3(current)
Hakon Wium lie  --> Proposed Concept of CSS.--> 1994.
Tim Berners Lee --> Father of Web / Html.

Notes :

1. CSS Styling Ways: 
    CSS can be applied to HTML in three ways.
       i) Inline CSS- Applied directly inside an HTML element using the style attribute.
          <p style="color:red;">Hello World</p>
       ii) Internal CSS- Written inside the <style> tag.
            <head>
            <style>
            p{
                color:blue;
            }
            </style>
            </head>
       iii) External CSS- Written in a separate .css file.
                <link rel="stylesheet" href="style.css">
                style.css: 
                    p{  color:green; }
2. CSS Fonts: 
    Fonts control text appearance.
        i) Font Family:
            font-family: Arial, sans-serif;
        ii) Font Size
            font-size: 20px;
            Units:
                px , em, rem, %, vw
        iii) Font Weight
            font-weight: bold;
        iv) Font Style
            font-style: italic;
            Values:
                normal, italic ,oblique
        Ex: font: italic bold 20px Arial;
3. CSS Colors: 
        i) Color Names: color:red;
        ii) RGB: color: rgb(255,0,0);
        iii) RGBA: color: rgba(255,0,0,0.5);
        iv) HEX: color:#ff0000;
        v) HSL: color:hsl(0,100%,50%);
        vi) Background Color: background-color: yellow; 
4. CSS Selectors: 
    Selectors target HTML elements.
        i) Universal Selector: 
            Ex: *{ margin:0;}
        ii) Element Selector
            EX: p{  color:red;}
        iii) Class Selector
            EX: .title{ color:blue;}
        iv) ID Selector
            Ex: #header{  background:black;}
        v) Group Selector
            EX: h1,p,div{color:green;} 
5. Utility, Class, ID
    i) Utility Class: Small reusable classes.
        EX: 
            CSS   .text-center{
                text-align:center;
            }
            .mt-10{
                margin-top:10px;
            }
            HTML
               <h1 class="text-center mt-10">Hello</h1>
    ii) Class: Used for multiple elements.
          EX:     
            .box{
                border:1px solid black;
            }
    ii) ID: Unique identifier.
          ex:
            #main{
                background:yellow;
            }
            Rules:
                One ID per page element.
                IDs should be unique.    
6. More CSS Selectors
    i) Descendant Selector : Targets all p inside div.
        EX:    div p{ color:red;}
    ii) Child Selector: Direct children only.
        EX:    div > p{  color:blue;}
    iii) Adjacent Sibling: First p immediately after h1.
        EX :   h1 + p{ color:green;}
    iv) General Sibling: All p siblings after h1.
        Ex: h1 ~ p{ color:red;}
7. Chrome Developer Tool: 
       Chrome DevTools helps inspect and debug web pages.(press F12)
          Features: 
            Elements Tab: Inspect HTML and CSS.
            Styles Panel: View applied styles.
            Console: Run JavaScript.
            Network: Check page requests.
            Performance: Analyze speed.
8. CSS Border
        Basic Border: border:2px solid black;
        Border Width: border-width:3px;
        Border Style: border-style:dashed;
             Styles: 
                 solid, dashed, dotted, double, groove ,
        Border Color: border-color:red;
        Border Radius: border-radius:10px;
        Circle: border-radius:50%;
9. CSS Box Model
        Every element is a rectangle.( Margin, Border, Padding, Content)
    Components:
        Content: Actual data.
        Padding: Space inside border. (padding:20px;)
        Border: border:2px solid black;
        Margin: Space outside border. (margin:20px;)
10. Margin Collapsing
        Vertical margins merge together.
      Example:
            .box1{
                margin-bottom:30px;
            }

            .box2{
                margin-top:20px;
            }
        Expected: 30 + 20 = 50px
        Actual: 30px
            Largest margin wins.
            Only affects vertical margins.
11. Inline vs Block Level Elements
        *Block Elements: Take full width.
            Examples: <div>, <p>, <h1>, <section>
            Properties:
                New line starts automatically.
                Width can be changed.
        *Inline Elements: Take only required width.
            Examples:<span>,<a>,<strong>
            Properties:
                No new line.
                Width/height often ignored.
12. Image Element:
        HTML image tag:
            <img src="image.jpg" alt="Nature">
           Attributes:
                src: Image path.  alt: Alternative text.
        width: <img width="300">
        height: <img height="200">
      CSS Example:
        img{
            width:100%;
            border-radius:10px;
        }
13. Inline Block Display: 
        Combines inline and block features.
        display:inline-block;
    Example: 
        .box{
            display:inline-block;
            width:150px;
            height:150px;
        }
    Benefits:
        Elements stay in same line.
        Width and height work.
14. CSS Box Sizing Border Box: 
        i) Default: (box-sizing:content-box;)
        Width excludes padding and border.
         Example:
            width:200px;
            padding:20px;
            border:5px solid;
        Actual width: 250px
        ii) Border Box: (box-sizing:border-box;)
        Width includes:Content,Padding,Border
            *{
                box-sizing:border-box;
            }
15. CSS Inheritance: 
        Some properties automatically pass to child elements.
            Example: 
             CSS:
                    body{ color:blue;}
             HTML:
                <body>
                    <p>Hello</p>  //p becomes blue.
                </body>
        Common Inherited Properties: 
            color,font-family,font-size,line-height,text-align
        Non-Inherited Properties:
            margin,padding,border,width,height
16. CSS Text Align: 
        Controls horizontal alignment.
            i) Left: text-align:left;
            ii) Center: text-align:center;
            iii) Right: text-align:right;
            iv) Justify: text-align:justify;
                    Aligns text evenly on both sides.