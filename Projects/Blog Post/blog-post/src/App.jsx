import { BlockQuote, BlogPost, Footer, Headline, Hero, Info} from './components'

function App() {

  return (
    <>
      <Hero/>
      <BlogPost>
        <Info date={"12.31.2050"} title={"ALL ABOUT CSS BLOG"}/>
        <h2>All About Typography</h2>
        <Headline>
          <p> 
            Headlines, like this one, are great ways to quickly capture the
            reader&apos;s attention, to give them a sumary, intro, or other important
            information in a web page. You can use
            text-transform: uppercase; to make a whole body of text
            uppercase using CSS if you really need to grab attention!
          </p>
        </Headline>
        <p>
          Okay, now that we&apos;re done screaming in the headline in all caps (which you should do sparingly) - it&apos;s time
          to chat more about other components of typography. You&apos;ll notice that we chose a nice serif font for our
          headings, and a nice sans-serif font for our body text. This is intentional! Serif font faces are generally
          considered pretty inaccessible as a body text style, since at smaller sizes it&apos;s much more difficult to
          visually differentiate the characters from one another. At large font sizes, such as those seen in most
          headings, serif fonts are considered fine, since the larger style makes it easier to see where serif
          characters start and where they end.
        </p>
        <p>
          But wait! What if you want more than just normal text on your page? Another common thing you might see in web
          pages are quotes. To make quotes, we can use the blockquote element and style it accordingly, so it stands
          out a bit as a non-body text quote.
        </p>
        <BlockQuote
          quote="This is a quote - you probably knew that at a glance since we gave it some nice styling. Pretty nice, huh? A great lesson in User Experience Design, where we take special care to implement our web page in a way that makes it pleasant and intuitive for our users/readers. Differentiating our different typography components visually makes information much more organized and easier to digest for our users."
          author="A wise person"
        />
        <hr/>
        <h3>a new section</h3>
        <p>
          And just like that, we&apos;ve got a new section of content separated by a <code>hr</code> element (a &apos;horizontal
          rule&apos; or a divider) and a new heading. Isn&apos;t putting content together fun?
        </p>
        <p>
          Notice as well that when we entered in the <code>H3</code> content, it was all lowercase, but now it&apos;s in a
          nice Title Case, where the first letter of each word is capitalized. We did that with CSS! Using <code>text-transform:
          capitalize;</code> we can implement title cased content.
        </p>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae est dapibus, viverra metus ac,
          fermentum libero. Integer lobortis enim ac arcu malesuada ultrices. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <h5>Heading 5</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae est dapibus, viverra metus ac,
          fermentum libero. Integer lobortis enim ac arcu malesuada ultrices. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae est dapibus, viverra metus ac,
          fermentum libero. Integer lobortis enim ac arcu malesuada ultrices. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <h3>Common Font Sizing Approaches</h3>
        <h4><code>px</code> (pixels)</h4>
        <p>
          Pixels are the simplest way to hard code your font size. By default the browser sets the root font size to
          <code>16px</code>, but you can change the font size in the <code>body</code> element or any other HTML
          element by setting <code>font-size</code> to any number of <code>px</code>.
        </p>
        <h4><code>em</code></h4>
        <p>
          <code>em</code> units size font relative to the parent element. For example, if the <code>body</code> element
          is <code>16px</code>, and a nested <code>div</code> element&apos;s font size is set to <code>1.5em</code>, 
          the browser will multiply <code>16px</code> x 1.5, resulting in <code>24px</code> font in the <code>div</code>.
        </p>
        <h4><code>rem</code> (root em)</h4>
        <p>
          Root <code>em</code> units are similar to em, but they are relative to the root font size instead of the
          parent element of whatever is being styled. For example, if the root font size (the font size of the body element) 
          is set to <code>16px</code>, and we have a <code>p</code> element nested many layers down with a <code>font-size</code> 
          set to <code>2rem</code>, that paragraph will have <code>32px</code> font. If the body font size ever changes, 
          this paragraph will also change accordingly.
        </p>
        <h4>Which one do I use?</h4>
        <p>
          Great question! Generally, people try to stick to using <code>em</code> or <code>rem</code> over
          <code>px</code>, since they make responsive typography that scales up and down across different device widths much easier. 
          Using px for your font sizes is not as dynamic, and you may find that writing media queries to update all the various element 
          font sizes in pixels at different screen widths is not the most scalable approach to typography.
        </p>
        <p>
          Between <code>em</code> and <code>rem</code>, rem has a nice advantage of all elements being relative to one
          single root font value, where nested elements with parent/child font size dependencies can still be hard to manage with em units.
          When writing responsive styles, rem allows you to simply update the root font size at different screen sizes
          and all elements using rem units will adjust themselves accordingly creating a super easy-to-manage typography size system.
        </p>
        <p>
          In small projects you may not have an issues hard coding pixelage, but it&apos;s always important to understand
          the drawbacks of writing styles that may not be responsive or dynamic.
        </p>
      </BlogPost>
      <Footer/>
    </>
  );
}

export default App
