/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
	var node = document.getElementsByTagName(tag)[0];
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', file_path);
	node.appendChild(script);
}
//if (window.jQuery == undefined) {injectScript(chrome.runtime.getURL('jquery-3.4.1.js'), 'body');}
injectScript(chrome.runtime.getURL('jszip.js'), 'body');
injectScript(chrome.runtime.getURL('zip-full.min.js'), 'body');
injectScript(chrome.runtime.getURL('FantiaDownloader.js'), 'body');