/**
 * Plugin Name: TinyMCE Table of Contents
 * Version: 1.0
 * Plugin URI: https://github.com/sumegizoltan73/tinymce-table-of-contents
 * Author: Zoltán Péter Sümegi
 * Author URI: https://github.com/sumegizoltan73
 * Description: Generated table of contents.
 * Tested up to: 5
 * License: MIT
 */

tinymce.PluginManager.add("table-of-contents", function (editor, url) {
  const openDialog = function () {
    return editor.windowManager.open({
      title: "Table of contents",
      body: {
        type: "panel",
        items: [
          {
            type: "input",
            name: "depth",
            label: "Depth",
            value: "5",
          },
          {
            type: "input",
            name: "toplevel",
            label: "Top level heading",
            value: "h2",
          },
          {
            type: "input",
            name: "tabspace",
            label: "Tabulator spaces",
            value: "4",
          },
          {
            type: "input",
            name: "classname",
            label: "Table class",
            value: "table-of-content",
          },
          {
            type: "checkbox",
            name: "add_links",
            label: "Add navigation links to table",
            checked: true,
          },
        ],
      },
      buttons: [
        {
          type: "cancel",
          text: "Close",
        },
        {
          type: "submit",
          text: "Save",
          primary: true,
        },
      ],
      onSubmit: function (api) {
        var data = api.getData();
        editor.insertContent("Toc depth: " + data.depth);
        api.close();
      },
    });
  };

  editor.ui.registry.addButton("example", {
    image: url + "/table-of-contents.png",
    onAction: function () {
      openDialog();
    },
  });

  editor.ui.registry.addMenuItem("example", {
    text: "Table of contents",
    onAction: function () {
      openDialog();
    },
  });

  return {
    getMetadata: function () {
      return {
        name: "Table of contents",
        url: "https://github.com/sumegizoltan73/tinymce-table-of-contents",
      };
    },
  };
});
