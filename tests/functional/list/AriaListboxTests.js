define(["intern!object",
        "intern/dojo/node!leadfoot/helpers/pollUntil",
        "intern/chai!assert",
        "require"
        ], function (registerSuite, pollUntil, assert, require) {

	var WAIT_TIMEOUT_MS = 180000;
	
	var POLL_INTERVAL = 500;

	var TEST_TIMEOUT_MS = 240000;

	registerSuite({
		name: "AriaListbox tests",
		"selectionMode 'multiple'": function () {
			this.timeout = TEST_TIMEOUT_MS;
			var remote = this.remote;
			var listId = "list-mark-1";
			return remote
			.get(require.toUrl("./listbox-mark-1.html"))
			.then(pollUntil("return ('ready' in window &&  ready "
					+ "&& document.getElementById('" + listId + "') "
					+ "&& !document.getElementById('" + listId + "').hasAttribute('aria-busy')) ? true : null;",
					[],
					WAIT_TIMEOUT_MS,
					POLL_INTERVAL))
			.then(function () {
				remote
				.findByXpath("//*[@id='" + listId + "']//d-list-item-renderer[3]/div")
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "false");
					})
					.click()
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "true");
					})
					.click()
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "false");
					})
					.click()
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "true");
					})
					.end()
				.findByXpath("//*[@id='" + listId + "']//d-list-item-renderer[4]/div")
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "false");
					})
					.click()
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "true");
					})
					.end()
				.findByXpath("//*[@id='" + listId + "']//d-list-item-renderer[3]/div")
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "true");
					})
					.end();
			});
		},
		"selectionMode 'single'": function () {
			this.timeout = TEST_TIMEOUT_MS;
			var remote = this.remote;
			var listId = "list-mark-2";
			return remote
			.get(require.toUrl("./listbox-mark-2.html"))
			.then(pollUntil("return ('ready' in window &&  ready "
					+ "&& document.getElementById('" + listId + "') "
					+ "&& !document.getElementById('" + listId + "').hasAttribute('aria-busy')) ? true : null;",
					[],
					WAIT_TIMEOUT_MS,
					POLL_INTERVAL))
			.then(function () {
				remote
				.findByXpath("//*[@id='" + listId + "']//d-list-item-renderer[3]/div")
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "false", "test 1");
					})
					.click()
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "true", "test 2");
					})
					.click()
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "false", "test 3");
					})
					.click()
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "true", "test 4");
					})
					.end()
				.findByXpath("//*[@id='" + listId + "']//d-list-item-renderer[4]/div")
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "false", "test 5");
					})
					.click()
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "true", "test 6");
					})
					.end()
				.findByXpath("//*[@id='" + listId + "']//d-list-item-renderer[3]/div")
					.getAttribute("aria-selected")
					.then(function (value) {
						assert.strictEqual(value, "false", "test 7");
					})
					.end();
			});
		},
		"keyboard navigation with default renderers": function () {
			this.timeout = TEST_TIMEOUT_MS;
			var remote = this.remote;
			if (/safari|iPhone/.test(remote.environmentType.browserName) || remote.environmentType.safari) {
				// SafariDriver doesn't support tabbing, see https://code.google.com/p/selenium/issues/detail?id=5403
				console.log("Skipping test '" + this.parent.name + ": " + this.name + "' on this platform");
				return remote.end();
			}
			return remote
			.get(require.toUrl("./listbox-prog-1.html"))
			.then(pollUntil("return ('ready' in window &&  ready "
					+ "&& document.getElementById('list-prog-1') "
					+ "&& !document.getElementById('list-prog-1').hasAttribute('aria-busy')) ? true : null;",
					[],
					WAIT_TIMEOUT_MS,
					POLL_INTERVAL))
			.then(function () {
				remote
				.pressKeys("\uE004") // Press TAB
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "Programmatic item of order 0\nlist-prog-1");
				})
				.end()
				.pressKeys("\uE015") // Press DOWN ARROW
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "Programmatic item of order 1\nlist-prog-1");
				})
				.end()
				.pressKeys("\uE015") // Press DOWN ARROW
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "Programmatic item of order 2\nlist-prog-1");
				})
				.end()
				.pressKeys("\uE014") // Press RIGHT ARROW
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "Programmatic item of order 2\nlist-prog-1");
				})
				.end()
				.pressKeys("\uE006") // Press ENTER
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "Programmatic item of order 2\nlist-prog-1");
				})
				.end()
				.pressKeys("\uE013") // Press UP ARROW
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "Programmatic item of order 1\nlist-prog-1");
				})
				.end()
				.pressKeys("\uE004") // Press TAB
				.pressKeys("\uE008\uE004") // Press Shift + TAB
				.pressKeys("\uE008") // release shift
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "Programmatic item of order 1\nlist-prog-1");
				})
				.end()
				.pressKeys("\uE032") // Press F2
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "Programmatic item of order 1\nlist-prog-1");
				})
				.end();
			});
		},
		"keyboard navigation with categorized items": function () {
			this.timeout = TEST_TIMEOUT_MS;
			var remote = this.remote;
			if (/safari|iPhone/.test(remote.environmentType.browserName) || remote.environmentType.safari) {
				// SafariDriver doesn't support tabbing, see https://code.google.com/p/selenium/issues/detail?id=5403
				console.log("Skipping test '" + this.parent.name + ": " + this.name + "' on this platform");
				return remote.end();
			}
			return remote
			.get(require.toUrl("./listbox-mark-3.html"))
			.then(pollUntil("return ('ready' in window &&  ready "
					+ "&& document.getElementById('list-mark-3') "
					+ "&& !document.getElementById('list-mark-3').hasAttribute('aria-busy')) ? true : null",
					[],
					WAIT_TIMEOUT_MS,
					POLL_INTERVAL))
			.then(function () {
				remote
				.pressKeys("\uE004") // Press TAB
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nA");
				})
				.end()
				.pressKeys("\uE013") // Press UP ARROW
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 9\nB");
				})
				.end()
				.pressKeys("\uE015") // Press DOWN ARROW
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nA");
				})
				.pressKeys("\uE015") // Press DOWN ARROW 5 times
				.pressKeys("\uE015")
				.pressKeys("\uE015")
				.pressKeys("\uE015")
				.pressKeys("\uE015")
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 5\nB");
				})
				.end();
			});
		},
		// TODO: ADD A TEST: CLICKING ON A CATEGORY HEADER (see https://github.com/ibm-js/delite/issues/229)
		"keyboard multiple selection": function () {
			this.timeout = TEST_TIMEOUT_MS;
			var remote = this.remote;
			if (/safari|iPhone/.test(remote.environmentType.browserName) || remote.environmentType.safari) {
				// SafariDriver doesn't support tabbing, see https://code.google.com/p/selenium/issues/detail?id=5403
				console.log("Skipping test '" + this.parent.name + ": " + this.name + "' on this platform");
				return remote.end();
			}
			return remote
			.get(require.toUrl("./listbox-mark-1.html"))
			.then(pollUntil("return ('ready' in window &&  ready "
					+ "&& document.getElementById('list-mark-1') "
					+ "&& !document.getElementById('list-mark-1').hasAttribute('aria-busy')) ? true : null;",
					[],
					WAIT_TIMEOUT_MS,
					POLL_INTERVAL))
			.then(function () {
				remote
				.pressKeys("\uE004") // Press TAB
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text A");
				})
				.end()
				.pressKeys("\uE00D") // Press SPACE
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text A");
				})
				.getAttribute("aria-selected")
				.then(function (value) {
					assert.strictEqual(value, "true");
				})
				.end()
				.pressKeys("\uE00D") // Press SPACE
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text A");
				})
				.getAttribute("aria-selected")
				.then(function (value) {
					assert.strictEqual(value, "false");
				})
				.end();
			});
		},
		"keyboard single selection": function () {
			this.timeout = TEST_TIMEOUT_MS;
			var remote = this.remote;
			if (/safari|iPhone/.test(remote.environmentType.browserName) || remote.environmentType.safari) {
				// SafariDriver doesn't support tabbing, see https://code.google.com/p/selenium/issues/detail?id=5403
				console.log("Skipping test '" + this.parent.name + ": " + this.name + "' on this platform");
				return remote.end();
			}
			return remote
			.get(require.toUrl("./listbox-mark-2.html"))
			.then(pollUntil("return ('ready' in window &&  ready "
					+ "&& document.getElementById('list-mark-2') "
					+ "&& !document.getElementById('list-mark-2').hasAttribute('aria-busy')) ? true : null;",
					[],
					WAIT_TIMEOUT_MS,
					POLL_INTERVAL))
			.then(function () {
				remote
				.pressKeys("\uE004") // Press TAB
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text 1", "keystroke 1");
				})
				.end()
				.pressKeys("\uE00D") // Press SPACE
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text 1", "keystroke 2");
				})
				.getAttribute("aria-selected")
				.then(function (value) {
					assert.strictEqual(value, "true", "keystroke 2");
				})
				.end()
				.sleep(10)
				.pressKeys("\uE00D") // Press SPACE
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text 1", "keystroke 3");
				})
				.getAttribute("aria-selected")
				.then(function (value) {
					assert.strictEqual(value, "false", "keystroke 3");
				})
				.end()
				.pressKeys("\uE010") // Press END
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text 1", "keystroke 4");
				})
				.getAttribute("aria-selected")
				.then(function (value) {
					assert.strictEqual(value, "false", "keystroke 4");
				})
				.end()
				.pressKeys("\uE00F") // Press PAGE DOWN
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 9\nright text 10", "keystroke 5");
				})
				.getAttribute("aria-selected")
				.then(function (value) {
					assert.strictEqual(value, "false", "keystroke 5");
				})
				.end()
				.pressKeys("\uE011") // Press HOME
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 9\nright text 10", "keystroke 6");
				})
				.getAttribute("aria-selected")
				.then(function (value) {
					assert.strictEqual(value, "false", "keystroke 6");
				})
				.end()
				.pressKeys("\uE00E") // Press PAGE UP
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text 1", "keystroke 7");
				})
				.getAttribute("aria-selected")
				.then(function (value) {
					assert.strictEqual(value, "false", "keystroke 7");
				})
				.end()
				.pressKeys("\uE013") // Press UP ARROW
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 9\nright text 10", "keystroke 8");
				})
				.end()
				.pressKeys("\uE015") // Press DOWN ARROW
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text 1", "keystroke 9");
				})
				.end();
			});
		},
		"keyboard search": function () {
			this.timeout = TEST_TIMEOUT_MS;
			var remote = this.remote;
			if (/safari|iPhone/.test(remote.environmentType.browserName) || remote.environmentType.safari) {
				// SafariDriver doesn't support tabbing, see https://code.google.com/p/selenium/issues/detail?id=5403
				console.log("Skipping test '" + this.parent.name + ": " + this.name + "' on this platform");
				return remote.end();
			}
			return remote
			.get(require.toUrl("./listbox-mark-1.html"))
			.then(pollUntil("return ('ready' in window &&  ready "
					+ "&& document.getElementById('list-mark-1') "
					+ "&& !document.getElementById('list-mark-1').hasAttribute('aria-busy')) ? true : null;",
					[],
					WAIT_TIMEOUT_MS,
					POLL_INTERVAL))
			.then(function () {
				remote
				.pressKeys("\uE004") // Press TAB
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text A");
				})
				.end()
				.pressKeys("R")
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text A");
				})
				.end()
				.sleep(10)
				.pressKeys("r")
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 0\nright text A");
				})
				.end()
				.sleep(10)
				.pressKeys("L")
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 1\nright text B");
				})
				.end()
				.sleep(10)
				.pressKeys("l")
				.getActiveElement()
				.getVisibleText()
				.then(function (value) {
					assert.strictEqual(value, "list item 2\nright text C");
				})
				.end();
			});
		}
	});
});
