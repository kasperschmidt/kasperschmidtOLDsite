// Created by iWeb 3.0.4 local-build-20160306

setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://kasperschmidt.github.io/Schmidt/Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Blog_files/BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
