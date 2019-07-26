<h1>pop-it</h1>
<p>Pop-it. A(nother) simple Vanilla JavaScript plugin that launch a pop up box where place your message. No jQuery is needed. No pretentions, just for fun.</p>

<h2>Demo</h2>
<p>
    <a href="https://www.mamutlove.com/projects/pop-it/" title="Demo" target="_blank">Demo 1</a> | 
    <a href="https://www.mamutlove.com/projects/pop-it/index2.html" title="Demo" target="_blank">Demo 2</a> | 
    <a href="https://www.mamutlove.com/projects/pop-it/index3.html" title="Demo" target="_blank">Demo 3</a> | 
    <a href="https://www.mamutlove.com/projects/pop-it/index4.html" title="Demo" target="_blank">Demo 4</a>
</p>

<h2>Usage</h2>
<p>• Download or fork the repository.</p>
<p>• Include the CSS &amp; Javascript file minify or not in your HTML.</p>
<p>• Place your message in the DOM's .u-modal container using its structure. (See the different demos where you could find a simple or double column structure.</p>
<p>• Initialize your modal box. <pre>var modal = new Popit();</pre></p>
<p>• Remember you can customize some features 
    <pre>var modal = new Popit({
        auto: false, 
        veil: "disabled"
    });</pre>
</p>

<h2>Options</h2>
<table>
    <tr>
        <td>auto</td>
        <td>true/false launches the modal box automatically</td>
    </tr>
    <tr>
        <td>veil</td>
        <td>"active"/"disabled" makes the outer veil available to attach an event to close de modal box</td>
    </tr>
</table>

<p>• Transitions are made with CSS</p>
<p>• CSS BEM convetion classes</p>
<p>• CSS classes are namespaced under u- prefix in order to avoid strange behaviours with your own CSS</p>

<h2>Final thoughts</h2>
<p>Please, take this <a href="https://www.mamutlove.com/projects/pop-it/" title="Demo" target="_blank">Demo</a> as it is, and feel free to download, modify, break, use or destroy this code.</p>
