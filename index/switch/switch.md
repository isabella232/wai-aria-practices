---
# This is a generated file
title: "Switch Example"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/switch/switch

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/switch.css" rel="stylesheet" />
<script src="js/switch.js" type="text/javascript"></script>


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left" aria-describedby="sidebar-toc">
            <h2 id="sidebar-toc" class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                    <li>
                      <a href="#ex_label">Example</a>
                    </li>
                   
                    <li>
                      <a href="#accessibility-features">Accessibility Features</a>
                    </li>
                   
                    <li>
                      <a href="#kbd_label">Keyboard Support</a>
                    </li>
                   
                    <li>
                      <a href="#rps_label">Role, Property, State, and Tabindex  Attributes</a>
                    </li>
                   
                    <li>
                      <a href="#javascript-and-css-source-code">Javascript and CSS Source Code</a>
                    </li>
                   
                    <li>
                      <a href="#sc1_label">HTML Source Code</a>
                    </li>
                  
            </ul>
            
    <ul class="sidebar-list sidebar-list-yellow">
      <li><a href="/about/#browser_and_AT_support">Browser and Assistive Technology Support</a></li>
      <li><a href="https://github.com/w3c/aria-practices/issues/new">Report Issue</a></li>
      <li><a href="https://github.com/w3c/aria-practices/projects/2">Related Issues</a></li>
      <li><a href="/patterns/switch/">Design Pattern</a></li>
    </ul>
  
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2><img alt=""
        src="/assets/img/switch.svg"
        class="example-page-example-icon"
      >
  
  <div>
    
    <p>
      This example illustrates implementation of the <a href="/patterns/switch/">switch design pattern</a> for a notification preferences control.
      It uses a <code>div</code> element for the switch and CSS borders to provide graphical rendering of switch states.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="switch-button.html">Switch Example Using HTML Button</a>: A group of 2 switches based on HTML <code>button</code> elements that turn lights on and off.</li>
      <li><a href="switch-checkbox.html">Switch Example Using HTML Checkbox Input</a>: A group of 2 switches based on HTML <code>input[type="checkbox"]</code> elements that turn accessibility preferences on and off.</li>
    </ul>

    <section>
      <div class="example-header">
        <h2 id="ex_label" tabindex="-1">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <div role="switch"
          aria-checked="false"
          tabindex="0">
          <span class="label">Notifications</span>
          <span class="switch">
            <span></span>
          </span>
          <span class="on" aria-hidden="true">On</span>
          <span class="off" aria-hidden="true">Off</span>
        </div>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
      <ul>
        <li>
          To make understanding the state of the switch easier for users with visual or cognitive disabilities, a text equivalent of the state (<q>on</q> or <q>off</q>) is displayed adjacent to the graphical state indicator.
          CSS attribute selectors ensure the label displayed is synchronized with the value of the <code>aria-checked</code> attribute.<br>
          <strong>NOTE:</strong> To prevent redundant announcement of the state by screen readers, the text indicators of state are hidden from assistive technologies with <code>aria-hidden</code>.
        </li>
        <li>Spacing, border widths and fill are important to ensure the graphical states are visible and discernible to people with visual impairments, including when browser or operating system high contrast settings are enabled:
          <ul>
            <li>To make  the graphical representation of the state of a switch readily perceivable, two pixel borders are used for the switch state container and a solid color is used for the fill of the circles indicating the on and off states.</li>
            <li>To ensure users can perceive the difference between the container and the circles used to indicate the state of the switch, there are two pixels of space between the container border and the circles.</li>
          </ul>
        </li>
        <li>To enhance perceivability  when operating the switches, visual keyboard focus and hover are styled using the CSS <code>:hover</code> and <code>:focus</code> pseudo-classes:
          <ul>
            <li>To make it easier to perceive focus and the relationship between a label and its associated switch, focus creates a border around both the switch and the label and also changes the background color.</li>
            <li>To make it easier to perceive that clicking either the label or switch will activate the switch, the hover indicator is the same as the focus indicator.</li>
            <li>To help people with visual impairments identify the switch as an interactive element, the cursor is changed to a pointer when hovering over the switch.</li>
            <li>
              Note: Because transparent borders are visible on some systems with operating system high contrast settings enabled, transparency cannot be used to create a visual difference between the element that is focused an other elements.
              Instead of using transparency, the focused element has a thicker border and less padding.
              When an element receives focus, its border changes from zero to two pixels and padding is reduced by two pixels.
              When an element loses focus, its border changes from two pixels to two and padding is increased by two pixels.
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
      <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
        <tr data-test-id="key-tab">
          <th><kbd>Tab</kbd></th>
          <td>
            <ul>
              <li>Moves keyboard focus to the <code>switch</code>.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-space">
            <th><kbd>Space</kbd><br><kbd>Enter</kbd></th>
            <td>
              <ul>
                <li>Toggle switch between on and off.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex  Attributes</h2>
      <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="switch-role">
            <th scope="row"><code>switch</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>Identifies the <code>div</code> element as a <code>switch</code>.</td>
          </tr>
          <tr data-test-id="switch-tabindex">
            <td></td>
            <th scope="row"><code>tabindex="0"</code></th>
            <td><code>div</code></td>
            <td>Includes the switch in the page <kbd>Tab</kbd> sequence.</td>
          </tr>
          <tr data-test-id="switch-aria-checked">
            <td></td>
            <th scope="row"><code>aria-checked="false"</code></th>
            <td><code>div</code></td>
            <td>
                <ul>
                  <li>Indicates the <code>switch</code> is off.</li>
                  <li>CSS attribute selectors (e.g. <code>[aria-checked="false"]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                </ul>
            </td>
          </tr>
          <tr data-test-id="switch-aria-checked">
            <td></td>
            <th scope="row"><code>aria-checked="true"</code></th>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Indicates the <code>switch</code> is on.</li>
                <li>CSS attribute selectors (e.g. <code>[aria-checked="true"]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="aria-hidden">
            <td></td>
            <th scope="row"><code>aria-hidden="true"</code></th>
            <td><code>span.on</code> and <code>span.off</code></td>
            <td>
              <ul>
                <li>Removes the strings <q>on</q> and <q>off</q> that appear to the right of the switch from the accessible name of the switch.</li>
                <li>These strings are included only for enhancing visual comprehension of the state; element states are not permitted in accessible names.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
      <ul id="css_js_files">
        <li>CSS: <a href="css/switch.css" type="tex/css">switch.css</a></li>
        <li>Javascript: <a href="js/switch.js" type="text/javascript">switch.js</a></li>
      </ul>
    </section>

    <section>
      <h2 id="sc1_label" tabindex="-1">HTML Source Code</h2>
      <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
      <pre><code id="sc1"></code></pre>
      <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
      
      <script>
        sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
        sourceCode.make();
      </script>
    </section>
  </div>
  <nav>
    
    <a href="/patterns/switch/">Switch Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
  </nav>
</div>
        </div>
      
</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script src="/assets/skipto.min.js"></script>
