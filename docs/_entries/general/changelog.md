---
title: Changelog
name: changelog
---

#### 1.8.10 (january 6 2025)

- Issue #878: fix timeout for opening folder

#### skipped 1.8.9: incorrect build

#### 1.8.8 (november 17 2024)

- Issue #858: load on demand with empty children (thanks to Ivan Kolesov)

#### 1.8.7 (november 2 2024)

- Issue #853: fix dnd to first child (thanks to Oskar von Dungern)

#### 1.8.6 (october 26 2024)

- Issue #840: using the up and down keys scrolls the page
- Issue #846: attach html element before calling onCreateLi

#### 1.8.5 (september 28 2024)

- Update packages

#### 1.8.4 (july 19 2024)

- Issue #819: update braces package to fix security issue

#### 1.8.3 (may 7 2024)

- Issue #805: fix injection vulnerability because of lodash.template
- Issue #808: make the npm package smaller

#### 1.8.2 (march 24 2024)

- Issue #751: fix dnd regression (thanks to Tom De Ford)

#### 1.8.1 (march 16 2024)

- Issue #791: fix onCanMoveTo (thanks to Christophe Caron)

#### 1.8.0 (november 26 2023)

This release drops support for very old browsers (like IE 11).

- Issue #735: compile to es6. This decreases the file size to 49K (from 62K). This is the minified (not gzipped) version.
- Issue #766: open parent nodes in the addToSelection method (thanks to Tmgarcia)

#### 1.7.5 (october 21 2023)

- Issue #734: fix autoscroll issue (thanks to WriterStat)
- issue #736: fix empty folder for prepend

#### 1.7.4 (september 24 2023)

- Issue #675: support toggler on the right with multiline (thanks to Odungern)
- Issue #751: fix inconsistent/incorrect drag & drop node highlighting (thanks to Tom De Ford)

#### 1.7.3 (september 16 2023)

- Issue #746: set jQuery as a peer dependency
- Issue #747: fix eslint import error

#### 1.7.2 (september 14 2023)

- Issue #732: improve types of closedIcon and openedIcon
- Issue #736: use the bundle in the package.json (thanks to TivoSoho)

#### 1.7.1 (august 6 2023)

- Issue #724: improve accessibility

#### 1.7.0 (december 23 2022)

Small breaking change: this release changes the definition of getPreviousNode and getNextNode.

- Issue #704: dispatch the tree.load_data after initializing the tree
- Issue #706: change the functions for getting the next and previous nodes.
    - Rename getPreviousNode to getPreviousVisibleNode and getNextNode to getNextVisibleNode.
    - Add new getPreviousNode and getNextNode functions that ignores if a node is visible.

#### 1.6.3 (august 7 2022)

- Issue # 692: openFolderDelay is false disables opening folders during drag and drop

#### 1.6.2 (december 15 2021)

- Issue #662: fix left alignment for option buttonLeft: false (thanks to Odungern)
- Issue #669: restore focus after load on demand (thanks to Jaccoky)

#### 1.6.1 (june 24 2021)

- Issues #652 and #655: add filter example
- Issue #655: add refresh method

#### 1.6.0 (february 9 2021)

- Issue #647: improve performance of internal node lookup
    - Changed: getNodeById doesn't convert strings to numbers anymore
- Issue #648: fix drag-and-drop on ie11

##### 1.5.3 (january 12 2021)

- Issue #640: add startDndDelay option (thanks to Erik van Eykelen)

##### 1.5.2 (october 25 2020)

- Issue #621: decrease build size using Rollup
- Issue #624: updateNode: check if the focus must be reset (thanks to Erik van Eykelen)
- Issue #626: improve autoScroll when using the onCanMoveTo option (thanks to Dmytro Tarianyk)

##### 1.5.1 (september 23 2020)

- Issue #615: fix XSS vulnerability (thanks to Aimeos)
- Issue #618: fix autoescape (thanks to Jorge Casas)

##### 1.5.0 (september 6 2020)

- Issue #603: improve performance of title rendering (thanks to Bekefi Gergely)

##### 1.4.12 (november 11 2019)

- Issue #579: have icon for empty folders (thanks to Andrew Hinde)
- Issue #583: improve performance of deleting a node (thanks to maltmann-muc)

##### 1.4.11 (july 22 2019)

- Issue #571: add options to selectNode

##### 1.4.10 (april 6 2019)

- Issue #554: fix wrapping of long node titles (thanks to Damian Kulp)
- Issue #557: devserver serves from root (thanks to Aaron Gray)
- Issue #558: check for null parameters

##### 1.4.9 (september 9 2018)

- Issue #532: add tree.loading_data event (thanks to Theo Bot)

##### 1.4.8 (july 23 2018)

- Issue #537: SVG xlink as openedIcon/closedIcon disappear after click (thanks to Terry Ouyang)
- Issue #538: add typescript type definitions

##### 1.4.7 (june 16 2018)

- Issue #531: updateNode must trigger tree.refresh (thanks to TivoSoho)

##### 1.4.6 (may 8 2018)

- Issue #525: add debug build (tree.jquery.debug.js) (thanks to Yurayko)
- Issue #526: correctly load on demand if dataUrl is an object (thanks to Yurayko)

##### 1.4.5 (march 14 2018)

- Issue #515: do not use deprecated jquery functions
- Issue #520: add mustSetFocus parameter to addToSelection (thanks to Romario Costegillio)

##### 1.4.4 (december 21 2017)

- Issue #506: use jQuery alias to fix conflict with Prototype.js
- Issue #508: handle horizontal scrolling (thanks to Troels Holstein Kaa)

##### 1.4.3 (october 22 2017)

- Issue #503: add animationSpeed option

##### 1.4.2 (july 15 2017)

- Issue #489: make it possible to use nested element for icon (thanks to
  terryoy)
- Issue #492: handle empty string for icon options
- Issue #493: add tabIndex option (thanks to Aimeos)
- Issue #494: remove tabindex if a node is deselected (thanks to Aimeos)

##### 1.4.1 (june 5 2017)

- Issue #487: setState must clear the selection (thanks to terryoy)
- Issue #488: add is_selected parameter to onCreateLi

##### 1.4.0 (may 12 2017)

- Issue #481: fixed error that occured when opening an invalid node (thanks to
  Luciano Deriu)
- Issue #482: changed keyboard logic (thanks to bnsblue)
    - Set focus to the selected node.
    - The keyboard is active if a tree node has the focus.

##### 1.3.8 (april 12 2017)

- Issue #471: use webpack instead of browserify
- Issue #472: use 'jquery.on' instead of deprecated 'bind'
- Issue #478: use typescript instead of coffeescript
- Issue #480: support jquery 3.2.x

##### 1.3.7 (january 11 2017)

- Issue 462: add on_finished parameter to openNode function
- Issue 467: fix autoscroll when tree position changes after tree init (thanks
  to Themre)

##### 1.3.6 (november 5 2016)

- Issue 453: make it possible to initialize the tree without data
- Issue 455: isNodeSelected must return boolean (thanks to Joshua Harrison)

##### 1.3.5 (september 15 2016)

- Issue 437: autoEscape option applies to dragged elements
- Issue 448: calling updateNode with an empty children array should remove the
  children

##### 1.3.4 (july 18 2016)

- Issue 433: Added getNodeByHtmlElement function
- Issue 435: Added getNodeByCallback function
- Issue 437: Fix XSS issue in drag and drop

##### 1.3.3 (may 30 2016)

- Issue 420: Set the correct aria-level after updating a node (thanks to Fermin
  Gallego)
- Issue 426 and 427: Make it possible to append a subtree using appendNode
    - also works for addNodeAfter, addNodeBefore, prependNode and updateNode

##### 1.3.2 (march 3 2016)

- Issue 412: Set ajax parameters in dataUrl option (thanks to Atul Bajpai)
- Issue 415: Add onLoading callback parameter

##### 1.3.0 (november 8 2015)

- Issue 234: Added onDragMove and onDragStop callbacks
- Issue 394: Label displays 'null' in UI when the label key is null (thanks to
  Carlos Ponce)
- Issue 396: Trigger init.tree correctly for load on demand (thanks to jmashore)
- Issue 397: Aria accessibility support (thanks to Rich Caloggero)
- Issue 398: Functions should return the `jquery` element
- Issue 400: Added on_finished parameter to reload function
- Issue 402: Fix autoscroll when tree element is created outside the dom (thanks
  to hbaptiste)

##### 1.2.1 (july 14 2015)

- Issue 48: Added right-to-left support (thanks to Mohamed Ouederni, Ashraf
  Fayad and Udi Oron)
- Issue 371: Added include_parent parameter to getData function
- Issue 375: Fix conflict with prototype.js (thanks to Henry de Guzman)

##### 1.1.0 (april 6 2015)

- Issue 348: Circle for drag-and-drop is not positioned correctly for content
  box-sizing
- Issue 356: Fixed drag-and-drop after nodeUpdate (thanks to Iker Vázquez)
- Issue 360: Add a trailing semicolon to tree.jquery.js (thanks to David Thenon)

##### 1.0.0 (january 11 2015)

- Issues 273 and 304: autoOpen and saveState now works for nodes that are loaded
  on demand
- Issue 283: Added getNodesByProperty function (thanks to Neeraj)
- Issue 332: openNode should open parent nodes (thanks to Kitano Yoshitomo)
- Issue 335: Add cloneNode missing argument for Gecko <13.0 (thanks to Tvinky)
- Issue 337: Added functions for moving up and down
- Issue 341: Fixed drag-and-drop border when nodes have padding (thanks to Alex
  Musayev)

##### 0.22 (september 25 2014)

- Issue 291: Dragging Item - do not open node if you don't stay over it (thanks
  to Roman Klos)
- Issue 300: Toggle function should get default slide value from options (thanks
  to Tazle)
- Issue 303: Correctly set selected_node parameter in query string
- Issue 315: Fix for issue when moving node over closed folder (thanks to
  terrybr)
- Issue 320: Fixed error in drag and drop (thanks to Jerry Wu)

##### 0.21 (june 7 2014)

- Issue 263: Improve styling of toggle button
- Issue 266: Make it possible to use html for toggle buttons
- Issue 262: updateNode on first level makes node disappear (thanks to Miloš
  Đekić)
- Issue 260: Exempt 'select' elements from keyboard navigation (thanks to Eli
  Flanagan)
- Issue 270: Fixed error 'selected_single_node is not defined' (thanks to Bryan
  Smith)
- Issue 279: .jqtree-moving removed when loading subtree (thanks to Marc-Stefan
  Cassola)
- Issue 280: CSS3 Circle and style optimization (thanks to Marc-Stefan Cassola)
- Issue 283: Added function getNodesByProperty (thanks to Cedrik Vanderhaegen)
- Issue 292: Save state if multiple nodes are selected (thanks to MykhailoP)
- Issue 294: Handle click on input element in tree (thanks to Naeco33)

##### 0.20 (march 9 2014)

- Issue 235: Added setOption function
- Issue 241: Prevent duplicate event call after re-initalization
- Issue 246: Check if folder must be opened while moving node (thanks to Dave
  Gardner)
- Issue 247: Improve performance of updateNode (thanks to Gordon Woodhull)
- Issue 250: Improve performance of creating dom elements (thanks to Carlos
  Scheidegger)
- Issue 252: BorderDropHint has wrong height for border-box box-sizing (thanks
  to simshaun)
- Issue 253: Added reload function
- Issue 256: Toggler button is underlined
- Issue 257: Make it possible to open a lazily loaded folder using the keyboard
- Issue 258: Correctly unselect children if a node is reloaded

##### 0.19 (december 8 2013)

- Issue 225: Fixes TypeError when removing nodes without ids that aren't
  selected (thanks to Marcus McCurdy)
- Issue 222: scrollToNode does not consider direct parent
- Issue 228: add property click_event to tree.click and tree.dblclick events
  (thanks to Gordon Woodhull)
- Issue 78: Added option openFolderDelay: the delay for opening a folder during
  drag-and-drop (thanks to Jason Diamond)

##### 0.18 (september 17 2013)

- Issue 132: Skip keyboard handling if focus is on input element (thanks to
  Bingeling)
- Issue 179 and 180: Added dataFilter option to filter the returned data from
  jQuery.ajax (thanks to Cheton Wu and Tony Dilger)
- Issue 184: If the node id is 0, the id mapping is incorrect (thanks to Ika Wu)
- Issue 190: The function selectNode should not toggle (thanks to Gordon
  Woodhull)
- Issue 192: Added keyboardSupport option (thanks to Ika Wu)
- Issue 181: Added tree.dblclick event (thanks to eskaigualker)
- Issue 196: localStorage doesn't work in Safari private browsing (thanks to
  thebagg)
- Issue 203: Adding deselected_node attribute to event object of tree.select
  event (thanks to tedtoer)

##### 0.17 (july 14 2013)

- Issue 132: Added keyboard support
- Issue 154: Calling loadDataFromUrl should not trigger tree.init event (thanks
  to Davide Bellini)
- Issue 158: Index not updated on updateNode (thanks to Sam Mousa)
- Issue 159: Cannot reselect node after unselecting it (thanks to Comanche)
- Issue 162: Added getPreviousSibling and getNextSibling functions (thanks to
  Dimaninc)
- Issue 169: Added touch support (thanks to Comanche)
- Issue 171: Added functions getState and setState
- Issue 175: Make it possible to install jqTree using bower (thanks to Adam
  Miskiewicz)

##### 0.16 (may 17 2013)

- Issue 62: Added functions for multiple select
- Issue 125: Add option for overriding TRIANGLE_RIGHT and TRIANGLE_DOWN (thanks
  to Sam D)
- Issue 126: Event tree.open event fires after first tree.select on top level
  node
- Issue 129: Allow native context menu to be display (thanks to Charles
  Bourasseau)
- Issue 130: Selectable not implemented (thanks to Sam D)
- Issue 133: loadDataFromUrl doesn't work when only parent_node and callback are
  passed in (thanks to Simone Deponti)
- Issue 134: selectNode from inside tree.init breaks on loadData (thanks to Sam
  D)
- Issue 145: Auto-open nodes with drag n drop when drag not enabled for that
  node (thanks to Daniel Powell)
- Issue 146: Added function scrollToNode (thanks to Davide Bellini)

##### 0.15 (march 16 2013)

- Issue 100: Clicking on the jqtree-element element will trigger click event
- Issue 102: Add original event to tree.move event
- Issue 103: Added getLevel function to Node class
- Issue 104: The addNodeBefore method must return the new node
- Issue 105: Added nodeClass option
- Issue 112: Fix call to iterate in removeNode (thanks to Ingemar Ådahl)
- Issue 113: Added onLoadFailed option (thanks to Shuhei Kondo)
- Issue 118: Deselect a node when click and already selected
- Issue 119: Make it easier to reload a subtree
- Issue 121: Unselect node if it's reloaded by loadDataFromUrl

##### 0.14 (december 2 2012)

###### Api changes

- Removed parameter **must_open_parents** from function **selectNode**.
- Changed **slide** parameter in functions **openNode** and **closeNode**.

###### Issues

- Issue 80: Support more options for loading data from the server. E.g. the
  'post' method (thanks to Rodrigo Rosenfeld Rosas)
- Issue 81: getSelectedNode must return false if node is removed
- Issue 82: Autoscroll for drag-and-drop
- Issue 84: Fix correct type param in \$.ajax() (thanks to Rodrigo Rosenfeld
  Rosas)
- Issue 85: Option to turn slide animation on or off
- Issue 86: The openNode function must automatically open parents
- Issue 87: Remove the must_open_parents parameter from the selectNode function
- Issue 88: selectNode must also work if selectable option is false
- Issue 89: Clicking in title with img or em does not work
- Issue 96: Added jqtree_common class to avoid css clashes (thanks to Yaniv Iny)

##### 0.13 (october 10 2012)

- Issue 54: Added tree.select event
- Issue 63: Fixed contextmenu event
- Issue 67: Use unicode characters for triangle buttons (thanks to Younès)
- Issue 70: Load data from the server using the loadData function
- Issue 78: Drag and drop is trigger happy

##### 0.12 (august 14 2012)

- Issue 46: Added tree.refresh event
- Issue 47: Function 'selectNode' must properly open the parent nodes
- Issue 49: Make sure that widget functions can be called in the 'tree.init'
  event
- Issue 50: Add namespace to css classes
- Issue 51: closeNode to collapse tree doesn't work
- Issue 55: Load-on-demand from the server
- Issue 58: Added updateNode function
- Issue 59: Added moveNode function
- Issue 60: Use native JSON.stringify function

##### 0.11 (july 8 2012)

- Autoescape text
- Added autoEscape option
- Issue 33: appendNode does not correctly refresh the tree
- Issue 34: unset internal pointer to previously selected node on DOM deselect
- Issue 38: Correctly check if browser has support for localstorage
- Issue 41: Open nodes are not displayed correctly in ie7

##### 0.10 (june 10 2012)

- Optimized getNodeById
- Issue #18 and #26: Made comparison in getNodeById less strict
- Added function prependNode
- Added 'data-url' option
- Added removeNode function
- Issue #24: Tree with jquery ui Dialog: expand causes resize and move problem
- Added Travis ci support
- Added addNodeAfter, addNodeBefore and addParentNode
- Renamed icons.png to jqtree-icons.png
- selectNode with empty node deselects the current node

##### 0.9 (may 9 2012)

- Issue 15: 'tree.open' event is not triggered when dragging nodes
- Issue 18: Allow moveNode to be canceled through ev.preventDefault()
- Use sprite for images
- Added function closeNode
- Added support for localstorage
- Implemented alternative data format

##### 0.8 (april 18 2012)

- Replace jquery.ui widget with SimpleWidget
- Added 'previous_parent' to 'tree.move' event
- Add posibility to load subtree
- Added 'tree.open' and 'tree.close' events
