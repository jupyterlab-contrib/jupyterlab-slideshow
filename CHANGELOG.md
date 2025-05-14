## Changelog

### `0.3.4`

- [#36](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/36) Fix the metadata key

### `0.3.3`

- [#28](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/28) Bump serialize-javascript from 6.0.1 to 6.0.2
- [#33](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/33) Update github actions
- [#30](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/30) Bump axios from 1.6.2 to 1.8.4
- [#32](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/32) Bump @babel/runtime from 7.23.6 to 7.27.0
- [#31](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/31) Allow stopping presentation with escape key

### `0.3.2`

- [#21](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/21) Get back to previous fragment when using shift+space
- [#23](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/23) Fix CSS for Jupyterlab>4.1 and Notebook
- [#24](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/24) Use toolbar registry for the deck button and move it to the right
- [#22](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/22) Prevent dependabot from using yarn 4
- [#1](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/1) Bump ws from 8.15.0 to 8.18.0
- [#3](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/3) Bump ejs from 3.1.9 to 3.1.10
- [#8](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/8) Bump braces from 3.0.2 to 3.0.3
- [#14](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/14) Bump follow-redirects from 1.15.3 to 1.15.9

### `0.3.1`

- [#16](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/16) Rename npm package

### `0.3.0`

- [#9](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/9) Fix CI installation
- [#10](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/10) Fix navigation if previous is subslide
- [#11](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/11) Keep track of the last fragment or sub-slide displayed when moving back or forward
- [#12](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/12) Optionally shows the code cell prompt (execution count)
- [#13](https://github.com/jupyterlab-contrib/jupyterlab-slideshow/pull/13) Jupyterlab>4.1

### `0.2.1`

- > TBD

### `0.2.0`

- [#56] addresses style and behavior differences on Notebook 7 and JupyterLab 4
- [#36] adds support for Jupyter Notebook 7 and JupyterLab 4

### `0.2.0a1`

- [#56] addresses style and behavior differences on Notebook 7 and JupyterLab 4

[#56]: https://github.com/deathbeds/jupyterlab-deck/issues/56

### `0.2.0a0`

- [#36] adds support for Jupyter Notebook 7 and JupyterLab 4

[#36]: https://github.com/deathbeds/jupyterlab-deck/issues/36

### `0.1.3`

- [#19] adds a basic Markdown presenter, with slides delimited by `---`
- [#22] adds a stack of previously-viewed documents when navigating between documents
- [#27] adds a drag-and-drop _slide layout_ overlay and design tools to support
  customization
- [#29] adds support for using `#<header>` anchors while presenting

[#19]: https://github.com/deathbeds/jupyterlab-deck/issues/19
[#22]: https://github.com/deathbeds/jupyterlab-deck/issues/22
[#27]: https://github.com/deathbeds/jupyterlab-deck/issues/27
[#29]: https://github.com/deathbeds/jupyterlab-deck/issues/29

### `0.1.2`

- [#17] adds foreground and background layers with customized per-cell styling

[#17]: https://github.com/deathbeds/jupyterlab-deck/issues/15

### `0.1.1`

#### Enhancements

- improve keyboard navigation with (<kbd>shift</kbd>)<kbd>space</kbd>
- the active cell is scrolled into view when exiting presentation mode

#### Bug Fixes

- fix some packaging metadata and documentation issues
- fix handling of `null` cells

### `0.1.0`

_initial release_
